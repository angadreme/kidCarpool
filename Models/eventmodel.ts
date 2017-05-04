import * as mongoose from 'mongoose';

export interface Event extends mongoose.Document {
  eventName: string;
  eventDate: number;
  eventLocation: string;
  locationAddress: string;
  startTime: string;
  endTime: string;
  teamID: string;
}

let EventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true
  },
  eventDate: {
    type: Number,
    required: true
  },
  eventLocation: {
    type: String,
    required: true
  },
  locationAddress: String,
  startTime: {
    type: String,
    required: true
  },
  endTime: String,
  teamID : {
    type: String,
    required: true
  }
});

export default mongoose.model<Event>('Event', EventSchema);
