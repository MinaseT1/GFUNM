"use client";

import { InteractiveTiltCard } from "@/components/tilt-card";
import { useRouter } from "next/navigation";
import { memo, useMemo } from "react";

// Book data with images from public folder
const books = [
  { id: 1, name: "ባለ ራእይነት ክፍል 1", image: { src: "/books/book1.jpg", alt: "Book 1" } },
  { id: 2, name: "ባለ ራእይነት ክፍል 2", image: { src: "/books/book2.jpg", alt: "Book 2" } },
  { id: 3, name: "ቤተ ክርስቲያን ከፓለቲካ ውጭ ናትን?", image: { src: "/books/book3.jpg", alt: "Book 3" } },
  { id: 4, name: "የኢትዮጵያ ቤተ ክርስቲያን ተሀድሶ - ቅፅ 1", image: { src: "/books/book4.jpg", alt: "Book 4" } },
  { id: 5, name: "የኢትዮጵያ ቤተ ክርስቲያን ተሀድሶ - ቅፅ 2", image: { src: "/books/book5.jpg", alt: "Book 5" } },
  { id: 6, name: "ሪቫይቫል", image: { src: "/books/book6.jpg", alt: "Book 6" } },
  { id: 7, name: "የኢትዮጵያ አብያተ ክርስቲያናት የህብረትና አለምን በወንጌል የመድረስ ጥሪ", image: { src: "/books/book7.jpg", alt: "Book 7" } },
  { id: 8, name: "ወንጌል እና ባህል", image: { src: "/books/book8.JPG", alt: "Book 8" } }
];

const Books = memo(function Books() {
  const router = useRouter();

  const handleCardClick = useMemo(
    () => (bookId: number) => {
      router.push(`/books/${bookId}`);
    },
    [router]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-gray-50 p-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book, index) => (
             <div key={book.id} className="flex flex-col items-center">
               <div className="w-full aspect-[3/4] mb-3 cursor-pointer" onClick={() => handleCardClick(book.id)}>
                 <InteractiveTiltCard
                  image={{
                    ...book.image,
                    priority: index < 4 // Prioritize first 4 images
                  }}
                  tiltFactor={15}
                  perspective={1000}
                  borderRadius={12}
                  backgroundColor="#FFFFFF"
                  shadowColor="rgba(0, 0, 0, 0.2)"
                  shadowIntensity={0.5}
                  transitionDuration={0.2}
                  hoverScale={1.05}
                  glareEffect={true}
                  glareIntensity={0.5}
                  glareSize={80}
                />
               </div>
               <h3 className="text-lg font-semibold text-gray-800 text-center mb-3">{book.name}</h3>
               <button 
                 onClick={() => handleCardClick(book.id)}
                 className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg"
               >
                 View Details
               </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Books;