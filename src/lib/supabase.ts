import { createClient } from "@supabase/supabase-js"
import settings from "../config/settings"

const config = settings()

const supabase = createClient(
    config.VITE_SUPABASE_URL,
    config.VITE_SUPABASE_KEY
)

export default supabase
