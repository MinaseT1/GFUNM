"use client";

import { Mail, Phone, MapPin, Globe, Heart } from "lucide-react";
import { useState, useEffect } from "react";

// Animation styles now handled with CSS classes

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "info@gfunm.org",
    description: "Send us your questions or prayer requests"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+251 916824930",
    description: "Available Monday to Friday, 9 AM - 6 PM"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Awassa, Southern Ethiopia",
    description: "Our ministry headquarters in the beautiful city of Awassa"
  }
];

export default function Contact() {
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
            className={`mb-6 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${0 * 100}ms` }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
                Contact 
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                Us
              </span>
            </h1>
          </div>
          
          <p
            className={`text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${1 * 100}ms` }}
          >
            We'd love to hear from you. Whether you have questions about our books, want to partner with our ministry, or need prayer, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.title}
                  className={`bg-white p-8 rounded-2xl shadow-lg border border-blue-100 text-center hover:shadow-xl transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${(2 + index) * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-lg font-medium text-blue-600 mb-2">
                    {info.details}
                  </p>
                  <p className="text-gray-600">
                    {info.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* Ministry Partnership */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${5 * 100}ms` }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Partner With Our Ministry
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Join us in spreading the Gospel to unreached nations. Whether through prayer, financial support, or volunteer work, your partnership makes a difference in bringing hope to communities around the world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-100 border border-blue-200">
                <Heart className="h-5 w-5 text-blue-600" />
                <span className="text-blue-700 font-medium">
                  Prayer Partners Welcome
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-100 border border-blue-200">
                <Globe className="h-5 w-5 text-blue-600" />
                <span className="text-blue-700 font-medium">
                  Global Mission Impact
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}