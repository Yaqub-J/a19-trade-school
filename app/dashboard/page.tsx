import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Clock, Award, TrendingUp, Users, Upload, Eye, Download, Star, Calendar, Target } from "lucide-react"

export default function DashboardPage() {
  const user = {
    name: "Adaora Okafor",
    email: "adaora@example.com",
    role: "Student",
    joinDate: "January 2024",
    avatar: "AO",
  }

  const stats = [
    { icon: BookOpen, label: "Courses Enrolled", value: "8", color: "text-yellow-600" },
    { icon: Award, label: "Certificates Earned", value: "3", color: "text-green-600" },
    { icon: Clock, label: "Hours Learned", value: "124", color: "text-purple-600" },
    { icon: TrendingUp, label: "Learning Streak", value: "15 days", color: "text-orange-600" },
  ]

  const enrolledRoadmaps = [
    {
      id: 1,
      title: "Full Stack Web Development",
      progress: 65,
      nextLesson: "React State Management",
      timeSpent: "45 hours",
      category: "Technology",
      dueDate: "March 15, 2024",
    },
    {
      id: 2,
      title: "Digital Marketing Mastery",
      progress: 30,
      nextLesson: "Social Media Analytics",
      timeSpent: "18 hours",
      category: "Business",
      dueDate: "April 20, 2024",
    },
    {
      id: 3,
      title: "Data Science Fundamentals",
      progress: 15,
      nextLesson: "Python Basics",
      timeSpent: "8 hours",
      category: "Technology",
      dueDate: "May 10, 2024",
    },
  ]

  const recentActivity = [
    {
      type: "completed",
      title: "Completed JavaScript Fundamentals",
      course: "Full Stack Web Development",
      date: "2 hours ago",
    },
    {
      type: "started",
      title: "Started React Components",
      course: "Full Stack Web Development",
      date: "1 day ago",
    },
    {
      type: "certificate",
      title: "Earned HTML/CSS Certificate",
      course: "Web Development Basics",
      date: "3 days ago",
    },
    {
      type: "enrolled",
      title: "Enrolled in Digital Marketing",
      course: "Digital Marketing Mastery",
      date: "1 week ago",
    },
  ]

  const uploadedResources = [
    {
      id: 1,
      title: "JavaScript Best Practices Guide",
      type: "PDF",
      views: 1250,
      downloads: 890,
      rating: 4.8,
      uploadDate: "Jan 15, 2024",
    },
    {
      id: 2,
      title: "React Hooks Tutorial Series",
      type: "Video",
      views: 3400,
      downloads: 0,
      rating: 4.9,
      uploadDate: "Jan 10, 2024",
    },
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "completed":
        return <Award className="h-4 w-4 text-green-500" />
      case "started":
        return <BookOpen className="h-4 w-4 text-yellow-500" />
      case "certificate":
        return <Star className="h-4 w-4 text-yellow-500" />
      case "enrolled":
        return <Users className="h-4 w-4 text-purple-500" />
      default:
        return <BookOpen className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name}!</h1>
              <p className="text-gray-600 mt-1">Continue your learning journey and track your progress</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 font-semibold">{user.avatar}</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-semibold">{user.name}</div>
                <div className="text-sm text-gray-500">{user.role}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="learning" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="learning">My Learning</TabsTrigger>
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
            <TabsTrigger value="uploads">My Uploads</TabsTrigger>
          </TabsList>

          {/* Learning Tab */}
          <TabsContent value="learning" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Enrolled Roadmaps */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Continue Learning</CardTitle>
                    <CardDescription>Pick up where you left off in your enrolled roadmaps</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {enrolledRoadmaps.map((roadmap) => (
                      <div key={roadmap.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{roadmap.title}</h3>
                            <p className="text-sm text-gray-600">Next: {roadmap.nextLesson}</p>
                          </div>
                          <Badge variant="secondary">{roadmap.category}</Badge>
                        </div>

                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{roadmap.progress}%</span>
                          </div>
                          <Progress value={roadmap.progress} className="h-2" />
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {roadmap.timeSpent}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            Due {roadmap.dueDate}
                          </div>
                        </div>

                        <div className="mt-4">
                          <Link href={`/roadmaps/${roadmap.id}`}>
                            <Button className="w-full">Continue Learning</Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link href="/roadmaps">
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Browse Roadmaps
                      </Button>
                    </Link>
                    <Link href="/resources">
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <Eye className="h-4 w-4 mr-2" />
                        Explore Resources
                      </Button>
                    </Link>
                    <Link href="/upload">
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Resource
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Learning Goals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Target className="h-4 w-4 text-yellow-500 mr-2" />
                          <span className="text-sm">Weekly Goal</span>
                        </div>
                        <span className="text-sm font-semibold">12/15 hours</span>
                      </div>
                      <Progress value={80} className="h-2" />
                      <p className="text-xs text-gray-500">3 hours left to reach your weekly goal!</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your learning activity over the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                      <div className="flex-shrink-0 mt-1">{getActivityIcon(activity.type)}</div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900">{activity.title}</p>
                        <p className="text-sm text-gray-600">{activity.course}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Uploads Tab */}
          <TabsContent value="uploads">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>My Uploaded Resources</CardTitle>
                    <CardDescription>Resources you've shared with the community</CardDescription>
                  </div>
                  <Link href="/upload">
                    <Button>
                      <Upload className="h-4 w-4 mr-2" />
                      Upload New
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {uploadedResources.map((resource) => (
                    <div key={resource.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold">{resource.title}</h3>
                          <Badge variant="outline" className="mt-1">
                            {resource.type}
                          </Badge>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                          <span className="text-sm">{resource.rating}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {resource.views.toLocaleString()} views
                        </div>
                        {resource.downloads > 0 && (
                          <div className="flex items-center">
                            <Download className="h-4 w-4 mr-1" />
                            {resource.downloads.toLocaleString()} downloads
                          </div>
                        )}
                        <div className="text-right">{resource.uploadDate}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
