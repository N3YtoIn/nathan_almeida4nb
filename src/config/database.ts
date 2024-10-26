import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://nathandata_7kwu_user:5TfzMIS9YyL09bRMuHCRdMt7yvyrGY7c@dpg-csejkg68ii6s7395e1sg-a.oregon-postgres.render.com/nathandata_7kwu';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;