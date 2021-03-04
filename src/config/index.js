const config = {
  port: process.env.PORT || 3000,
  db: {
    config: {
      knex: {
        client: 'postgresql',
        connection: {
          user: process.env.DB_USER,
          host: process.env.DB_HOST,
          port: process.env.DB_PORT,
          database: process.env.DB_NAME,
          password: process.env.DB_PASS,
        },
        pool: {
          min: 2,
          max: 10,
        },
        debug: false,
        migrations: {
          tableName: 'knex_migrations',
          directory: 'src/db/migrations',
        },
      },
    },
  },
};

module.exports = config;
