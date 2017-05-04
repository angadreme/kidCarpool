import * as mongoose from 'mongoose';

export interface StudentUser extends mongoose.Document{
  studentID: string;
  userID: string;
}

let StudentUserSchema = new mongoose.Schema({
  studentID: {
    type: String,
    required: true
  },
  userID: {
    type: String,
    required: true
  }
});

export default mongoose.model<StudentUser>('StudentUser', StudentUserSchema);
