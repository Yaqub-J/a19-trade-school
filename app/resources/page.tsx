"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Search, Download, Eye, FileText, Video, BookOpen, Filter } from "lucide-react"

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)

  const resources = [
    {
      id: 1,
      title: "Complete JavaScript Course",
      description:
        "Comprehensive JavaScript tutorial covering ES6+ features, async programming, and modern development practices.",
      author: "Adaora Okafor",
      category: "Technology",
      type: "video",
      level: "Beginner",
      downloads: 2450,
      views: 15600,
      uploadDate: "2024-01-15",
      duration: "12 hours",
      size: "2.1 GB",
    },
    {
      id: 2,
      title: "Digital Marketing Strategy Guide",
      description: "Step-by-step guide to creating effective digital marketing campaigns for Nigerian businesses.",
      author: "Ibrahim Musa",
      category: "Business",
      type: "pdf",
      level: "Intermediate",
      downloads: 1890,
      views: 8900,
      uploadDate: "2024-01-20",
      pages: 85,
      size: "15 MB",
    },
    {
      id: 3,
      title: "React Development Bootcamp",
      description: "Build modern web applications with React, including hooks, context, and state management.",
      author: "Chinedu Okoro",
      category: "Technology",
      type: "course",
      level: "Intermediate",
      downloads: 3200,
      views: 22100,
      uploadDate: "2024-01-10",
      lessons: 45,
      duration: "18 hours",
    },
    {
      id: 4,
      title: "Fashion Design Fundamentals",
      description: "Learn the basics of fashion design, pattern making, and garment construction techniques.",
      author: "Funmi Adebayo",
      category: "Creative Arts",
      type: "video",
      level: "Beginner",
      downloads: 1650,
      views: 12400,
      uploadDate: "2024-01-25",
      duration: "8 hours",
      size: "1.5 GB",
    },
    {
      id: 5,
      title: "Python for Data Science",
      description: "Master Python programming for data analysis, visualization, and machine learning applications.",
      author: "Kemi Ogundimu",
      category: "Technology",
      type: "course",
      level: "Advanced",
      downloads: 2100,
      views: 18700,
      uploadDate: "2024-01-05",
      lessons: 60,
      duration: "25 hours",
    },
    {
      id: 6,
      title: "Small Business Finance Guide",
      description: "Essential financial management strategies for small and medium enterprises in Nigeria.",
      author: "Tunde Bakare",
      category: "Business",
      type: "pdf",
      level: "Beginner",
      downloads: 1420,
      views: 9800,
      uploadDate: "2024-01-30",
      pages: 120,
      size: "8 MB",
    },
  ]

  const categories = ["all", "Technology", "Business", "Creative Arts", "Agriculture", "Healthcare"]
  const types = ["all", "video", "pdf", "course"]
  const levels = ["all", "Beginner", "Intermediate", "Advanced"]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="h-5 w-5 text-red-500" />
      case "pdf":
        return <FileText className="h-5 w-5 text-yellow-500" />
      case "course":
        return <BookOpen className="h-5 w-5 text-green-500" />
      default:
        return <FileText className="h-5 w-5 text-gray-500" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "video":
        return "bg-red-100 text-red-800"
      case "pdf":
        return "bg-yellow-100 text-yellow-800"
      case "course":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory
    const matchesType = selectedType === "all" || resource.type === selectedType
    const matchesLevel = selectedLevel === "all" || resource.level === selectedLevel
    return matchesSearch && matchesCategory && matchesType && matchesLevel
  })

  const itemsPerPage = 6
  const totalPages = Math.ceil(filteredResources.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedResources = filteredResources.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resource Library</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access thousands of educational resources uploaded by our community of educators and experts
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                {types.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type === "all" ? "All Types" : type.charAt(0).toUpperCase() + type.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                {levels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level === "all" ? "All Levels" : level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing {paginatedResources.length} of {filteredResources.length} resources
          </p>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {paginatedResources.map((resource) => (
            <Card key={resource.id} className="hover:shadow-2xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {getTypeIcon(resource.type)}
                    <Badge className={getTypeColor(resource.type)}>{resource.type.toUpperCase()}</Badge>
                  </div>
                  <Badge variant="outline">{resource.level}</Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-yellow-600 transition-colors line-clamp-2">
                  {resource.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>By {resource.author}</span>
                    <span>{resource.category}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Download className="h-4 w-4 mr-1" />
                        {resource.downloads.toLocaleString()}
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {resource.views.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="text-sm text-gray-500">
                    {resource.type === "video" && `Duration: ${resource.duration}`}
                    {resource.type === "pdf" && `${resource.pages} pages`}
                    {resource.type === "course" && `${resource.lessons} lessons`}
                    {resource.size && ` • ${resource.size}`}
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      if (currentPage > 1) setCurrentPage(currentPage - 1)
                    }}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>

                {[...Array(totalPages)].map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        setCurrentPage(index + 1)
                      }}
                      isActive={currentPage === index + 1}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      if (currentPage < totalPages) setCurrentPage(currentPage + 1)
                    }}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}

        {/* No Results */}
        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search terms or filters</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
                setSelectedType("all")
                setSelectedLevel("all")
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
