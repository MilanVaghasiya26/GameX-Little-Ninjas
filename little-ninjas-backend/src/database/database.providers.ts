import { Sequelize } from 'sequelize-typescript';
import { Counting } from '../entities/counting.entity';
import { Identify } from '../entities/identify.entity';
import { Maths } from '../entities/maths.entity';
import { Users } from '../entities/user.entity';
// import DatabaseSeeder from './seeder/index';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT,
        password: process.env.DATABASE_PASSWORD,
        username: process.env.DATABASE_USERNAME,
        database: process.env.DATABASE_NAME,
        logging: false,
        pool: {
          max: 100,
          min: 0,
          acquire: 30000,
          idle: 5000,
        },
      });

      sequelize.addModels([Identify, Counting, Maths, Users]);

      // await sequelize
      //   .sync({ force: false })
      //   .then(async () => {
      //     return await DatabaseSeeder.run();
      //   })
      //   .then(() => {
      //     console.log('********** Successfully seeded db **********');
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     console.log('********** Error in database sedding **********');
      //   });
      await sequelize.sync({ force: false }).catch((err) => {
        console.log(err);
        console.log('********** Error in database sedding **********');
      });

      return sequelize;
    },
  },
];
