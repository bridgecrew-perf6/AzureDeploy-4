import mongoose from 'mongoose';
import log from './logger.utils';
import dotenv from 'dotenv';
dotenv.config();
async function connect() {
  const dbUri = process.env.DBURI!;
  const dbUriTest = process.env.DBURITEST!;
  try {
    if (process.env.NODE_ENV?.trim() === 'test') {
      await mongoose.connect(dbUriTest);
      log.info('Connect TestDB Successfully!');
    } else {
      await mongoose.connect(dbUri);
      log.info('Connect Successfully!');
    }
  } catch (error) {
    log.info('Connect failure!');
    process.exit(1);
  }
}
export default connect;
