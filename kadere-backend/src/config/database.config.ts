export default () => {
  return {
    database: {
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      dbName: process.env.DB_NAME,
    },
  };
};
