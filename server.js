const http = require('http');
const express = require('express');
const app = express();
import superagent from 'superagent';

app.use(require('morgan')('short'));

(function initWebpack() {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack/common.config');
  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath,
  }));

  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
  }));

  app.use(express.static(__dirname + '/'));
})();

const uri = 'http://actuary-development.policygenius.com/policies?date_of_birth=1980-01-21&gender=male&health_profile[currently_uses_tobacco]=false&health_profile[height_feet]=5&health_profile[height_inches]=8&health_profile[history_of_tobacco_use]=false&health_profile[weight]=180&policy_profile[coverage_amount]=700000&policy_profile[term_in_years]=30&state_code=TX';
app.get('/quotes', (req, res) => {
  superagent.get(uri, (err, r) => {
      if (err) {
        res.status(500);
        return;
      }
      res.status(200).json(r.body.underwritten_policies);
    });
});

app.get(/.*/, function root(req, res) {
  res.sendFile(__dirname + '/index.html');
});

const server = http.createServer(app);
server.listen(process.env.PORT || 3000, function onListen() {
  const address = server.address();
  console.log('Listening on: %j', address);
  console.log(' -> that probably means: http://localhost:%d', address.port);
});
