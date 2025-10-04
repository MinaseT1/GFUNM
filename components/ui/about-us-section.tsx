"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import {
  Heart,
  BookOpen,
  Users,
  Church,
  Hand,
  X,
  Award,
  Calendar,
  CheckCircle,
  Sparkles,
  Star,
  ArrowRight,
  Globe,
  TrendingUp,
  HandHeart,
  Music,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"
import { AnimatedText } from "@/components/ui/animated-shiny-text"
import DomeGallery from "@/components/dome-gallery"

export default function AboutUsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

  // Parallax effect for decorative elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const services = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]" />,
      title: "Bible Study",
      description:
        "Deepen your understanding of God's Word through our comprehensive Bible study programs. We offer both group sessions and personal study guides to help you grow in faith.",
      position: "left",
    },
    {
      icon: <Hand className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]" />,
      title: "Prayer Ministry",
      description:
        "Experience the power of prayer through our dedicated prayer ministry. We provide prayer support, intercession, and guidance for your spiritual journey.",
      position: "left",
    },
    {
      icon: <Music className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]" />,
      title: "Worship",
      description:
        "Join us in heartfelt worship as we praise God together. Our worship ministry creates an atmosphere where hearts are lifted and spirits are renewed.",
      position: "left",
    },
    {
      icon: <HandHeart className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]" />,
      title: "Community Outreach",
      description:
        "Serve others and share God's love through our community outreach programs. We actively engage in helping those in need and spreading the Gospel.",
      position: "right",
    },
    {
      icon: <Users className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]" />,
      title: "Fellowship",
      description:
        "Build meaningful relationships with fellow believers through our fellowship programs. Experience the joy of Christian community and mutual support.",
      position: "right",
    },
    {
      icon: <X className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]" />,
      title: "Discipleship",
      description:
        "Grow in your faith through our discipleship programs. We provide mentorship and guidance to help you become a mature follower of Christ.",
      position: "right",
    },
  ]

  const stats = [
    { icon: <Heart />, value: 15, label: "Years of Ministry", suffix: "+" },
    { icon: <Calendar />, value: 2034, label: "Vision Target Year", suffix: "" },
    { icon: <Globe />, value: 4, label: "Horn Africa Nations", suffix: "" },
  ]

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="w-full py-24 px-4 text-[#202e44] overflow-hidden relative"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-[#598dee]/30"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-[#A9BBC8]/30"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div 
          className="flex flex-col items-center mb-6" 
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.span
            className="text-[#598dee] font-medium mb-2 flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
           
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent mb-4 text-center" style={{ fontFamily: 'Satoshi, sans-serif' }}>About Us</h2>
          <motion.div
            className="w-24 h-1 bg-[#598dee]"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
        </motion.div>

        <motion.p className="text-center max-w-3xl mx-auto mb-8 text-lg text-gray-600" style={{ fontFamily: 'Satoshi, sans-serif' }} variants={itemVariants}>
          Gospel For Unreached Nation Ministry (GFUNM) is a Christ-centered indigenous ministry founded by Evangelist Tsegaab Bekele in the beautiful city of Awassa, Southern Ethiopia. For over 10 years, we have been dedicated to spreading the Kingdom Gospel throughout the Horn of Africa, bringing hope to regions marked by civil war, natural disasters, and religious tension.
        </motion.p>

        {/* Ministry Focus Features */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Our Ministry Focus</h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Based in Ethiopia, the hub of the Horn of Africa region, we focus on mission-oriented, practical ministry through literature, church planting, discipleship, and equipping saints for global missions.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300" variants={itemVariants}>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Our Mission</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                To see missional, Christ-centered churches flourishing in the Horn of Africa through practical ministry, discipleship, and church planting in Ethiopia, Somalia, Djibouti, and Eritrea.
              </p>
            </motion.div>
            
            <motion.div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300" variants={itemVariants}>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Horn of Africa Focus</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Strategically positioned in Ethiopia, we serve the Horn of Africa region, addressing the unique challenges of civil war, drought, and religious tension with the hope of Christ.
              </p>
            </motion.div>
            
            <motion.div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300" variants={itemVariants}>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Inspiring Literature</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our collection of 8 carefully crafted books provides spiritual guidance, biblical wisdom, and encouragement for believers.
              </p>
            </motion.div>
            
            <motion.div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300" variants={itemVariants}>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Community Impact</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Building strong Christian communities and empowering local leaders to continue the ministry in their regions.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl mb-16" variants={itemVariants}>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Our Vision (2024-2034)</h3>
          <p className="text-center text-gray-600 leading-relaxed mb-6 max-w-4xl mx-auto">
            "Come over to Macedonia (to the Horn Africa) and help us." Our 10-year vision is to establish thriving, missional churches throughout the Horn of Africa, equipping local leaders for sustainable ministry. We seek committed faith partners who will march with us to make history in this region for the glory of our Lord Jesus Christ, transforming communities through the power of the Gospel.
          </p>
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-100 border border-blue-200">
              <Globe className="h-5 w-5 text-blue-600" />
              <span className="text-blue-700 font-medium">
                "A cloud as small as a man's hand is rising..." (1 Kings 18:44)
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Left Column */}
          <div className="space-y-16">
            {services
              .filter((service) => service.position === "left")
              .map((service, index) => (
                <ServiceItem
                  key={`left-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="left"
                />
              ))}
          </div>

          {/* Center Content - Responsive Design */}
          <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
            {/* Mobile/Small devices: Full text */}
            <motion.div className="block md:hidden text-center" variants={itemVariants}>
              <div className="space-y-1">
                <AnimatedText 
                   text="Gospel For" 
                   gradientColors="linear-gradient(90deg, #598dee, #3b82f6, #598dee)"
                   gradientAnimationDuration={2}
                   hoverEffect={true}
                   textClassName="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
                   className="py-2"
                 />
                 <AnimatedText 
                   text="Unreached" 
                   gradientColors="linear-gradient(90deg, #598dee, #3b82f6, #598dee)"
                   gradientAnimationDuration={2}
                   hoverEffect={true}
                   textClassName="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
                   className="py-2"
                 />
                 <AnimatedText 
                   text="Nation" 
                   gradientColors="linear-gradient(90deg, #598dee, #3b82f6, #598dee)"
                   gradientAnimationDuration={2}
                   hoverEffect={true}
                   textClassName="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
                   className="py-2"
                 />
                 <AnimatedText 
                   text="Ministry" 
                   gradientColors="linear-gradient(90deg, #598dee, #3b82f6, #598dee)"
                   gradientAnimationDuration={2}
                   hoverEffect={true}
                   textClassName="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
                   className="py-2"
                 />
              </div>
            </motion.div>
            
            {/* Medium and larger devices: Abbreviation letters */}
            <motion.div className="hidden md:flex flex-col items-center space-y-2" variants={itemVariants}>
              <AnimatedText 
                text="G" 
                gradientColors="linear-gradient(90deg, #598dee, #3b82f6, #598dee)"
                gradientAnimationDuration={2}
                hoverEffect={true}
                textClassName="text-6xl md:text-7xl lg:text-8xl font-bold leading-none"
                className="py-2"
              />
              <AnimatedText 
                text="F" 
                gradientColors="linear-gradient(90deg, #598dee, #3b82f6, #598dee)"
                gradientAnimationDuration={2}
                hoverEffect={true}
                textClassName="text-6xl md:text-7xl lg:text-8xl font-bold leading-none"
                className="py-2"
              />
              <AnimatedText 
                text="U" 
                gradientColors="linear-gradient(90deg, #598dee, #3b82f6, #598dee)"
                gradientAnimationDuration={2}
                hoverEffect={true}
                textClassName="text-6xl md:text-7xl lg:text-8xl font-bold leading-none"
                className="py-2"
              />
              <AnimatedText 
                text="N" 
                gradientColors="linear-gradient(90deg, #598dee, #3b82f6, #598dee)"
                gradientAnimationDuration={2}
                hoverEffect={true}
                textClassName="text-6xl md:text-7xl lg:text-8xl font-bold leading-none"
                className="py-2"
              />
              <AnimatedText 
                text="M" 
                gradientColors="linear-gradient(90deg, #598dee, #3b82f6, #598dee)"
                gradientAnimationDuration={2}
                hoverEffect={true}
                textClassName="text-6xl md:text-7xl lg:text-8xl font-bold leading-none"
                className="py-2"
              />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-16">
            {services
              .filter((service) => service.position === "right")
              .map((service, index) => (
                <ServiceItem
                  key={`right-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="right"
                />
              ))}
          </div>
        </div>
        
        {/* Statistics Section */}
        <motion.div 
          ref={statsRef}
          className="mt-20 pt-16 border-t border-gray-200"
          variants={containerVariants}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-12 text-center"
            variants={itemVariants}
          >
            Our Impact
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <StatCounter
                key={stat.label}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                delay={index * 0.2}
              />
            ))}
          </div>
          
          {/* Ministry Gallery */}
          <motion.div 
            className="mt-16 pt-12"
            variants={itemVariants}
          >
            <motion.h4 
              className="text-xl md:text-2xl font-semibold text-gray-800 mb-8 text-center"
              variants={itemVariants}
            >
              Our Ministry in Action
            </motion.h4>
            <div className="h-[500px] w-full">
              <DomeGallery
                images={[
                  { src: "/photo/IMG_20250724_222511_962.jpg", alt: "Ministry in Action" },
                  { src: "/photo/IMG_20250724_222522_400.jpg", alt: "Community Outreach" },
                  { src: "/photo/IMG_20250724_222522_506.jpg", alt: "Gospel Preaching" },
                  { src: "/photo/IMG_20250724_222522_679.jpg", alt: "Church Ministry" },
                  { src: "/photo/photo_2025-10-01_14-46-38.jpg", alt: "Bible Study Sessions" },
                  { src: "/photo/photo_2025-10-01_14-46-42.jpg", alt: "Prayer and Worship" },
                  { src: "/photo/photo_2025-10-01_14-46-45.jpg", alt: "Discipleship Training" },
                  { src: "/photo/photo_2025-10-01_14-46-54.jpg", alt: "Ministry Leadership" },
                  { src: "/photo/photo_2025-10-01_14-47-00.jpg", alt: "Evangelism Outreach" },
                  { src: "/photo/photo_2025-10-01_15-13-23.jpg", alt: "Fellowship and Unity" },
                  { src: "/photo/photo_2025-10-01_15-13-26.jpg", alt: "Spiritual Growth" },
                  { src: "/photo/photo_2025-10-01_15-13-44.jpg", alt: "Ministry Impact" },
                  { src: "/photo/photo_2025-10-01_15-13-48.jpg", alt: "Gospel Mission" },
                  { src: "/photo/photo_2025-10-03_20-28-44.jpg", alt: "Ministry Outreach" },
                  { src: "/photo/photo_2025-10-03_20-28-45.jpg", alt: "Community Service" },
                  { src: "/photo/photo_2025-10-03_20-28-58.jpg", alt: "Gospel Ministry" }
                ]}
                overlayBlurColor="#f8fafc"
                imageBorderRadius="12px"
                openedImageBorderRadius="16px"
                grayscale={false}
                segments={25}
                fit={0.6}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

