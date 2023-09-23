import { Schema, model } from 'mongoose';

const UserSchema = Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio.'],
  },
  email: {
    type: String,
    required: [true, 'El correo es obligatorio.'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'El contraseña es obligatorio.'],
  },
  img: {
    type: String,
  },
  role: {
    type: String,
    required: true,
    default: 'USER_ROLE',
    enum: ['ADMIN_ROLE', 'USER_ROLE'],
  },
  state: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

UserSchema.methods.toJSON = function () {
  const { __v, password, _id, ...user } = this.toObject();
  user.uid = _id;
  return user;
};

export default model('User', UserSchema);
