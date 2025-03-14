const bizSdk = require('facebook-nodejs-business-sdk');
require('dotenv').config();


const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
const api = bizSdk.FacebookAdsApi.init(accessToken);  
api.setDebug(true);

module.exports = { bizSdk, api };