import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import { IUser, IUserModel } from './user.interface';
import config from '../../config';

const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
    student: {
      type: Schema.Types.ObjectId,
      ref: 'Student',
    },
    faculty: {
      type: Schema.Types.ObjectId,
      ref: 'Faculty',
    },
    admin: {
      type: Schema.Types.ObjectId,
      ref: 'Admin',
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

// this pre hook only works User.create() || user.save()
userSchema.pre('save', async function (next) {
  // hashing user password
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds)
  );

  next();
});

const User = model<IUser, IUserModel>('User', userSchema);

export default User;
