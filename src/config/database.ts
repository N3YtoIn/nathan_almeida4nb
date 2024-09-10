// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://nasystem_5s8a_user:7MjLJf1Vw6y7vnZAmGvl1irBnu5YGb3f@dpg-crbovtij1k6c738e4ctg-a.oregon-postgres.render.com/nasystem_5s8a';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;