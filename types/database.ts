// Database schema types for Supabase
export interface Book {
  id: string;
  title: string;
  description: string;
  author: string;
  category: string;
  pages: number;
  language: string;
  created_at?: string;
  updated_at?: string;
}

// Supabase database types
export interface Database {
  public: {
    Tables: {
      books: {
        Row: Book;
        Insert: Omit<Book, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Book, 'id' | 'created_at'>>;
      };
    };
  };
}

// Error types
export interface ApiError {
  error: string;
  details?: string;
  code?: string;
}