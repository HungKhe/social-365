import mongoose from './index';
import bcrypt from 'bcryptjs';
const schema = {
    user_id: { type: mongoose.Types.ObjectId, auto: true },
    user_name: {
        type: String,
        required: true
    },
    user_email: {
        type: String,
        required: true
    },
    user_password: {
        type: String,
        required: true
    },
    user_full_name: {
        type: String,
        default: ""
    },
    user_create_date: {
        type: Date,
        default: Date.now
    },
    user_phone_number: {
        type: String,
        default: ""
    },
    user_gender: {
        type: String,
        default: ""
    },
    user_photo: {
        type: String,
        default: ""
    },
    user_address: {
        type: String,
        default: ""
    },
    token_list: {
        access_token: {
            type: String,
            default: ""
        },
        refresh_token: {
            type: String,
            default: ""
        }
    }
};
const modelName = "users";
const userSchema = new mongoose.Schema(schema);
userSchema.methods.comparePassword = function(password: string) {
    return bcrypt.compareSync(password, this.user_password);
};
const UsersModel = mongoose.model(modelName, userSchema);
export default UsersModel;