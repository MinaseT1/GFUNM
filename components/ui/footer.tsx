"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Heart, Globe, BookOpen, Users, Church } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/books", label: "Books" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const ministryServices = [
    { icon: <BookOpen className="w-4 h-4" />, name: "Bible Study", href: "/services" },
    { icon: <Users className="w-4 h-4" />, name: "Community Outreach", href: "/services" },
    { icon: <Church className="w-4 h-4" />, name: "Prayer Ministry", href: "/services" },
    { icon: <Globe className="w-4 h-4" />, name: "Global Missions", href: "/services" },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      label: "Email",
      value: "info@gfunm.org",
      href: "mailto:info@gfunm.org"
    },
    {
      icon: <Phone className="w-4 h-4" />,
      label: "Phone",
      value: "+251 911 123 456",
      href: "tel:+251911123456"
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      label: "Location",
      value: "Addis Ababa, Ethiopia",
      href: "/contact"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-blue-50 border-t border-blue-100">
      <motion.div
        className="container mx-auto px-4 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <motion.div 
            className="lg:col-span-1" 
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 relative flex-shrink-0">
                <Image
                  src="/GFUNMlogo.png"
                  alt="GFUNM Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-blue-600">
                GFUNM
              </span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Gospel For Unreached Nation Ministry is dedicated to bringing the transformative message of Jesus Christ to communities around the world.
            </p>
            <div className="flex items-center gap-2 text-blue-600">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Transforming Lives Through Faith</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Ministry Services */}
          <motion.div 
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Our Ministry</h3>
            <ul className="space-y-3">
              {ministryServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="text-blue-400 group-hover:text-blue-600 transition-colors duration-200">
                      {service.icon}
                    </span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              {contactInfo.map((contact) => (
                <li key={contact.label}>
                  <Link
                    href={contact.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm flex items-start gap-3 group"
                  >
                    <span className="text-blue-400 group-hover:text-blue-600 transition-colors duration-200 mt-0.5">
                      {contact.icon}
                    </span>
                    <div>
                      <div className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                        {contact.label}
                      </div>
                      <div className="text-xs text-gray-500">
                        {contact.value}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-blue-200"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600 text-center md:text-left">
              © {currentYear} Gospel For Unreached Nation Ministry. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <Link
                href="/contact"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/contact"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;