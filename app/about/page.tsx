"use client";

import { Heart, Globe, Book, Users, BookOpen, Hand, Music, HandHeart, Lightbulb, Target, MapPin, Calendar, Cross, GraduationCap, Send, Users2, Megaphone, Radio, FileText, Church, Compass } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

// Ministry Focus Areas
const ministryFocus = [
  {
    icon: Cross,
    title: "Our Mission",
    description: "To see missional, Christ-centered churches flourishing in the Horn of Africa through practical ministry, discipleship, and church planting in Ethiopia, Somalia, Djibouti, and Eritrea."
  },
  {
    icon: MapPin,
    title: "Horn of Africa Focus",
    description: "Strategically positioned in Ethiopia, we serve the Horn of Africa region, addressing the unique challenges of civil war, drought, and religious tension with the hope of Christ."
  },
  {
    icon: Book,
    title: "Inspiring Literature",
    description: "Our collection of 8 carefully crafted books provides spiritual guidance, biblical wisdom, and encouragement for believers in both Amharic and other languages."
  },
  {
    icon: HandHeart,
    title: "Community Impact",
    description: "Building strong Christian communities and empowering local leaders to continue the ministry work in their regions through practical service and discipleship."
  }
];

// Six Key Ministry Areas
const ministryAreas = [
  {
    icon: GraduationCap,
    title: "Army Bible College",
    description: "ABC is for the gospel workers and native missionaries who have no chances to attend regular and traditional theological institutions but have special call, burden and dedications to serve the Lord"
  },
  {
    icon: Send,
    title: "Missions ",
    description: "GFUNM Sending the native missionaries department is about sending native missionaries that have divine calling, devoted themselves to preach the gospel in the remote villages and plant the missional churches of Jesus Christ.  "
  },
  {
    icon: Users2,
    title: "Key Church leaders - Seminar",
    description: "This department focused on upgrading and empowering church leaders through  regular seminars, training, and workshops to enhance their ministry skills and impact."
  },
  {
    icon: Megaphone,
    title: "Conferences and Crusades",
    description: "The objective of this department was to win souls for the kingdom of God and  stirring  the area-wide churches for gospel outreach. In the last 15 years we had conducted 25 Area- wide conferences and Crusades in the different parts of the country."
  },
  {
    icon: Radio,
    title: "Media",
    description: "We are in the world led by media. The main aim of GFUNM media section is  to spread the gospel in the parts of our world,  to edify the saints and mobilizing the body of Christ for mission."
  },
  {
    icon: FileText,
    title: "Printed Materials",
    description: "The printed materials department - is focused on spreading the good news through printed Materials, empowering and strengthening churches by producing and distributing printed spiritual materials such as pamphlets, magazines and books."
  }
];

// Services offered
const services = [
  {
    icon: Book,
    title: "Literature Ministry",
    description: "Publishing and distributing Christian literature in local languages to spread the Gospel message throughout the Horn of Africa.",
    features: ["8 Published Books", "Amharic Literature", "Biblical Teaching", "Spiritual Guidance"]
  },
  {
    icon: Church,
    title: "Church Planting",
    description: "Establishing new churches in unreached areas, focusing on indigenous leadership and sustainable growth in local communities.",
    features: ["Indigenous Leadership", "Local Partnerships", "Sustainable Growth", "Community Focus"]
  },
  {
    icon: Users,
    title: "Discipleship & Training",
    description: "Equipping believers with biblical knowledge and practical skills for ministry, leadership development, and spiritual growth.",
    features: ["Leadership Development", "Biblical Training", "Practical Skills", "Mentorship Programs"]
  },
  {
    icon: Heart,
    title: "Prayer & Intercession",
    description: "Mobilizing prayer networks across the region for spiritual breakthrough, revival, and transformation in unreached communities.",
    features: ["Intercessory Prayer", "Prayer Partnerships", "Spiritual Warfare", "Regional Prayer Networks"]
  },
  {
    icon: Compass,
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
            Gospel For Unreached Nation Ministry (GFUNM) is a Christ-centered indigenous ministry founded by Evangelist Tsegaab Bekele, based in the beautiful city of Awassa, Southern Ethiopia. Our mission is focused on spreading the Kingdom Gospel throughout the Horn of Africa.
          </p>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Founder Background
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              &quot;A cloud as small as a man&apos;s hand is rising... (1 Kings 18:44)&quot;
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
            {/* Founder's Image */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative">
                <div className="w-[500px] h-[600px] relative">
                  <Image
                    src="/babi.png"
                    alt="Evangelist Tsegaab Bekele - Founder of GFUNM"
                    fill
                    className="object-contain"
                    priority
                  />
                  {/* Blue glowing effect at bottom */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-2">
                    {/* Main glowing line */}
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full shadow-lg shadow-blue-500/50"></div>
                    {/* Additional glow layers for enhanced effect */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full blur-sm opacity-75"></div>
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-blue-300 to-transparent rounded-full blur-md opacity-50"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder's Story */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Evangelist Tsegaab Bekele
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Born and raised in the Church, Evangelist Tsegaab Bekele&apos;s life was transformed by the power of the Holy Spirit revival at Yabello Mekane Yesus Church in 1992 while he was a high school student. During this powerful revival that God touched his heart and revealed the divine calling upon his life to preach the Gospel.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  After receiving basic biblical education at various levels in the local church, he began serving as a youth leader and gospel preacher. By God&apos;s grace, he was enabled to preach the good news in towns and rural villages even while still in high school.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Following his high school graduation, he attended teachers training college in Addis Ababa, Ethiopia. After graduating, he returned to his mother church, Yabello Mekane Yesus Church, where he served as Evangelist from 1995-1998.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  The Vision Birth
                </h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  After extensive practical ministry in remote areas, the Lord opened the door for him to join seminary in Nairobi. During his time at the seminary he received from the Lord the specific vision to start GFUNM.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The ministry vision focuses on spreading the Kingdom Gospel in the Horn of Africa countries and beyond. The regions often marked by civil war, natural disasters, drought, ethnic conflict, and religious tension.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Focus Section */}
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
              Based in Ethiopia, the hub of the Horn of Africa region, we focus on mission-oriented, practical ministry through preaching the Gospel, church planting, discipleship, and equipping saints and literature  for global missions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ministryFocus.map((feature, index) => {
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

      {/* Six Key Ministry Areas */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              GFUNM programs/six wings/  
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              But the word of God continued to increase and spread (Act. 12: 24) 
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministryAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.title}
                  className={`bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${800 + index * 150}ms` }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {area.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services & Programs */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Services & Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how Gospel For Unreached Nation Ministry serves the Horn of Africa through practical ministry, church planting, discipleship, and equipping saints for global missions in Ethiopia, Somalia, Djibouti, and Eritrea.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${1000 + index * 150}ms` }}
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm mb-4">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
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
             To see missional, Christ centered churches flourishing in the Horen Africa countries and beyond.  (Matt 28, 18-19 “Churches were multiplied” (Act 9;31)
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-100 border border-blue-200">
              <Globe className="h-5 w-5 text-blue-600" />
              <span className="text-blue-700 font-medium">
                Reaching Every Nation with God&apos;s Love
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}