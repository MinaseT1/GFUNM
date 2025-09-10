// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dotenv').config();
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client with service role for admin operations
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

console.log('📚 Inserting books using Supabase client...');

const now = new Date().toISOString();

const sampleBooks = [
  {
    id: 'book-1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 12.99,
    description: 'A classic American novel set in the Jazz Age.',
    image_url: '/images/great-gatsby.jpg',
    polar_product_id: 'polar_product_1',
    created_at: now,
    updated_at: now
  },
  {
    id: 'book-2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: 14.99,
    description: 'A gripping tale of racial injustice and childhood innocence.',
    image_url: '/images/mockingbird.jpg',
    polar_product_id: 'polar_product_2',
    created_at: now,
    updated_at: now
  },
  {
    id: 'book-3',
    title: '1984',
    author: 'George Orwell',
    price: 13.99,
    description: 'A dystopian social science fiction novel.',
    image_url: '/images/1984.jpg',
    polar_product_id: 'polar_product_3',
    created_at: now,
    updated_at: now
  },
  {
    id: 'book-4',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    price: 11.99,
    description: 'A romantic novel of manners.',
    image_url: '/images/pride-prejudice.jpg',
    polar_product_id: 'polar_product_4',
    created_at: now,
    updated_at: now
  },
  {
    id: 'book-5',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    price: 13.49,
    description: 'A controversial novel about teenage rebellion.',
    image_url: '/images/catcher-rye.jpg',
    polar_product_id: 'polar_product_5',
    created_at: now,
    updated_at: now
  }
];

async function insertBooks() {
  try {
    console.log('🗑️  Clearing existing books...');
    const { error: deleteError } = await supabase
      .from('books')
      .delete()
      .neq('id', 0); // Delete all records
    
    if (deleteError) {
      console.log('⚠️  Delete warning (table might be empty):', deleteError.message);
    } else {
      console.log('✅ Existing books cleared');
    }

    console.log('📝 Inserting new books...');
    const { data, error } = await supabase
      .from('books')
      .insert(sampleBooks)
      .select();
    
    if (error) {
      console.error('❌ Insert error:', error);
      return false;
    }
    
    console.log('✅ Books inserted successfully!');
    console.log(`📚 Inserted ${data.length} books:`);
    data.forEach(book => {
      console.log(`  - ${book.title} by ${book.author} ($${book.price}) [ID: ${book.id}]`);
    });
    
    return true;
  } catch (err) {
    console.error('❌ Insert error:', err.message);
    return false;
  }
}

async function verifyBooks() {
  console.log('\n🔍 Verifying books...');
  try {
    const { data: books, error } = await supabase
      .from('books')
      .select('*');
    
    if (error) {
      console.error('❌ Verification error:', error);
      return false;
    }
    
    console.log(`✅ Verification successful - Found ${books.length} books`);
    return books.length > 0;
  } catch (err) {
    console.error('❌ Verification error:', err.message);
    return false;
  }
}

async function main() {
  const insertSuccess = await insertBooks();
  if (insertSuccess) {
    await verifyBooks();
  }
}

main().catch(console.error);