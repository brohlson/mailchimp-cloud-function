/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */

var Mailchimp = require("mailchimp-api-v3");
var mailchimp = new Mailchimp(API_KEY);

exports.mailchimpSubscribe = (req, res) => {
  let email = req.query.email || req.body.email;

  mailchimp
    .post(`/lists/${LIST_ID}/members`, {
      email_address: email,
      status: "subscribed"
    })
    .then(function(results) {
      res.status(200).send(results);
    })
    .catch(function(err) {
      res.status(err.status).send(err);
    });
};
