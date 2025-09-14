import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/database';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey || !supabaseServiceKey) {
  throw new Error('Missing required Supabase environment variables');
}

// Browser client (for client-side operations)
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// Admin client (for server-side operations)
export const supabaseAdmin = createClient<Database>(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

// Storage bucket names
export const STORAGE_BUCKETS = {
  BOOKS: 'books',
  PURCHASED: 'purchased'
} as const;

// Helper functions for storage operations
export const storageHelpers = {
  // Upload a file to the books bucket
  async uploadBookFile(file: File, fileName: string) {
    const { data, error } = await supabaseAdmin.storage
      .from(STORAGE_BUCKETS.BOOKS)
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      });
    
    if (error) throw error;
    return data;
  },

  // Get a signed URL for a book file
  async getBookFileUrl(filePath: string, expiresIn: number = 3600) {
    const { data, error } = await supabaseAdmin.storage
      .from(STORAGE_BUCKETS.BOOKS)
      .createSignedUrl(filePath, expiresIn);
    
    if (error) throw error;
    return data.signedUrl;
  },

  // Copy a book file to purchased bucket with user-specific naming
  async copyToPurchased(originalPath: string, userId: string, bookId: string) {
    const purchasedFileName = `${userId}/${bookId}_${Date.now()}.pdf`;
    
    // First, download the original file
    const { data: fileData, error: downloadError } = await supabaseAdmin.storage
      .from(STORAGE_BUCKETS.BOOKS)
      .download(originalPath);
    
    if (downloadError) throw downloadError;
    
    // Then upload to purchased bucket
    const { data, error } = await supabaseAdmin.storage
      .from(STORAGE_BUCKETS.PURCHASED)
      .upload(purchasedFileName, fileData, {
        cacheControl: '3600',
        upsert: false
      });
    
    if (error) throw error;
    return { ...data, fileName: purchasedFileName };
  },

  // Get a signed URL for a purchased file
  async getPurchasedFileUrl(filePath: string, expiresIn: number = 3600) {
    const { data, error } = await supabaseAdmin.storage
      .from(STORAGE_BUCKETS.PURCHASED)
      .createSignedUrl(filePath, expiresIn);
    
    if (error) throw error;
    return data.signedUrl;
  }
};

// Database helper functions
export const dbHelpers = {
  // Get books by IDs
  async getBooksByIds(bookIds: string[]) {
    const { data, error } = await supabaseAdmin
      .from('books')
      .select('*')
      .in('id', bookIds);
    
    if (error) throw error;
    return data;
  },

  // Additional helper functions can be added here as needed
};