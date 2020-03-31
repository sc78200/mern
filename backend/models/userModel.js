import { Schema } from 'mongoose';

const userSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  message: [{type: Schema.Types.ObjectId, ref: 'message'}]
});

export default userSchema;
