import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Heart,
  BookOpen,
  Users,
  Church,
  Globe,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const data = {
  facebookLink: 'https://facebook.com/gfunm',
  instaLink: 'https://instagram.com/gfunm',
  twitterLink: 'https://twitter.com/gfunm',
  services: {
    books: '/books',
    ministry: '/services',
    contact: '/contact',
    about: '/about',
  },
  about: {
    mission: '/about',
    team: '/about',
    history: '/about',
    vision: '/about',
  },
  ministry: {
    bibleStudy: '/services',
    outreach: '/services',
    prayer: '/services',
    missions: '/services',
  },
  contact: {
    email: 'info@gfunm.org',
    phone: '+251 916824930',
    address: 'Addis Ababa, Ethiopia',
  },
  company: {
    name: 'GFUNM',
    description:
      'Gospel For Unreached Nation Ministry is dedicated to bringing the transformative message of Jesus Christ to communities around the world through inspiring books and ministry.',
    logo: '/GFUNMlogo.png',
  },
};



export default function FooterColumn() {
  return (
    <footer className="relative bg-white py-16 overflow-hidden">
      {/* Blue Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 via-blue-400/20 to-transparent opacity-50" />
        
        {/* Primary glow orbs */}
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-radial from-blue-500/15 via-blue-400/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-radial from-blue-600/20 via-blue-500/15 to-transparent rounded-full blur-3xl" />
        
        {/* Secondary glow layers for depth */}
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-radial from-blue-400/12 via-blue-300/8 to-transparent rounded-full blur-2xl" />
        <div className="absolute -bottom-20 right-1/3 w-72 h-72 bg-gradient-radial from-blue-500/18 via-blue-400/12 to-transparent rounded-full blur-2xl" />
        
        {/* Subtle accent glows */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-radial from-blue-300/10 via-blue-200/6 to-transparent rounded-full blur-xl" />
        <div className="absolute -bottom-16 left-16 w-48 h-48 bg-gradient-radial from-blue-600/15 via-blue-500/10 to-transparent rounded-full blur-xl" />
        <div className="absolute -bottom-24 right-20 w-56 h-56 bg-gradient-radial from-blue-400/14 via-blue-300/9 to-transparent rounded-full blur-xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src={data.company.logo}
                  alt={data.company.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-gray-900">
                {data.company.name}
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              {data.company.description}
            </p>
            <div className="mt-6 flex space-x-4">
              <Link
                href={data.facebookLink}
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href={data.instaLink}
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href={data.twitterLink}
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 flex items-center">
              <BookOpen className="h-4 w-4 mr-2 text-blue-600" />
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href={data.services.books}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Books & Resources
                </Link>
              </li>
              <li>
                <Link
                  href={data.services.ministry}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Ministry Services
                </Link>
              </li>
              <li>
                <Link
                  href={data.services.about}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href={data.services.contact}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Ministry */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 flex items-center">
              <Church className="h-4 w-4 mr-2 text-blue-600" />
              Ministry
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href={data.ministry.bibleStudy}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Bible Study
                </Link>
              </li>
              <li>
                <Link
                  href={data.ministry.outreach}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Community Outreach
                </Link>
              </li>
              <li>
                <Link
                  href={data.ministry.prayer}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Prayer Ministry
                </Link>
              </li>
              <li>
                <Link
                  href={data.ministry.missions}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Global Missions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 flex items-center">
              <Heart className="h-4 w-4 mr-2 text-blue-600" />
              Get In Touch
            </h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-600 flex-shrink-0" />
                <a 
                  href={`mailto:${data.contact.email}`}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  {data.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-600 flex-shrink-0" />
                <a 
                  href={`tel:${data.contact.phone}`}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  {data.contact.phone}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">
                  {data.contact.address}
                </span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50/50 rounded-lg border border-blue-100">
              <p className="text-xs text-blue-800 font-medium flex items-center">
                <Globe className="h-3 w-3 mr-1" />
                Spreading the Gospel Worldwide
              </p>
              <p className="text-xs text-blue-700 mt-1">
                Join us in our mission to reach unreached nations with the love of Christ.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              © 2024 {data.company.name}. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
