module.exports = ({ env }) => ({
  host: env('HOST', 'localhost'),
  port: env.int('PORT', 9696),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'acd0e1abc7b133f63357c91d9a33b568'),
    },
  },
});
