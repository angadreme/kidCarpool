import * as mongoose from 'mongoose';

export interface Team extends mongoose.Document {
  teamName: string;
  headCoachName: string;
  organizationID: string;
}

let TeamSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: true
  },
  headCoachName: String,
  organizationID: {
    type: String,
    required: true
  }
});

export default mongoose.model<Team>('Team', TeamSchema);
