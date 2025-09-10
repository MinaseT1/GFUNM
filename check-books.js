// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dotenv').config();
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

console.log('🔍 Checking books in database...');
console.log('Supabase URL:', supabaseUrl);

async function checkBooks() {
  try {
    // Try different approaches to get books
    console.log('\n1. Trying basic select...');
    const { data: books1, error: error1 } = await supabase
      .from('books')
      .select('*');
    
    if (error1) {
      console.error('❌ Basic select error:', error1);
    } else {
      console.log('✅ Basic select result:', books1?.length || 0, 'books');
      if (books1?.length > 0) {
        books1.forEach(book => console.log(`  📚 ${book.title} - $${book.price}`));
      }
    }

    console.log('\n2. Trying with specific columns...');
    const { data: books2, error: error2 } = await supabase
      .from('books')
      .select('id, title, price');
    
    if (error2) {
      console.error('❌ Column select error:', error2);
    } else {
      console.log('✅ Column select result:', books2?.length || 0, 'books');
    }

    console.log('\n3. Trying count...');
    const { count, error: error3 } = await supabase
      .from('books')
      .select('*', { count: 'exact', head: true });
    
    if (error3) {
      console.error('❌ Count error:', error3);
    } else {
      console.log('✅ Count result:', count, 'books');
    }

    console.log('\n4. Checking table schema...');
    const { data: schema, error: schemaError } = await supabase
      .rpc('get_table_info', { table_name: 'books' })
      .single();
    
    if (schemaError) {
      console.log('⚠️  Schema check failed (expected):', schemaError.message);
    } else {
      console.log('✅ Schema info:', schema);
    }

  } catch (err) {
    console.error('❌ Check error:', err.message);
  }
}

checkBooks().catch(console.error);