import * as mongoose from 'mongoose';

export interface Student extends mongoose.Document {
  firstName: string;
  lastName: string;
  referenceCode: string;
  organizationID: string;
}

let StudentSchema = new mongoose.Schema ({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  referenceCode: {
    type: String,
    required: true
  },
  organizationID: {
    type: String,
    required: true
  }
});

export default mongoose.model<Student>('Student', StudentSchema);
