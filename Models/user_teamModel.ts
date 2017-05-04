import * as mongoose from 'mongoose';

export interface UserTeam extends mongoose.Document {
  userID: string;
  teamID: string;
}

let UserTeamSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true
  },
  teamID: {
    type: String,
    required: true
  }
});

export default mongoose.model<UserTeam>('UserTeam', UserTeamSchema);
