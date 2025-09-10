"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Star, User } from "lucide-react";
import { InteractiveTiltCard } from "@/components/tilt-card";

// Book data - this should match the data in the main books page
const books = [
  {
    id: 1,
    title: "ባለ ራእይነት ክፍል 1", // Walking in Faith in Amharic
    description: "A comprehensive guide to strengthening your relationship with God through daily experiences and biblical wisdom.",
    fullDescription: "This book provides a detailed explanation of the faith journey, teaching how to serve God in daily life and strengthen our relationship with Him. The book is filled with practical advice, biblical studies, and personal reflection questions.",

    image: "/book1.jpg",
    category: "Spiritual Growth",
    author: "Tsega-Ab Bekele",
    pages: 240,
    language: "Amharic"
  },
  {
    id: 2,
    title: "ባለ ራእይነት ክፍል 2", // Prayers for the Nations in Amharic
    description: "Powerful prayers and intercession strategies to reach unreached people groups around the world.",
    fullDescription: "This book teaches prayer strategies for nations and unreached peoples. It contains prayer guides that help reach different cultures and peoples around the world.",

    image: "/book2.jpg",
    category: "Prayer and Intercession",
    author: "Tsega-Ab Bekele",
    pages: 180,
    language: "Amharic"
  },
  {
    id: 3,
    title: "ቤተ ክርስቲያን ከፓለቲካ ውጭ ናትን?", // Leadership in the Church in Amharic
    description: "Biblical principles for church leadership and building strong Christian communities.",
    fullDescription: "This book teaches biblical principles of church leadership. It explains how to build strong Christian communities and what characteristics leaders should have.",

    image: "/book3.jpg",
    category: "Leadership",
    author: "Tsega-Ab Bekele",
    pages: 260,
    language: "Amharic"
  },
  {
    id: 4,
    title: "የኢትዮጵያ ቤተ ክርስቲያን ተሀድሶ - ቅፅ 1", // Ministry in Action in Amharic
    description: "Practical guide for effective ministry work from local service to global missions.",
    fullDescription: "This book teaches how ministry work is carried out in practice. It covers various ministry fields from local community service to international missions.",
    price: 349,
    image: "/book4.jpg",
    category: "Ministry and Mission",
    author: "Tsega-Ab Bekele",
    pages: 280,
    language: "Amharic"
  },
  {
    id: 5,
    title: "የኢትዮጵያ ቤተ ክርስቲያን ተሀድሶ - ቅፅ 2", // Hope for the Hopeless in Amharic
    description: "Inspiring transformation stories and testimonies from unreached nations coming to Christ.",
    fullDescription: "This book contains true stories showing how people in hopeless situations found hope through God's grace. These stories provide hope and encouragement to all readers.",
    price: 279,
    image: "/book5.jpg",
    category: "Testimonies",
    author: "Tsega-Ab Bekele",
    pages: 220,
    language: "Amharic"
  },
  {
    id: 6,
    title: "ሪቫይቫል", // Gospel Foundations in Amharic
    description: "Essential biblical truths every believer should know, presented in an accessible and engaging format.",
    fullDescription: "The Gospel Foundations book teaches the fundamental truths of Christianity in a clear and simple way. It is very valuable for new believers and those who want to strengthen their faith.",
    price: 199,
    image: "/book6.jpg",
    category: "Biblical Teaching",
    author: "Tsega-Ab Bekele",
    pages: 200,
    language: "Amharic"
  },
  {
    id: 7,
    title: "የኢትዮጵያ አብያተ - ክርስቲያናት የህብረትና አለምን በወንጌል የመድረስ ጥሪ", // Discipleship Journey in Amharic
    description: "Step-by-step guide to growing as a disciple of Christ and making disciples of others.",
    fullDescription: "The Discipleship Journey book teaches how to live as a true follower of Christ and how to grow others as well. It contains a step-by-step development program.",
    price: 259,
    image: "/book7.jpg",
    category: "Discipleship",
    author: "Tsega-Ab Bekele",
    pages: 190,
    language: "Amharic"
  },
  {
    id: 8,
    title: "ወንጌል እና ባህል", // God's Love Revealed in Amharic
    description: "Exploring the depth and breadth of God's unlimited love through Scripture and personal meditation.",
    fullDescription: "This book explains in detail the depth and breadth of God's love. It teaches how to understand God's unlimited love for humanity through biblical study and personal meditation.",

    image: "/book8.JPG",
    category: "Spiritual Reading",
    author: "Tsega-Ab Bekele",
    pages: 170,
    language: "Amharic"
  }
];

