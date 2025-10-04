"use client";

import { Book, Users, Globe, Heart, Lightbulb, HandHeart, Camera, Target, MapPin, GraduationCap } from "lucide-react";
import { useEffect, useState } from "react";
import HorizontalGallery from "@/components/ui/horizontal-gallery";

// Animation styles now handled with CSS classes

// Gallery data for different ministry activities
const galleryData = {
  collage: {
    title: "Army Bible Collage",
    description: "Our community collage showcases the beautiful diversity and unity of believers across the Horn of Africa. These images capture moments of fellowship, worship, and community life that demonstrate how the Gospel brings people together across cultural and ethnic boundaries. Each photograph tells a story of transformation, hope, and the power of Christ to unite hearts in love and purpose.",
    images: [
      "/armybible collage.png",
      "/collage/photo_2025-10-02_10-40-05.jpg",
      "/collage/photo_2025-10-02_10-40-12.jpg",
      "/collage/photo_2025-10-02_10-40-25.jpg",
      "/collage/photo_2025-10-02_10-40-26.jpg",
      "/collage/photo_2025-10-02_13-56-56.jpg",
      "/collage/photo_2025-10-02_13-56-57.jpg"
    ],
    icon: Camera
  },
  crusade: {
    title: "Gospel Crusades",
    description: "Our gospel crusades represent powerful moments of evangelistic outreach where the Good News is proclaimed with boldness and clarity. These gatherings bring together believers and seekers alike, creating opportunities for salvation, healing, and spiritual breakthrough. Through these crusades, we witness God's miraculous power at work, transforming lives and establishing His kingdom in communities throughout the Horn of Africa.",
    images: [
      "/crusade/photo_2025-10-04_08-53-23.jpg",
      "/crusade/photo_2025-10-04_08-53-22.jpg",
      "/crusade/photo_2025-10-04_08-53-22 (2).jpg",
      "/crusade/photo_2025-10-04_08-53-17.jpg",
      "/crusade/photo_2025-10-03_20-29-31.jpg",
      "/crusade/photo_2025-10-03_20-29-29.jpg",
      "/crusade/photo_2025-10-03_20-29-24.jpg",
      "/crusade/photo_2025-10-03_20-29-15.jpg",
      "/crusade/photo_2025-10-03_20-29-10.jpg",
      "/crusade/photo_2025-10-03_20-29-09.jpg",
      "/crusade/photo_2025-10-02_13-57-11.jpg",
      "/crusade/photo_2025-10-02_10-40-38.jpg",
      "/crusade/photo_2025-10-02_10-40-35.jpg",
      "/crusade/photo_2025-10-02_10-40-32.jpg",
      "/crusade/photo_2025-10-02_10-40-27.jpg",
      "/crusade/photo_2025-10-02_10-40-17.jpg",
      "/crusade/photo_2025-10-02_10-40-16.jpg",
      "/crusade/photo_2025-10-02_10-40-15.jpg",
      "/crusade/photo_2025-10-02_10-40-11.jpg",
      "/crusade/photo_2025-10-02_10-40-10.jpg",
      "/crusade/photo_2025-10-02_10-40-06.jpg",
      "/crusade/photo_2025-10-02_10-40-04.jpg"
    ],
    icon: Target
  },
  mission: {
    title: "Mission Activities",
    description: "Our mission activities encompass the heart of our calling to reach unreached nations with the Gospel. These images document our strategic mission work across Ethiopia, Somalia, Djibouti, and Eritrea, showing how we engage with local communities, establish relationships, and plant seeds of faith. Each mission activity is carefully planned to address both spiritual and practical needs, demonstrating Christ's love through word and deed.",
    images: [
      "/mission/photo_2025-10-02_13-56-59.jpg",
      "/mission/photo_2025-10-02_13-56-58.jpg",
      "/mission/photo_2025-10-02_10-40-14.jpg",
      "/mission/photo_2025-10-02_10-40-21.jpg",
      "/mission/photo_2025-10-02_10-40-39.jpg",
      
      "/mission/photo_2025-10-02_10-40-45.jpg",
      
      
      "/mission/photo_2025-10-02_13-57-14.jpg",
      "/mission/photo_2025-10-03_20-29-08.jpg"
    ],
    icon: MapPin
  },
  training: {
    title: "Leadership Training",
    description: "Our leadership training programs are designed to equip saints for effective ministry and sustainable church growth. These intensive training sessions focus on biblical foundations, practical ministry skills, and leadership development. We believe in raising up local leaders who can continue the work of the Gospel long after our initial outreach, ensuring that churches planted are well-equipped to thrive and multiply in their communities.",
    images: [
      "/training/photo_2025-10-04_08-53-29.jpg",
      "/training/photo_2025-10-04_08-53-28.jpg",
      "/training/photo_2025-10-04_08-53-27.jpg",
      "/training/photo_2025-10-04_08-53-26.jpg",
      "/training/photo_2025-10-04_08-53-25 (2).jpg",
      "/training/photo_2025-10-04_08-53-24.jpg",
      "/training/photo_2025-10-03_20-29-25.jpg",
      "/training/photo_2025-10-03_20-29-16.jpg",
      "/training/photo_2025-10-03_20-29-13.jpg",
      "/training/photo_2025-10-03_20-29-03.jpg",
      "/mission/photo_2025-10-02_10-40-40.jpg",
      "/training/photo_2025-10-02_10-40-42.jpg",
      "/training/photo_2025-10-02_10-40-41.jpg",
      "/training/photo_2025-10-02_10-40-37.jpg",
      "/training/photo_2025-10-02_10-40-30.jpg",
      "/training/photo_2025-10-02_10-40-24.jpg",
      "/training/photo_2025-10-02_10-40-22.jpg",
      "/training/photo_2025-10-02_10-40-13.jpg",
      "/training/photo_2025-10-02_10-40-09.jpg",
      "/training/photo_2025-10-02_10-40-08.jpg"
    ],
    icon: GraduationCap
  }
};

