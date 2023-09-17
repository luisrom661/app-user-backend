import { DataSource } from 'typeorm';

export const dbConnection = async () => {

    const AppDataSource = new DataSource({
      type: 'postgres',
      host: process.env.FL0_DB_HOST,
      port: process.env.FL0_DB_PORT,
      username: process.env.FL0_DB_USERNAME,
      password: process.env.FL0_DB_PASSWORD,
      database: process.env.FL0_DB_NAME,
      ssl: {
        rejectUnauthorized: false,
      },
      synchronize: true,
      logging: true,
      entities: ['src/entities/**/*.entity.js'],
    });

    try {
        await AppDataSource.initialize().then(() => {
            console.log('Data Source has been initialized!');
        })
    } catch (error) {
        console.error('Error during Data Source initialization', error);
    }

    return AppDataSource;
}




