import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://njopnlwqejbxetcahmxd.supabase.co'
const supabaseKey = 'sb_publishable_6M-Q5NvAajKXHqxGqPhF5A_0RGmp71i'

export const supabase = createClient(supabaseUrl, supabaseKey)