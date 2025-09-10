import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Create Supabase client for database operations
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Define Prisma-like types
export interface Book {
  id: string;
  title: string;
  author: string;
  description?: string | null;
  image_url?: string | null;
  category: string;
  pages: number;
  language: string;
  created_at: Date;
  updated_at: Date;
}

// Prisma-like client interface using Supabase
export const prisma = {
  book: {
    findMany: async (options?: { where?: any; include?: any }) => {
      const { data, error } = await supabase
        .from('books')
        .select('*');
      
      if (error) throw error;
      return data as Book[];
    },
    
    findUnique: async (options: { where: { id: string } }) => {
      const { data, error } = await supabase
        .from('books')
        .select('*')
        .eq('id', options.where.id)
        .single();
      
      if (error) throw error;
      return data as Book;
    },
    
    create: async (options: { data: Omit<Book, 'id' | 'created_at' | 'updated_at'> }) => {
      const { data, error } = await supabase
        .from('books')
        .insert({
          ...options.data,
          id: `book_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .select()
        .single();
      
      if (error) throw error;
      return data as Book;
    }
  }
};

export default prisma;