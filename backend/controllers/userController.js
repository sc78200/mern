import mongoose from 'mongoose';
import userSchema from './models/userModels';

const User = mongoose.model('User', userSchema);

export const getAll = async (req, res) => {
  const users= await User.find(); //.populate('message');
  res.json(users);
};
