"use client"

import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"
import "./index.css"

interface RotatingEarthProps {
  width?: number
  height?: number
  className?: string
  badge?: string
  title1?: string
  title2?: string
  description?: string
}

export default function RotatingEarth({ 
  width = 400, 
  height = 400, 
  className = "",
  badge = "GLOBAL MINISTRY",
  title1 = "Spreading",
  title2 = "the Gospel",
  description = "Bringing the Gospel to unreached nations through inspiring books and transformative ministry."
}: RotatingEarthProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    if (!context) return

    // Set up responsive dimensions
    const containerWidth = Math.min(width, window.innerWidth - 40)
    const containerHeight = Math.min(height, window.innerHeight - 100)
    const radius = Math.min(containerWidth, containerHeight) / 2.5

    const dpr = window.devicePixelRatio || 1
    canvas.width = containerWidth * dpr
    canvas.height = containerHeight * dpr
    canvas.style.width = `${containerWidth}px`
    canvas.style.height = `${containerHeight}px`
    context.scale(dpr, dpr)

    // Create projection and path generator for Canvas
    const projection = d3
      .geoOrthographic()
      .scale(radius)
      .translate([containerWidth / 2, containerHeight / 2])
      .clipAngle(90)

    const path = d3.geoPath().projection(projection).context(context)

    const pointInPolygon = (point: [number, number], polygon: number[][]): boolean => {
      const [x, y] = point
      let inside = false

      for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const [xi, yi] = polygon[i]
        const [xj, yj] = polygon[j]

        if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
          inside = !inside
        }
      }

      return inside
    }

    const pointInFeature = (point: [number, number], feature: any): boolean => {
      const geometry = feature.geometry

      if (geometry.type === "Polygon") {
        const coordinates = geometry.coordinates
        // Check if point is in outer ring
        if (!pointInPolygon(point, coordinates[0])) {
          return false
        }
        // Check if point is in any hole (inner rings)
        for (let i = 1; i < coordinates.length; i++) {
          if (pointInPolygon(point, coordinates[i])) {
            return false // Point is in a hole
          }
        }
        return true
      } else if (geometry.type === "MultiPolygon") {
        // Check each polygon in the MultiPolygon
        for (const polygon of geometry.coordinates) {
          // Check if point is in outer ring
          if (pointInPolygon(point, polygon[0])) {
            // Check if point is in any hole
            let inHole = false
            for (let i = 1; i < polygon.length; i++) {
              if (pointInPolygon(point, polygon[i])) {
                inHole = true
                break
              }
            }
            if (!inHole) {
              return true
            }
          }
        }
        return false
      }

      return false
    }

    const generateDotsInPolygon = (feature: any, dotSpacing = 16) => {
      const dots: [number, number][] = []
      const bounds = d3.geoBounds(feature)
      const [[minLng, minLat], [maxLng, maxLat]] = bounds

      const stepSize = dotSpacing * 0.08
      let pointsGenerated = 0

      for (let lng = minLng; lng <= maxLng; lng += stepSize) {
        for (let lat = minLat; lat <= maxLat; lat += stepSize) {
          const point: [number, number] = [lng, lat]
          if (pointInFeature(point, feature)) {
            dots.push(point)
            pointsGenerated++
          }
        }
      }

      console.log(
        `[v0] Generated ${pointsGenerated} points for land feature:`,
        feature.properties?.featurecla || "Land",
      )
      return dots
    }

    interface DotData {
      lng: number
      lat: number
      visible: boolean
    }

    const allDots: DotData[] = []
    let landFeatures: any

    // Function to render text on the globe surface
    const renderTextOnGlobe = () => {
      const currentScale = projection.scale()
      const scaleFactor = currentScale / radius
      
      // Responsive sizing based on container width
      const isMobile = containerWidth < 640
      const isTablet = containerWidth >= 640 && containerWidth < 1024
      const isLargeScreen = containerWidth >= 1024 && containerWidth < 1440
      const isXLScreen = containerWidth >= 1440
      
      // Responsive multipliers with enhanced scaling for large screens
      const responsiveMultiplier = isMobile ? 0.4 : isTablet ? 0.7 : isLargeScreen ? 1.2 : 1.5
      
      // Available width for text (with padding)
      const availableWidth = containerWidth * 0.9 // 90% of container width
      
      context.textAlign = "center"
      context.textBaseline = "middle"
      
      const centerX = containerWidth / 2
      const centerY = containerHeight / 2
      const globeRadius = currentScale

      // Helper function to get optimal font size that fits within available width
      const getOptimalFontSize = (text: string, maxSize: number, minSize: number) => {
        let fontSize = maxSize
        context.font = `bold ${fontSize}px Inter, system-ui, sans-serif`
        let textWidth = context.measureText(text).width
        
        while (textWidth > availableWidth && fontSize > minSize) {
          fontSize -= 2
          context.font = `bold ${fontSize}px Inter, system-ui, sans-serif`
          textWidth = context.measureText(text).width
        }
        
        return fontSize
      }

      // Badge - fixed at top with responsive sizing
       context.save()
       const maxBadgeSize = Math.max(12, (isXLScreen ? 36 : isLargeScreen ? 30 : 24) * scaleFactor * responsiveMultiplier)
       const badgeSize = getOptimalFontSize(badge, maxBadgeSize, 8)
       context.font = `bold ${badgeSize}px Inter, system-ui, sans-serif`
       context.fillStyle = "rgba(59, 130, 246, 0.9)"
       context.shadowColor = "rgba(255, 255, 255, 0.8)"
       context.shadowBlur = 2
       context.fillText(badge, centerX, centerY - globeRadius * (isMobile ? 0.9 : 0.8))
       context.restore()
       
       // Title 1 - fixed in upper center with responsive sizing
       context.save()
       const maxTitle1Size = Math.max(isMobile ? 20 : 48, (isXLScreen ? 120 : isLargeScreen ? 100 : 80) * scaleFactor * responsiveMultiplier)
       const title1Size = getOptimalFontSize(title1, maxTitle1Size, isMobile ? 16 : 32)
       context.font = `bold ${title1Size}px Inter, system-ui, sans-serif`
       context.fillStyle = "rgba(75, 85, 99, 0.9)"
       context.shadowColor = "rgba(255, 255, 255, 0.8)"
       context.shadowBlur = 4
       context.fillText(title1, centerX, centerY - globeRadius * (isMobile ? 0.5 : 0.4))
       context.restore()
       
       // Title 2 - fixed in center with responsive sizing
       context.save()
       const maxTitle2Size = Math.max(isMobile ? 20 : 48, (isXLScreen ? 120 : isLargeScreen ? 100 : 80) * scaleFactor * responsiveMultiplier)
       const title2Size = getOptimalFontSize(title2, maxTitle2Size, isMobile ? 16 : 32)
       context.font = `bold ${title2Size}px Inter, system-ui, sans-serif`
       context.fillStyle = "rgba(59, 130, 246, 0.9)"
       context.shadowColor = "rgba(255, 255, 255, 0.8)"
       context.shadowBlur = 4
       context.fillText(title2, centerX, centerY - globeRadius * (isMobile ? 0.15 : 0.1))
       context.restore()

      // Description - fixed at bottom, wrapped in multiple lines with responsive sizing
      const words = description.split(' ')
      const maxWordsPerLine = isMobile ? 3 : isTablet ? 4 : isLargeScreen ? 8 : 10
      const lines = []
      
      for (let i = 0; i < words.length; i += maxWordsPerLine) {
        lines.push(words.slice(i, i + maxWordsPerLine).join(' '))
      }

      context.save()
      const maxDescSize = Math.max(isMobile ? 8 : 14, (isXLScreen ? 28 : isLargeScreen ? 24 : 18) * scaleFactor * responsiveMultiplier)
      
      // Find optimal size for description that fits all lines
      let descSize = maxDescSize
      let allLinesFit = false
      
      while (!allLinesFit && descSize > 6) {
        context.font = `${descSize}px Inter, system-ui, sans-serif`
        allLinesFit = lines.every(line => context.measureText(line).width <= availableWidth)
        if (!allLinesFit) descSize -= 1
      }
      
      context.font = `${descSize}px Inter, system-ui, sans-serif`
      context.fillStyle = "rgba(107, 114, 128, 0.8)"
      context.shadowColor = "rgba(255, 255, 255, 0.6)"
      context.shadowBlur = 1
      
      const lineHeight = Math.max(isMobile ? 12 : 16, descSize * 1.4)
      const startY = centerY + globeRadius * (isMobile ? 0.25 : 0.4)
      
      lines.forEach((line, index) => {
        context.fillText(line, centerX, startY + (index * lineHeight))
      })
      context.restore()
    }

    const render = () => {
      // Clear canvas
      context.clearRect(0, 0, containerWidth, containerHeight)

      const currentScale = projection.scale()
      const scaleFactor = currentScale / radius

      // Draw ocean (globe background) - now transparent
      context.beginPath()
      context.arc(containerWidth / 2, containerHeight / 2, currentScale, 0, 2 * Math.PI)
      // Remove fill to make background transparent
      // context.fillStyle = "transparent" // No fill needed
      // context.fill() // No fill needed
      context.strokeStyle = "#3b82f6" // Blue-500 for border only
      context.lineWidth = 2 * scaleFactor
      context.stroke()

      if (landFeatures) {
        // Draw graticule
        const graticule = d3.geoGraticule()
        context.beginPath()
        path(graticule())
        context.strokeStyle = "#60a5fa" // Blue-400 for graticule lines
        context.lineWidth = 1 * scaleFactor
        context.globalAlpha = 0.3
        context.stroke()
        context.globalAlpha = 1

        // Draw land outlines
        context.beginPath()
        landFeatures.features.forEach((feature: any) => {
          path(feature)
        })
        context.strokeStyle = "#93c5fd" // Blue-300 for land outlines
        context.lineWidth = 1 * scaleFactor
        context.stroke()

        // Draw halftone dots
        allDots.forEach((dot) => {
          const projected = projection([dot.lng, dot.lat])
          if (
            projected &&
            projected[0] >= 0 &&
            projected[0] <= containerWidth &&
            projected[1] >= 0 &&
            projected[1] <= containerHeight
          ) {
            context.beginPath()
            context.arc(projected[0], projected[1], 1.2 * scaleFactor, 0, 2 * Math.PI)
            context.fillStyle = "#dbeafe" // Blue-100 for dots
            context.fill()
          }
        })
      }

      // Render text on the globe surface
      renderTextOnGlobe()
    }

    const loadWorldData = async () => {
      try {
        setIsLoading(true)

        const response = await fetch(
          "https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json",
        )
        if (!response.ok) throw new Error("Failed to load land data")

        landFeatures = await response.json()

        // Generate dots for all land features
        let totalDots = 0
        landFeatures.features.forEach((feature: any) => {
          const dots = generateDotsInPolygon(feature, 16)
          dots.forEach(([lng, lat]) => {
            allDots.push({ lng, lat, visible: true })
            totalDots++
          })
        })

        console.log(`[v0] Total dots generated: ${totalDots} across ${landFeatures.features.length} land features`)

        render()
        setIsLoading(false)
      } catch (err) {
        setError("Failed to load land map data")
        setIsLoading(false)
      }
    }

    // Set up rotation and interaction
    const rotation: [number, number] = [0, 0]
    let autoRotate = true
    const rotationSpeed = 0.5

    const rotate = () => {
      if (autoRotate) {
        rotation[0] += rotationSpeed
        projection.rotate(rotation)
        render()
      }
    }

    // Auto-rotation timer
    const rotationTimer = d3.timer(rotate)

    const handleMouseDown = (event: MouseEvent) => {
      autoRotate = false
      const startX = event.clientX
      const startY = event.clientY
      const startRotation = [...rotation]

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const sensitivity = 0.5
        const dx = moveEvent.clientX - startX
        const dy = moveEvent.clientY - startY

        rotation[0] = startRotation[0] + dx * sensitivity
        rotation[1] = startRotation[1] - dy * sensitivity
        rotation[1] = Math.max(-90, Math.min(90, rotation[1]))

        projection.rotate(rotation)
        render()
      }

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)

        setTimeout(() => {
          autoRotate = true
        }, 10)
      }

      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault()
      const scaleFactor = event.deltaY > 0 ? 0.9 : 1.1
      const newRadius = Math.max(radius * 0.5, Math.min(radius * 3, projection.scale() * scaleFactor))
      projection.scale(newRadius)
      render()
    }

    canvas.addEventListener("mousedown", handleMouseDown)
    canvas.addEventListener("wheel", handleWheel)

    // Load the world data
    loadWorldData()

    // Cleanup
    return () => {
      rotationTimer.stop()
      canvas.removeEventListener("mousedown", handleMouseDown)
      canvas.removeEventListener("wheel", handleWheel)
    }
  }, [width, height])

  if (error) {
    return (
      <div className={`dark flex items-center justify-center rounded-2xl p-8 ${className}`} style={{ backgroundColor: "transparent" }}>
        <div className="text-center">
          <p className="dark text-destructive font-semibold mb-2">Error loading Earth visualization</p>
          <p className="dark text-muted-foreground text-sm">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-auto rounded-2xl"
        style={{ maxWidth: "100%", height: "auto", backgroundColor: "transparent" }}
      />
      
    </div>
  )
}
