import * as mongoose from 'mongoose';

export interface Organization extends mongoose.Document {
  organizationName: string;
  Logo: string;
  enabled: boolean;
}

let OrganizationSchema = new mongoose.Schema({
  organizationName: {
    type: String,
    required: true
  },
  Logo: String,
  enabled: Boolean
});

export default mongoose.model<Organization>('OrganizationSchema', OrganizationSchema);
