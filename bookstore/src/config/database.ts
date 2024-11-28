import { Pool } from 'pg';

const connectionString = 'postgresql://nathandata_4xt1_user:XRHIGmJiAYUkrvnNcq5ub8ICELSquLjj@dpg-ct2a0j3qf0us73ck7580-a.oregon-postgres.render.com/nathandata_4xt1';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  }
});

export default pool;