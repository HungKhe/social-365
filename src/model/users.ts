import mongoose from './index';
const schema = {
    user_id: { type: mongoose.Types.ObjectId, auto: true },
    user_name: String,
    user_email: String,
    user_password: String,
    full_name: String,
    create_date: Date,
    phone_number: String,
    gender: String,
    photo: String,
    address: String
};
const collectionName = "users";
const shopSchema = new mongoose.Schema(schema);
const Users = mongoose.model(collectionName, shopSchema);
export default Users;