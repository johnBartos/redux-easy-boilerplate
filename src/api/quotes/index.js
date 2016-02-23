import express from  'express';
import superagent from 'superagent';
const Router = express.Router();

console.log('hello')

const uri = 'http://actuary-development.policygenius.com/policies?date_of_birth=1980-01-21&gender=male&health_profile[currently_uses_tobacco]=false&health_profile[height_feet]=5&health_profile[height_inches]=8&health_profile[history_of_tobacco_use]=false&health_profile[weight]=180&policy_profile[coverage_amount]=700000&policy_profile[term_in_years]=30&state_code=TX';

const getQuotes = (req, res) => {
  superagent.get(uri)
    .end((err, r) => {
      if (err) {
        res.status(500);
        return;
      }
      res.status(200).json(r);
    });
};

Router.get('/', getQuotes)

export default Router;
