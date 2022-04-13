import * as mongoose from 'mongoose';
import { UserSchema } from './user';
import { AlertSchema } from './alerts';
import { ChartSchema } from './chart';

const PATH = process.env.DB_PATH || 'mongodb://localhost:27017/wedppy';

mongoose.connect(PATH);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'db connection error:'));
db.once('open', () => console.info('connected to db ', PATH));

export const User = mongoose.model('User', UserSchema);
export const Alert = mongoose.model('Alert', AlertSchema);
export const Chart = mongoose.model('chart', ChartSchema);
