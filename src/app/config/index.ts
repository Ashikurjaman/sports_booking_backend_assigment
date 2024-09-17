import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_url: process.env.DB_URL,
  jwt_access_token: process.env.JWT_ACCESS_TOKEN,
  jwt_refresh_access_token: process.env.JWT_ACCESS_SECRET,
  jwt_token_access_time: process.env.JWT_TOKEN_ACCESS_TIME,
  jwt_refresh_token_access_time: process.env.JWT_REFRESH_TOKEN_ACCESS_TIME,
};
