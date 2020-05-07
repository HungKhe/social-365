import mongoose from 'mongoose';
const dbPath: string = process.env.MONGO_URL || 'mongodb://localhost:27017/db_notify';
mongoose.connect(dbPath, {
    useNewUrlParser: true,
    useFindAndModify: false
});
mongoose.Promise = global.Promise;
const db: mongoose.Connection = mongoose.connection;
db.on("error", () => {
    console.log("> error occurred from the database");
});
db.once("open", () => {
    console.log(`> successfully opened the database to ${ dbPath }`);
});
export default mongoose;
// C:\Users\tungn\Desktop\App\mongodb-win32-x86_64-2012plus-4.2.2\bin\mongod.exe --dbpath C:\Users\tungn\Desktop\App\mongodb-win32-x86_64-2012plus-4.2.2\dataDB