// Sample reviews data
const reviews = [
  {
    id: 1,
    name: "አበበ ተስፋዬ",
    rating: 5,
    comment: "በጣም ጠቃሚ መጽሐፍ ነው። የእምነት ጉዞዬን በእጅጉ ረድቶኛል።",
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "ሳራ መኮንን",
    rating: 5,
    comment: "ይህ መጽሐፍ ህይወቴን ለውጦታል። ለሁሉም እመክራለሁ።",
    date: "2024-01-10"
  },
  {
    id: 3,
    name: "ዳዊት አለሙ",
    rating: 4,
    comment: "በጣም ጥሩ ትምህርቶች አሉበት። ለመንፈሳዊ እድገት ጠቃሚ ነው።",
    date: "2024-01-05"
  }
];

export default function BookDetail() {
  const params = useParams();
  const router = useRouter();
  const [book, setBook] = useState<typeof books[0] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const bookId = parseInt(params.bookId as string);
    const foundBook = books.find(b => b.id === bookId);
    setBook(foundBook || null);
    setIsLoading(false);
  }, [params.bookId]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Book Not Found</h1>
          <button
            onClick={() => {
              console.log('Going back to books');
              router.push('/books');
            }}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Books
          </button>
        </div>
      </div>
    );
  }



  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-white py-8">
        <div className="container mx-auto px-4">
          <button
            onClick={() => {
            console.log('Back button clicked');
            router.push('/books');
          }}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Books
          </button>
        </div>
      </div>

      {/* Book Details */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Book Image */}
          <div className="relative flex justify-center md:justify-start">
            <div className="aspect-[3/4] w-80 max-w-full">
              <InteractiveTiltCard
                image={{
                  src: book.image,
                  alt: book.title
                }}
                tiltFactor={20}
                perspective={1200}
                borderRadius={24}
                backgroundColor="#FFFFFF"
                shadowColor="rgba(59, 130, 246, 0.3)"
                shadowIntensity={0.6}
                transitionDuration={0.3}
                hoverScale={1.08}
                glareEffect={true}
                glareIntensity={0.4}
                glareSize={100}
              />
            </div>
          </div>

          {/* Book Information */}
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {book.category}
              </span>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{book.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{book.description}</p>
            </div>

            {/* Book Details */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-gray-200">
              <div>
                <span className="text-sm text-gray-500">Author</span>
                <p className="font-medium text-gray-800">{book.author}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Pages</span>
                <p className="font-medium text-gray-800">{book.pages}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Language</span>
                <p className="font-medium text-gray-800">{book.language}</p>
              </div>
            </div>

            {/* Reader Reviews Summary */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-2 text-lg font-semibold">4.7 out of 5</span>
                </div>
                <span className="text-gray-500">({reviews.length} reviews)</span>
              </div>
              <p className="text-center text-gray-600">Loved by readers for its spiritual insights and practical guidance</p>
            </div>
          </div>
        </div>

        {/* Full Description */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About the Book</h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              {book.fullDescription}
            </p>
          </div>
        </div>

        {/* Reader Reviews Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">What Readers Say</h2>
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-gray-800">{review.name}</h4>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Books Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Related Books</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {books
              .filter(b => b.id !== book.id && b.category === book.category)
              .slice(0, 3)
              .map((relatedBook) => (
                <div
                  key={relatedBook.id}
                  onClick={() => router.push(`/books/${relatedBook.id}`)}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105"
                >
                  <div className="p-4">
                    <Image
                      src={relatedBook.image}
                      alt={relatedBook.title}
                      width={200}
                      height={250}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-semibold text-gray-800 mb-2">{relatedBook.title}</h3>
                    <p className="text-gray-600">{relatedBook.category}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>


    </div>
  );
}