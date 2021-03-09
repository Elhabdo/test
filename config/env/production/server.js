module.exports = ({ env }) => ({
    url: env('HEROKU_URL','https://fathomless-refuge-17911.herokuapp.com/'),
  });