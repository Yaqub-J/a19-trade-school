import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Clock,
  Users,
  Star,
  BookOpen,
  Video,
  FileText,
  ExternalLink,
  CheckCircle,
  Circle,
  ArrowLeft,
} from "lucide-react"

export default function RoadmapDetailPage({ params }: { params: { id: string } }) {
  // Mock data - in real app, fetch based on params.id
  const roadmap = {
    id: 1,
    title: "Full Stack Web Development",
    description:
      "Learn to build complete web applications from frontend to backend using modern technologies and best practices.",
    category: "Technology",
    duration: "6-8 months",
    level: "Beginner",
    students: 1250,
    rating: 4.8,
    instructor: "Chinedu Okoro",
    tags: ["JavaScript", "React", "Node.js", "Database", "HTML", "CSS"],
    overview:
      "This comprehensive roadmap will take you from a complete beginner to a job-ready full stack developer. You'll learn modern web development technologies including HTML, CSS, JavaScript, React, Node.js, and database management.",
    prerequisites: ["Basic computer literacy", "Willingness to learn", "Access to a computer with internet"],
    outcomes: [
      "Build responsive websites with HTML, CSS, and JavaScript",
      "Create interactive web applications with React",
      "Develop server-side applications with Node.js",
      "Work with databases and APIs",
      "Deploy applications to the cloud",
      "Apply for junior developer positions",
    ],
  }

  const stages = [
    {
      id: 1,
      title: "Foundation",
      level: "Beginner",
      duration: "6-8 weeks",
      description: "Learn the basics of web development including HTML, CSS, and JavaScript fundamentals.",
      completed: true,
      modules: [
        {
          title: "HTML Fundamentals",
          type: "video",
          duration: "2 hours",
          resources: 5,
          completed: true,
        },
        {
          title: "CSS Styling & Layout",
          type: "video",
          duration: "3 hours",
          resources: 8,
          completed: true,
        },
        {
          title: "JavaScript Basics",
          type: "video",
          duration: "4 hours",
          resources: 12,
          completed: false,
        },
      ],
    },
    {
      id: 2,
      title: "Frontend Development",
      level: "Beginner to Intermediate",
      duration: "8-10 weeks",
      description: "Master modern frontend development with React, state management, and responsive design.",
      completed: false,
      modules: [
        {
          title: "Advanced JavaScript",
          type: "video",
          duration: "5 hours",
          resources: 15,
          completed: false,
        },
        {
          title: "React Fundamentals",
          type: "video",
          duration: "6 hours",
          resources: 18,
          completed: false,
        },
        {
          title: "State Management",
          type: "video",
          duration: "4 hours",
          resources: 10,
          completed: false,
        },
      ],
    },
    {
      id: 3,
      title: "Backend Development",
      level: "Intermediate",
      duration: "8-10 weeks",
      description: "Learn server-side development with Node.js, Express, and database integration.",
      completed: false,
      modules: [
        {
          title: "Node.js & Express",
          type: "video",
          duration: "6 hours",
          resources: 20,
          completed: false,
        },
        {
          title: "Database Design & SQL",
          type: "video",
          duration: "5 hours",
          resources: 15,
          completed: false,
        },
        {
          title: "API Development",
          type: "video",
          duration: "4 hours",
          resources: 12,
          completed: false,
        },
      ],
    },
    {
      id: 4,
      title: "Full Stack Integration",
      level: "Intermediate to Advanced",
      duration: "6-8 weeks",
      description: "Combine frontend and backend skills to build complete applications and deploy them.",
      completed: false,
      modules: [
        {
          title: "Full Stack Project",
          type: "project",
          duration: "20 hours",
          resources: 25,
          completed: false,
        },
        {
          title: "Testing & Debugging",
          type: "video",
          duration: "3 hours",
          resources: 8,
          completed: false,
        },
        {
          title: "Deployment & DevOps",
          type: "video",
          duration: "4 hours",
          resources: 10,
          completed: false,
        },
      ],
    },
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="h-4 w-4" />
      case "project":
        return <BookOpen className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const completedStages = stages.filter((stage) => stage.completed).length
  const progressPercentage = (completedStages / stages.length) * 100

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/roadmaps" className="inline-flex items-center text-yellow-600 hover:text-yellow-800 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Roadmaps
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-start justify-between mb-4">
                <Badge variant="secondary">{roadmap.category}</Badge>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                  <span className="font-semibold">{roadmap.rating}</span>
                  <span className="text-gray-500 ml-1">({roadmap.students.toLocaleString()} students)</span>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">{roadmap.title}</h1>
              <p className="text-lg text-gray-600 mb-6">{roadmap.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {roadmap.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <Clock className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-500">Duration</div>
                  <div className="font-semibold">{roadmap.duration}</div>
                </div>
                <div>
                  <Users className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-500">Students</div>
                  <div className="font-semibold">{roadmap.students.toLocaleString()}</div>
                </div>
                <div>
                  <BookOpen className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-500">Level</div>
                  <div className="font-semibold">{roadmap.level}</div>
                </div>
                <div>
                  <Star className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-500">Rating</div>
                  <div className="font-semibold">{roadmap.rating}/5</div>
                </div>
              </div>
            </div>

            {/* Learning Path Timeline */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Path</h2>

              <div className="space-y-8">
                {stages.map((stage, index) => (
                  <div key={stage.id} className="relative">
                    {/* Timeline Line */}
                    {index < stages.length - 1 && (
                      <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-200"></div>
                    )}

                    <div className="flex items-start space-x-4">
                      {/* Stage Number */}
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                          stage.completed ? "bg-green-500" : "bg-yellow-500"
                        }`}
                      >
                        {stage.completed ? <CheckCircle className="h-6 w-6" /> : <span>{index + 1}</span>}
                      </div>

                      {/* Stage Content */}
                      <div className="flex-1">
                        <Card className={`${stage.completed ? "border-green-200 bg-green-50" : ""}`}>
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-xl">{stage.title}</CardTitle>
                              <Badge variant={stage.completed ? "default" : "secondary"}>{stage.level}</Badge>
                            </div>
                            <CardDescription className="text-base">{stage.description}</CardDescription>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="h-4 w-4 mr-1" />
                              {stage.duration}
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              {stage.modules.map((module, moduleIndex) => (
                                <div
                                  key={moduleIndex}
                                  className="flex items-center justify-between p-3 bg-white rounded-lg border"
                                >
                                  <div className="flex items-center space-x-3">
                                    {module.completed ? (
                                      <CheckCircle className="h-5 w-5 text-green-500" />
                                    ) : (
                                      <Circle className="h-5 w-5 text-gray-400" />
                                    )}
                                    {getTypeIcon(module.type)}
                                    <div>
                                      <div className="font-medium">{module.title}</div>
                                      <div className="text-sm text-gray-500">
                                        {module.duration} • {module.resources} resources
                                      </div>
                                    </div>
                                  </div>
                                  <Button variant="ghost" size="sm">
                                    <ExternalLink className="h-4 w-4" />
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Card */}
            <Card>
              <CardHeader>
                <CardTitle>Your Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Overall Progress</span>
                      <span>{Math.round(progressPercentage)}%</span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                  </div>
                  <div className="text-sm text-gray-600">
                    {completedStages} of {stages.length} stages completed
                  </div>
                  <Button className="w-full">Continue Learning</Button>
                </div>
              </CardContent>
            </Card>

            {/* Course Info */}
            <Card>
              <CardHeader>
                <CardTitle>Course Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Prerequisites</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {roadmap.prerequisites.map((prereq, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        {prereq}
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">What You'll Learn</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {roadmap.outcomes.slice(0, 4).map((outcome, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Instructor */}
            <Card>
              <CardHeader>
                <CardTitle>Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-yellow-600 font-semibold">CO</span>
                  </div>
                  <div>
                    <div className="font-semibold">{roadmap.instructor}</div>
                    <div className="text-sm text-gray-500">Senior Full Stack Developer</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
