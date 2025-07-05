"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Clock, Users, Star, ArrowRight } from "lucide-react"

export default function RoadmapsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const roadmaps = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Learn to build complete web applications from frontend to backend",
      category: "Technology",
      duration: "6-8 months",
      level: "Beginner",
      students: 1250,
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=300",
      tags: ["JavaScript", "React", "Node.js", "Database"],
    },
    {
      id: 2,
      title: "Digital Marketing Mastery",
      description: "Master social media marketing, SEO, and online advertising",
      category: "Business",
      duration: "3-4 months",
      level: "Beginner",
      students: 890,
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=300",
      tags: ["SEO", "Social Media", "Analytics", "Content Marketing"],
    },
    {
      id: 3,
      title: "Data Science & Analytics",
      description: "Learn Python, statistics, and machine learning for data analysis",
      category: "Technology",
      duration: "8-10 months",
      level: "Intermediate",
      students: 675,
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Python", "Statistics", "Machine Learning", "SQL"],
    },
    {
      id: 4,
      title: "Fashion Design & Production",
      description: "From sketching to production, learn the complete fashion design process",
      category: "Creative Arts",
      duration: "4-6 months",
      level: "Beginner",
      students: 520,
      rating: 4.6,
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Design", "Pattern Making", "Sewing", "Business"],
    },
    {
      id: 5,
      title: "Mobile App Development",
      description: "Build iOS and Android apps using React Native and Flutter",
      category: "Technology",
      duration: "5-7 months",
      level: "Intermediate",
      students: 430,
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=300",
      tags: ["React Native", "Flutter", "Mobile UI", "App Store"],
    },
    {
      id: 6,
      title: "Agricultural Technology",
      description: "Modern farming techniques, crop management, and agribusiness",
      category: "Agriculture",
      duration: "3-5 months",
      level: "Beginner",
      students: 380,
      rating: 4.5,
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Farming", "Technology", "Business", "Sustainability"],
    },
  ]

  const categories = ["all", "Technology", "Business", "Creative Arts", "Agriculture", "Healthcare", "Skilled Trades"]

  const filteredRoadmaps = roadmaps.filter((roadmap) => {
    const matchesSearch =
      roadmap.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      roadmap.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || roadmap.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Learning Roadmaps</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Structured learning paths designed to take you from beginner to professional
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search roadmaps..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredRoadmaps.length} roadmap{filteredRoadmaps.length !== 1 ? "s" : ""}
            {selectedCategory !== "all" && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Roadmaps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRoadmaps.map((roadmap) => (
            <Card key={roadmap.id} className="hover:shadow-2xl transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-yellow-100 to-purple-100 rounded-t-lg"></div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{roadmap.category}</Badge>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm text-gray-600">{roadmap.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-yellow-600 transition-colors">{roadmap.title}</CardTitle>
                <CardDescription>{roadmap.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {roadmap.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {roadmap.students.toLocaleString()} students
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {roadmap.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {roadmap.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{roadmap.tags.length - 3} more
                    </Badge>
                  )}
                </div>

                <Link href={`/roadmaps/${roadmap.id}`}>
                  <Button className="w-full group-hover:bg-yellow-600 transition-colors">
                    View Roadmap
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredRoadmaps.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No roadmaps found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search terms or category filter</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
