const path = require('path');
const dotenv = require('dotenv');
const envFilePath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envFilePath });

module.exports = {
    rapidAPI_key: process.env.RAPID_API_KEY,
    rapidAPI_host: process.env.RAPID_API_HOST,
    mongo_url: process.env.MONGO_URL
}