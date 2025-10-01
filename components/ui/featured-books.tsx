"use client";

import { InteractiveTiltCard } from "@/components/tilt-card";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { memo, useMemo } from "react";

// Book data - first 4 books for featured section
const featuredBooks = [
  { id: 1, name: "ባለ ራእይነት ክፍል 1", image: { src: "/books/book1.jpg", alt: "Book 1" } },
    { id: 6, name: "ሪቫይቫል", image: { src: "/books/book6.jpg", alt: "Book 6" } },
  { id: 5, name: "የኢትዮጵያ ቤተ ክርስቲያን ተሀድሶ - ቅፅ 2", image: { src: "/books/book5.jpg", alt: "Book 5" } },
  { id: 8, name: "ወንጌል እና ባህል", image: { src: "/books/book8.JPG", alt: "Book 8" } }
];

const FeaturedBooks = memo(function FeaturedBooks() {
  const router = useRouter();

  const handleCardClick = (bookId: number) => {
    router.push(`/books/${bookId}`);
  };

  const handleMoreBooksClick = () => {
    router.push('/books');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Books</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our collection of inspiring spiritual books that will strengthen your faith and deepen your understanding.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredBooks.map((book, index) => (
            <div key={book.id} className="flex flex-col items-center group">
              <div 
                className="w-full aspect-[2/3] mb-4 cursor-pointer transform transition-transform duration-300 group-hover:scale-105" 
                onClick={() => handleCardClick(book.id)}
              >
                <InteractiveTiltCard
                  image={{
                    ...book.image,
                    priority: index < 2 // Prioritize first 2 images
                  }}
                  tiltFactor={15}
                  perspective={1000}
                  borderRadius={12}
                  backgroundColor="#FFFFFF"
                  shadowColor="rgba(59, 130, 246, 0.3)"
                  shadowIntensity={0.6}
                  transitionDuration={0.3}
                  hoverScale={1.05}
                  glareEffect={true}
                  glareIntensity={0.4}
                  glareSize={80}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-center line-clamp-2">
                {book.name}
              </h3>
            </div>
          ))}
        </div>

        {/* More Books Button */}
        <div className="text-center">
          <button 
            onClick={handleMoreBooksClick}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            More Books
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
});

export default FeaturedBooks;