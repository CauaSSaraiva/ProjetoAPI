import { createClient } from "@supabase/supabase-js";

// Verifica e carrega as variáveis do ambiente local (apenas para desenvolvimento local)
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Lê as variáveis de ambiente
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// Validação: Certifique-se de que as variáveis estão definidas
if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Supabase URL or Key is missing. Check your environment variables."
  );
}

// Cria o cliente do Supabase
const supabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabaseClient; // Exporta a instância para uso em outros arquivos
