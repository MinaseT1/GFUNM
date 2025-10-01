"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, User } from "lucide-react";
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
    pages: 296,
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
    pages: 517,
    language: "Amharic"
  },
  {
    id: 6,
    title: "ሪቫይቫል", // Gospel Foundations in Amharic
    description: "Essential biblical truths every believer should know, presented in an accessible and engaging format.",
    fullDescription: "The Gospel Foundations book teaches the fundamental truths of Christianity in a clear and simple way. It is very valuable for new believers and those who want to strengthen their faith.",
    price: 199,
    image: "/books/book6.jpg",
    category: "Biblical Teaching",
    author: "Tsega-Ab Bekele",
    pages: 387,
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
    pages: 283,
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
    pages: 422,
    language: "Amharic"
  }
];

// Book-specific reviews data
const reviewsByBook: { [key: number]: Array<{id: number, name: string, rating: number, comment: string, date: string}> } = {
  1: [ // ባለ ራእይነት ክፍል 1
    {
      id: 1,
      name: "ዶ/ር አበበ ተስፋዬ - አዲስ አበባ ዩኒቨርሲቲ ፕሮፌሰር",
      rating: 5,
      comment: "ይህ መጽሐፍ የእምነት ጉዞን በተግባራዊ መንገድ የሚያስተምር ጠቃሚ መመሪያ ነው። ለእያንዳንዱ አማኝ የግድ የሚያስፈልግ መጽሐፍ ነው።",
      date: "2024-02-10"
    },
    {
      id: 2,
      name: "ወንድም ዳንኤል መንግስቱ - የአዲስ ሕይወት ቤተክርስቲያን አገልጋይ",
      rating: 5,
      comment: "በዕለት ተዕለት ሕይወት ውስጥ እምነትን እንዴት እንደምንኖር የሚያስተምር ድንቅ መጽሐፍ። በጣም ተጠቃሚ ሆኛል።",
      date: "2024-02-05"
    },
    {
      id: 3,
      name: "እህት ሳራ ወልደማርያም - የመንፈሳዊ እድገት አስተማሪ",
      rating: 4,
      comment: "ለመንፈሳዊ እድገት የሚያስፈልጉ መሰረታዊ እውነቶችን በግልጽ የሚያስረዳ መጽሐፍ። ለአዲስ አማኞች በተለይ ጠቃሚ ነው።",
      date: "2024-01-28"
    }
  ],
  2: [ // ባለ ራእይነት ክፍል 2
    {
      id: 1,
      name: "ወንድም ሙሉጌታ አሸናፊ - የጸሎት አገልግሎት መሪ",
      rating: 5,
      comment: "የአህዛብ ሕዝቦች ለወንጌል እንዲደርሱ የሚደረግ ጸሎት ስልት በጣም ጠቃሚ ነው። ይህ መጽሐፍ የጸሎት ሕይወቴን ለውጦታል።",
      date: "2024-02-15"
    },
    {
      id: 2,
      name: "እህት ሩት ታደሰ - ዓለም አቀፍ ተልእኮ አገልጋይ",
      rating: 5,
      comment: "የተለያዩ ባህሎችና ሕዝቦችን ለመድረስ የሚያስፈልጉ ጸሎት መመሪያዎች በጣም ተግባራዊ ናቸው።",
      date: "2024-02-08"
    },
    {
      id: 3,
      name: "ወንድም ተስፋዬ ገብረመድህን - የአህዛብ ተልእኮ አስተባባሪ",
      rating: 4,
      comment: "ለአህዛብ ሕዝቦች ጸሎት ማድረግ ስለሚያስፈልግ በዝርዝር የሚያስተምር መጽሐፍ። በጣም ተመክሮአል።",
      date: "2024-01-30"
    }
  ],
  3: [ // ቤተ ክርስቲያን ከፓለቲካ ውጭ ናትን?
    {
      id: 1,
      name: "ዶ/ር ሰሎሞን ታደሰ - የቤተክርስቲያን ታሪክ ምሁር",
      rating: 5,
      comment: "ቤተክርስቲያንና ፖለቲካ መካከል ያለውን ግንኙነት በመጽሐፍ ቅዱሳዊ መሰረት የሚያስረዳ ጠቃሚ መጽሐፍ።",
      date: "2024-02-12"
    },
    {
      id: 2,
      name: "ወንድም ዮሴፍ ወልደጊዮርጊስ - የቤተክርስቲያን መሪ",
      rating: 5,
      comment: "የቤተክርስቲያን መሪዎች ሊያነቡት የሚገባ መጽሐፍ። የመሪነት መርሆዎችን በግልጽ ያስረዳል።",
      date: "2024-02-03"
    },
    {
      id: 3,
      name: "እህት ሄለን ዮሐንስ - የማህበረሰብ አገልግሎት አስተባባሪ",
      rating: 4,
      comment: "ቤተክርስቲያን በማህበረሰብ ውስጥ ያላትን ሚና በግልጽ የሚያስረዳ መጽሐፍ። በጣም ተጠቃሚ ሆኛል።",
      date: "2024-01-25"
    }
  ],
  4: [ // የኢትዮጵያ ቤተ ክርስቲያን ተሀድሶ - ቅፅ 1
    {
      id: 1,
      name: "ወንድም ገብረየሱስ ሃይሉ - የአገልግሎት ሚኒስትሪ መሪ",
      rating: 5,
      comment: "የአገልግሎት ሥራን በተግባር እንዴት እንደምንሠራ የሚያስተምር ድንቅ መጽሐፍ። ለአገልጋዮች በጣም ጠቃሚ ነው።",
      date: "2024-02-18"
    },
    {
      id: 2,
      name: "እህት ብርሃኔ ተክለ - ዓለም አቀፍ ተልእኮ አገልጋይ",
      rating: 5,
      comment: "ከአካባቢ አገልግሎት እስከ ዓለም አቀፍ ተልእኮ ድረስ ያለውን አገልግሎት በዝርዝር ያስረዳል።",
      date: "2024-02-11"
    },
    {
      id: 3,
      name: "ወንድም አብርሃም ወልደሚካኤል - የቤተክርስቲያን ተክላ አስተባባሪ",
      rating: 4,
      comment: "የተግባራዊ አገልግሎት መመሪያዎች በጣም ጠቃሚ ናቸው። ለአገልጋዮች ትልቅ እርዳታ ነው።",
      date: "2024-02-01"
    }
  ],
  5: [ // የኢትዮጵያ ቤተ ክርስቲያን ተሀድሶ - ቅፅ 2
    {
      id: 1,
      name: "እህት ማርታ ገብረሚካኤል - የመመስከር አገልግሎት መሪ",
      rating: 5,
      comment: "በተስፋ መቁረጥ ውስጥ ያሉ ሰዎች እንዴት ተስፋ እንደሚያገኙ የሚያሳዩ እውነተኛ ታሪኮች። በጣም አበረታች ነው።",
      date: "2024-02-14"
    },
    {
      id: 2,
      name: "ወንድም ዳዊት ሃይሌ - የመንፈሳዊ ማገገሚያ አገልግሎት አስተባባሪ",
      rating: 5,
      comment: "የእግዚአብሔር ጸጋ በሰዎች ሕይወት ውስጥ እንዴት እንደሚሠራ የሚያሳዩ ድንቅ ታሪኮች።",
      date: "2024-02-07"
    },
    {
      id: 3,
      name: "እህት ሳባ ወልደሰንበት - የማህበረሰብ ማገገሚያ አገልጋይ",
      rating: 4,
      comment: "ተስፋ የሌላቸው ሰዎች ተስፋ እንዴት እንደሚያገኙ የሚያሳዩ አበረታች ታሪኮች። ለሁሉም ተስፋ ይሰጣል።",
      date: "2024-01-29"
    }
  ],
  6: [ // ሪቫይቫል
    {
      id: 1,
      name: "ተክለአብ ሽብሩ (ፒ.ኤ.ች.ዲ) አሜሪካ ተኔስኢ ስቴት ዩኒቨርሲት - ረ/ፕሮፌሰር",
      rating: 5,
      comment: "የኢትዮዽያ ቤተ-ክርስቲያን ከከበባት መንፈሳዊ እርጅናና ሞት የመውጫው መንገድ መጽሐፍ ቅዱሳዊ ተሐድሶ ብቻ እንደሆነ አበክሮ ያስረዳል።",
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "ወንድም መኮንን ደጉ በላይ ሻሸመኔ ሙሉ ወንጌል አማኞች ቤ/ክ አገልጋይ",
      rating: 5,
      comment: "የአገሬ ሕዝብ ጽድቅ እንደራበው ዘመኑን እንዳይጨርስ ይህ መጸሐፍ ተጽፏል። …",
      date: "2024-01-10"
    },
    {
      id: 3,
      name: "ጎሳ እሼቱመ - በኢትዮዽያ ወንጌላውያን ተማሪዋችና ማህበር (ኢቫሱ) የደቡብ ቢሮ አስተባባሪ",
      rating: 4,
      comment: "የተሐድሶ ያለህ! ብሎ ለሚጮህ ትውልድ በጊዜው የተወለደ ወቅታዊ መጽሐፍ ነው፧ … የምድራችንን ሁለንተናዊ ተሐድሶ ከልብ የሚናፍቅ ትውልድ ሊያነበው የተገባው መጽሐፍ፣ ሆኖ አግኝቻዋለሁ",
      date: "2024-01-05"
    }
  ],
  7: [ // የኢትዮጵያ አብያተ ክርስቲያናት የህብረትና አለምን በወንጌል የመድረስ ጥሪ
    {
      id: 1,
      name: "ተሾመ አመኑ (ቄስ ፒ.ኤ.ች.ዲ) - የኢትዮዽያ ወንጌላዊነት ቤተ-ክርስቲያን መካነ ኢየሱስ ተባባሪ ጠቅላይ ፀሐፊ",
      rating: 5,
      comment: "“የኢትዮጵያ ቤተ-ክርስቲያን ኅብረትና በወንጌል ዓለምን የመድረስ ጥሪ” በሚል ርዕስ የተፃፈው ይህ መጽሐፍ በዘመናችን የእግዚአብሔርን ፈቃድና ሰዎችን አገልግለን ለማለፍ ዓለም አቀፋዊ ራእይ ይዘን ተያይዘን እንድንነሣ ወቅታዊና ሰማያዊ ጥሪ ያስተጋባል። በተጨማሪም በዚህ አቅጣጫ ጥናት ለሚያደርጉ ምሁራን ለዋቢ መጽሐፍትነት እጅግ አጋዥና በብዙ የተዋጣለት ድንቅ መጽሐፍ ነው።",
      date: "2024-02-16"
    },
    {
      id: 2,
      name: "ጋሻሁን ነሞምሳ(ቄስ) - የኢ/ወ/ቤ/ክ መካነ ኢየሱስ ዓለም ዓቀፍ ሚስዮናዊ ከምዕራብ አፍሪካ ማሊ-ባማኮ",
      rating: 5,
      comment: "… ለኢትዮዽያ ቤተ-ክርስቲያን የጊዜዉን መልእክት የያዘ መፅሐፍ። ",
      date: "2024-02-09"
    },
    {
      id: 3,
      name: "ወንድም ሳሙኤል ገብረመድህን - የቤተክርስቲያን ህብረት አስተባባሪ",
      rating: 4,
      comment: "… ይህን መጽሐፍ ሲያነቡ ፣ የወንጌል ስብከት ተልዕኮ አንገብግቢነት፣ የጊዜውን ወሳኝነት፣ ለሚሲዮን አገልግሎት የእያንዳንዱ ምዕመን ተሳትፎ አስፈላጊነት እና ሌሎችም ቁልፍ ሃሳቦች ይረዳሉ። መልካም ንባብ።",
      date: "2024-01-31"
    }
  ],
  8: [ // ወንጌል እና ባህል
    {
      id: 1,
      name: "ዶ/ር ሚካኤል ወልደሰንበት - የባህል ጥናት ምሁር",
      rating: 5,
      comment: "የእግዚአብሔርን ፍቅር ጥልቀትና ስፋት በመጽሐፍ ቅዱሳዊ ጥናትና በግል ማሰላሰል የሚያስረዳ ድንቅ መጽሐፍ።",
      date: "2024-02-13"
    },
    {
      id: 2,
      name: "እህት ሄሊና ታደሰ - የመንፈሳዊ ንባብ አስተማሪ",
      rating: 5,
      comment: "የእግዚአብሔርን ያልተወሰነ ፍቅር ለሰው ልጆች እንዴት እንደምንረዳ የሚያስተምር መጽሐፍ። በጣም ጥልቅ ነው።",
      date: "2024-02-06"
    },
    {
      id: 3,
      name: "ወንድም ዮሐንስ ሃይሉ - የመንፈሳዊ አባት",
      rating: 4,
      comment: "ወንጌልና ባህል መካከል ያለውን ግንኙነት በግልጽ የሚያስረዳ መጽሐፍ። ለመንፈሳዊ እድገት በጣም ጠቃሚ ነው።",
      date: "2024-01-27"
    }
  ]
};

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
                  alt: book.title,
                  priority: true
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
            {(reviewsByBook[book.id] || []).map((review) => (
              <div key={review.id} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-2">
                      <h4 className="font-semibold text-gray-800">{review.name}</h4>
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