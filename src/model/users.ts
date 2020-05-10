import mongoose from './index';
import bcrypt from 'bcryptjs';
const schema = {
    user_id: { type: mongoose.Types.ObjectId, auto: true },
    user_name: String,
    user_email: String,
    user_password: String,
    full_name: String,
    create_date: {
        type: Date,
        default: Date.now
    },
    phone_number: String,
    gender: String,
    photo: String,
    address: String
};
const modelName = "users";
const userSchema = new mongoose.Schema(schema);
userSchema.methods.comparePassword = function(password: string) {
    return bcrypt.compareSync(password, this.user_password);
};
const Users = mongoose.model(modelName, userSchema);
export default Users;