import * as mongoose from 'mongoose';

export interface User extends mongoose.Document {
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  zip: number;
  phone: number;
  accessLevel: number;
  organizationID: string;
  teamID: string;
  enabled: boolean;
  firstLogin: boolean;
}

let UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: String,
  address2: String,
  city: String,
  state: String,
  zip: Number,
  phone: Number,
  accessLevel: {
    type: Number,
    required: true
  },
  organizationID: {
    type: String,
    required: true
  },
  TeamID: String,
  enabled: Boolean,
  firstLogin: Boolean
});

export default mongoose.model<User>('User', UserSchema);
