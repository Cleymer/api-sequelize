module.exports = {
  development: {
    username: "postgres",
    password: "postgres",
    database: "furniture",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    dialectOptions : {
      ssl : {
        rejectUnauthorized : false
      }
    } 
  },
  jwtSecret: process.env.JWT_SECRET,
  jwtAuth: process.env.JWT_AUTH,
  emailSmtp: process.env.EMAIL_SMTP,
  passSmtp: process.env.PASS_SMTP
}
