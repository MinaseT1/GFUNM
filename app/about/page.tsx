"use client";

import { Heart, Globe, Book, Users } from "lucide-react";
import { useEffect, useState } from "react";

// Animation styles will be handled with CSS classes

const features = [
  {
    icon: Heart,
    title: "Our Mission",
    description: "To spread the Gospel of Jesus Christ to unreached nations through inspiring literature and transformative ministry work."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connecting with communities worldwide, bringing hope and salvation to those who have never heard the Gospel message."
  },
  {
    icon: Book,
    title: "Inspiring Literature",
    description: "Our collection of 8 carefully crafted books provides spiritual guidance, biblical wisdom, and encouragement for believers."
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Building strong Christian communities and empowering local leaders to continue the ministry in their regions."
  }
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div
            className={`mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
                About 
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                GFUNM
              </span>
            </h1>
          </div>
          
          <p
            className={`text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Gospel For Unreached Nation Ministry is dedicated to bringing the transformative message of Jesus Christ to communities around the world who have yet to experience His love and salvation.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`text-center mb-16 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Ministry Focus
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Through literature, outreach, and community building, we strive to make a lasting impact in unreached nations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${600 + index * 200}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div
            className={`transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Our Vision
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We envision a world where every nation has access to the Gospel message, where communities are transformed by God's love, and where local leaders are equipped to continue the ministry work in their regions. Through our books and outreach programs, we aim to plant seeds of faith that will grow into thriving Christian communities.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-100 border border-blue-200">
              <Globe className="h-5 w-5 text-blue-600" />
              <span className="text-blue-700 font-medium">
                Reaching Every Nation with God's Love
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}