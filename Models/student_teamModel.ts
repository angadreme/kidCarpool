import * as mongoose from 'mongoose';

export interface StudentTeam extends mongoose.Document {
  studentID: string;
  teamID: string;
}

let StudentTeamSchema = new mongoose.Schema({
  studentID: {
    type: String,
    required: true
  },
  teamID: {
    type: String,
    required: true
  }
});

export default mongoose.model<StudentTeam>('StudentTeam', StudentTeamSchema);
