"use client";

import { Book, Users, Globe, Heart, Lightbulb, HandHeart } from "lucide-react";
import { useEffect, useState } from "react";

// Animation styles now handled with CSS classes

const services = [
  {
    icon: Book,
    title: "Christian Literature",
    description: "Our collection of 8 inspiring books provides biblical wisdom, spiritual guidance, and practical teachings for believers at every stage of their faith journey.",
    features: ["Biblical Teaching Materials", "Spiritual Growth Resources", "Ministry Training Guides", "Devotional Content"]
  },
  {
    icon: Globe,
    title: "Mission Outreach",
    description: "We actively engage in mission work to reach unreached nations with the Gospel message, establishing sustainable Christian communities worldwide.",
    features: ["International Missions", "Community Evangelism", "Church Planting", "Cultural Bridge Building"]
  },
  {
    icon: Users,
    title: "Leadership Training",
    description: "Comprehensive training programs designed to equip local leaders with the skills and knowledge needed to lead effective ministries in their communities.",
    features: ["Pastor Training", "Ministry Leadership", "Discipleship Programs", "Mentorship Support"]
  },
  {
    icon: Heart,
    title: "Prayer Ministry",
    description: "Dedicated prayer support for individuals, communities, and nations. We believe in the power of prayer to transform lives and open doors for the Gospel.",
    features: ["Intercessory Prayer", "Prayer Requests", "Prayer Partnerships", "Spiritual Warfare"]
  },
  {
    icon: Lightbulb,
    title: "Educational Programs",
    description: "Bible-based educational initiatives that combine spiritual growth with practical skills development for sustainable community transformation.",
    features: ["Bible Study Courses", "Literacy Programs", "Vocational Training", "Youth Development"]
  },
  {
    icon: HandHeart,
    title: "Humanitarian Aid",
    description: "Compassionate assistance to communities in need, demonstrating God's love through practical support and emergency relief efforts.",
    features: ["Emergency Relief", "Community Development", "Healthcare Support", "Food Security Programs"]
  }
];

export default function Services() {
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
                Our 
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                Services
              </span>
            </h1>
          </div>
          
          <p
            className={`text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${1 * 100}ms` }}
          >
            Discover how Gospel For Unreached Nation Ministry serves communities worldwide through literature, missions, training, and compassionate outreach programs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`text-center mb-16 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${2 * 100}ms` }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach to ministry combines spiritual growth, practical training, and compassionate outreach to create lasting impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-700 ease-out hover:-translate-y-2 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${(3 + index) * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 text-sm mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`text-center mb-16 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${9 * 100}ms` }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Through God's grace and the dedication of our partners, we've been able to make a meaningful difference in communities around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Nations Reached" },
              { number: "10,000+", label: "Books Distributed" },
              { number: "500+", label: "Leaders Trained" },
              { number: "25+", label: "Churches Planted" }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center bg-white p-8 rounded-2xl shadow-lg border border-blue-100 transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(10 + index) * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${14 * 100}ms` }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Join Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Whether you're looking to grow in your faith, support our mission work, or partner with us in reaching unreached nations, we invite you to be part of what God is doing through GFUNM.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-100 border border-blue-200">
                <Globe className="h-5 w-5 text-blue-600" />
                <span className="text-blue-700 font-medium">
                  Global Ministry Impact
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-100 border border-blue-200">
                <Heart className="h-5 w-5 text-blue-600" />
                <span className="text-blue-700 font-medium">
                  Transforming Lives Daily
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}