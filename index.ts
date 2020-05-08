import app from './src/app-v2';
const port = process.env.PORT || 8888;
app.listen(port, () => console.log(`Listening in port ${port}`)); 