interface ServiceItemProps {
  icon: React.ReactNode
  secondaryIcon?: React.ReactNode
  title: string
  description: string
  variants: {
    hidden: { opacity: number; y?: number }
    visible: { opacity: number; y?: number }
  }
  delay: number
  direction: "left" | "right"
}

function ServiceItem({ icon, secondaryIcon, title, description, variants, delay, direction }: ServiceItemProps) {
  return (
    <motion.div
      className="flex flex-col group"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="flex items-center gap-3 mb-3"
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div
          className="text-[#598dee] bg-[#598dee]/10 p-3 rounded-lg transition-colors duration-300 group-hover:bg-[#598dee]/20 relative"
          whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
        >
          {icon}
          {secondaryIcon}
        </motion.div>
        <h3 className="text-xl font-medium text-[#202e44] group-hover:text-[#598dee] transition-colors duration-300" style={{ fontFamily: 'Satoshi, sans-serif' }}>
          {title}
        </h3>
      </motion.div>
      <motion.p
        className="text-sm text-[#202e44]/80 leading-relaxed pl-12"
        style={{ fontFamily: 'Satoshi, sans-serif' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>
      <motion.div
        className="mt-3 pl-12 flex items-center text-[#88734C] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
      >
        <span className="flex items-center gap-1">
          Learn more <ArrowRight className="w-3 h-3" />
        </span>
      </motion.div>
    </motion.div>
  )
}

interface StatCounterProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix: string
  delay: number
}

function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: false })
  const [hasAnimated, setHasAnimated] = useState(false)

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 10,
  })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value)
      setHasAnimated(true)
    } else if (!isInView && hasAnimated) {
      springValue.set(0)
      setHasAnimated(false)
    }
  }, [isInView, value, springValue, hasAnimated])

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

  return (
    <motion.div
      className="bg-white/50 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-center group hover:bg-white transition-colors duration-300"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="w-14 h-14 rounded-full bg-[#202e44]/5 flex items-center justify-center mb-4 text-[#88734C] group-hover:bg-[#88734C]/10 transition-colors duration-300"
        whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
      >
        {icon}
      </motion.div>
      <motion.div ref={countRef} className="text-3xl font-bold text-[#202e44] flex items-center" style={{ fontFamily: 'Satoshi, sans-serif' }}>
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="text-[#202e44]/70 text-sm mt-1" style={{ fontFamily: 'Satoshi, sans-serif' }}>{label}</p>
      <motion.div className="w-10 h-0.5 bg-[#88734C] mt-3 group-hover:w-16 transition-all duration-300" />
    </motion.div>
  )
}

