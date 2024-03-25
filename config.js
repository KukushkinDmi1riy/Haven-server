import SES from 'aws-sdk/clients/ses.js';
import S3 from 'aws-sdk/clients/s3.js';
import NodeGeocoder from 'node-geocoder';

const AWSPassword = process.env.AWSPassword;
const user_name = process.env.user_name;
const URl = process.env.URl;

export const EMAIL_FROM = '"BookingSame" <frontendjsdev@gmail.com>';
export const REPLY_TO = 'frontendjsdev@gmail.com';

const awsConfig = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'ap-southeast-2',
  //   region: 'eu-north-1',
  apiVersion: '2010-12-01',
};

export const AWSSES = new SES(awsConfig);
export const AWSS3 = new S3(awsConfig);

const options = {
  provider: 'google',
  apiKey: process.env.GOOGLE_API_KEY,
  formatter: null, // 'gpx', 'string', ...
};
export const GOOGLE_GEOCODER = NodeGeocoder(options);

export const CLIENT_URL = 'http://localhost:3000';
