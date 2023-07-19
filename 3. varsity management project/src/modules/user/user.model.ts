import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import { IUser, IUserModel } from './user.interface';
import config from '../../config';

const userSchema = new Schema<IUser, IUserModel>(
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
      select: 0,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    passwordChangedAt: {
      type: Date,
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

// userSchema.methods.isUserExist = async function (id) {
//   return await User.findOne(
//     { id },
//     { id: 1, password: 1, needsPasswordChange: 1 }
//   ).lean();
// };

// userSchema.methods.isPasswordMatched = async function (givenPass, savedPass) {
//   return await bcrypt.compare(givenPass, savedPass);
// };

userSchema.statics.isUserExist = async function (id) {
  return await User.findOne(
    { id },
    { id: 1, password: 1, needsPasswordChange: 1, role: 1 }
  ).lean();
};

userSchema.statics.isPasswordMatched = async function (givenPass, savedPass) {
  return await bcrypt.compare(givenPass, savedPass);
};

// this pre hook only works User.create() || user.save()
userSchema.pre('save', async function (next) {
  // hashing user password
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds)
  );

  if (!this.needsPasswordChange) {
    this.passwordChangedAt = new Date();
  }
  next();
});

const User = model<IUser, IUserModel>('User', userSchema);

export default User;