const services = [
  {
    icon: Book,
    title: "Literature Ministry",
    description: "Spreading the Kingdom Gospel through carefully crafted books and educational materials that provide spiritual guidance and biblical wisdom for believers in the Horn of Africa.",
    features: ["Inspirational Books", "Bible Study Materials", "Gospel Literature", "Local Language Publications"]
  },
  {
    icon: Globe,
    title: "Church Planting",
    description: "Establishing missional, Christ-centered churches throughout the Horn of Africa, focusing on sustainable local leadership and community transformation.",
    features: ["New Church Establishment", "Local Leadership Training", "Community Engagement", "Sustainable Growth"]
  },
  {
    icon: Users,
    title: "Discipleship & Training",
    description: "Equipping saints for practical ministry through comprehensive discipleship programs, leadership development, and ministry skills training.",
    features: ["Leadership Development", "Ministry Training", "Discipleship Programs", "Practical Ministry Skills"]
  },
  {
    icon: Heart,
    title: "Prayer & Intercession",
    description: "Building a strong foundation of prayer support for ministry activities throughout the Horn of Africa, seeking committed faith partners for intercession.",
    features: ["Intercessory Prayer", "Prayer Partnerships", "Spiritual Warfare", "Regional Prayer Networks"]
  },
  {
    icon: Lightbulb,
    title: "Mission Strategy",
    description: "Strategic mission work focused on the Horn of Africa region, addressing unique challenges of civil war, drought, and religious tension with the hope of Christ.",
    features: ["Regional Focus", "Cultural Sensitivity", "Strategic Planning", "Local Partnerships"]
  },
  {
    icon: HandHeart,
    title: "Community Outreach",
    description: "Practical ministry that demonstrates God's love through community service, addressing the needs of regions marked by natural disasters and conflict.",
    features: ["Community Service", "Disaster Relief", "Social Support", "Holistic Ministry"]
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
            Discover how Gospel For Unreached Nation Ministry serves the Horn of Africa through practical ministry, church planting, discipleship, and equipping saints for global missions in Ethiopia, Somalia, Djibouti, and Eritrea.
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

      {/* Ministry Activities Gallery Sections */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`text-center mb-16 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${15 * 100}ms` }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Ministry in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Witness the transformative power of the Gospel through our various ministry activities across the Horn of Africa. Each image tells a story of hope, faith, and God's love in action.
            </p>
          </div>

          {/* Community Collage Section */}
          <div className="mb-20">
            <div
              className={`flex items-center gap-4 mb-8 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${16 * 100}ms` }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Camera className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {galleryData.collage.title}
                </h3>
              </div>
            </div>
            <div
              className={`mb-8 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${17 * 100}ms` }}
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                {galleryData.collage.description}
              </p>
            </div>
            <div
              className={`transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${18 * 100}ms` }}
            >
              <HorizontalGallery
                images={galleryData.collage.images}
                title={galleryData.collage.title}
              />
            </div>
          </div>

          {/* Gospel Crusades Section */}
          <div className="mb-20">
            <div
              className={`flex items-center gap-4 mb-8 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${19 * 100}ms` }}
            >
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {galleryData.crusade.title}
                </h3>
              </div>
            </div>
            <div
              className={`mb-8 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${20 * 100}ms` }}
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                {galleryData.crusade.description}
              </p>
            </div>
            <div
              className={`transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${21 * 100}ms` }}
            >
              <HorizontalGallery
                images={galleryData.crusade.images}
                title={galleryData.crusade.title}
              />
            </div>
          </div>

          {/* Mission Activities Section */}
          <div className="mb-20">
            <div
              className={`flex items-center gap-4 mb-8 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${22 * 100}ms` }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {galleryData.mission.title}
                </h3>
              </div>
            </div>
            <div
              className={`mb-8 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${23 * 100}ms` }}
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                {galleryData.mission.description}
              </p>
            </div>
            <div
              className={`transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${24 * 100}ms` }}
            >
              <HorizontalGallery
                images={galleryData.mission.images}
                title={galleryData.mission.title}
              />
            </div>
          </div>

          {/* Leadership Training Section */}
          <div className="mb-20">
            <div
              className={`flex items-center gap-4 mb-8 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${25 * 100}ms` }}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {galleryData.training.title}
                </h3>
              </div>
            </div>
            <div
              className={`mb-8 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${26 * 100}ms` }}
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                {galleryData.training.description}
              </p>
            </div>
            <div
              className={`transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${27 * 100}ms` }}
            >
              <HorizontalGallery
                images={galleryData.training.images}
                title={galleryData.training.title}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}