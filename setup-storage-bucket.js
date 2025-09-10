require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // Use service role for admin operations
const supabase = createClient(supabaseUrl, supabaseKey);

console.log('📁 Setting up Storage Bucket...');

async function setupStorageBucket() {
  try {
    // Check if bucket already exists
    const { data: buckets, error: listError } = await supabase.storage.listBuckets();
    if (listError) {
      console.error('❌ Error listing buckets:', listError.message);
      return false;
    }

    const booksBucket = buckets.find(bucket => bucket.name === 'books');
    
    if (booksBucket) {
      console.log('✅ Books bucket already exists');
    } else {
      // Create the books bucket
      const { data, error } = await supabase.storage.createBucket('books', {
        public: false, // Private bucket for security
        allowedMimeTypes: ['application/pdf'],
        fileSizeLimit: 50 * 1024 * 1024 // 50MB limit
      });

      if (error) {
        console.error('❌ Error creating bucket:', error.message);
        return false;
      }
      
      console.log('✅ Books bucket created successfully');
    }

    // Set up bucket policy for authenticated users
    const { error: policyError } = await supabase.rpc('create_bucket_policy', {
      bucket_name: 'books'
    });

    if (policyError) {
      console.log('⚠️  Policy setup skipped (may already exist):', policyError.message);
    } else {
      console.log('✅ Bucket policy configured');
    }

    return true;
  } catch (err) {
    console.error('❌ Setup error:', err.message);
    return false;
  }
}

setupStorageBucket().then(success => {
  if (success) {
    console.log('🎉 Storage bucket setup completed!');
  } else {
    console.log('❌ Storage bucket setup failed');
  }
}).catch(console.error);