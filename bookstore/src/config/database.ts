import { Pool } from "pg";

const connectionString = "postgresql://postgres:PYyFjrQOCmZiVTznqHOPccDasTiBonNt@junction.proxy.rlwy.net:12244/railway";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
