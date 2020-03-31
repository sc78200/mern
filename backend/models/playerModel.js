import { Schema } from 'mongoose';

const playerSchema = new Schema({
  firstName: {
    type: String,
    required: true
  }

});

export default playerSchema;
