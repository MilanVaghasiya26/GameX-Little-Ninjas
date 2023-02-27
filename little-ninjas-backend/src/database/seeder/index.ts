import { IdentifySeeder } from './identify';
import { CountingSeeder } from './counting';
import { MathsSeeder } from './maths';

class DatabaseSeeder {
  async run() {
    await IdentifySeeder.execute().then(() =>
      console.log('Identify data added successfully!'),
    );

    await CountingSeeder.execute().then(() =>
      console.log('Counting data added successfully!'),
    );

    await MathsSeeder.execute().then(() =>
      console.log('Maths data added successfully!'),
    );
    return 'Done';
  }
}

export default new DatabaseSeeder();
