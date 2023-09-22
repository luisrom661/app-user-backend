import pg from 'pg';

const { Client } = pg;

export const dbConnection = async () => {
  const client = new Client({
    user: process.env.FL0_DB_USERNAME,
    password: process.env.FL0_DB_PASSWORD,
    host: process.env.FL0_DB_HOST,
    database: process.env.FL0_DB_NAME,
    port: process.env.FL0_DB_PORT,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    await client.connect();
    console.log('¡Connected to PostgreSQL database!');
    return client;
  } catch (error) {
    console.error('Error connecting to PostgreSQL database:', error.message);
    throw error;
  }
};
