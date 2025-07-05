import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  BookOpen,
  Users,
  Target,
  Heart,
  Globe,
  Award,
  TrendingUp,
  Lightbulb,
  HandHeart,
  ArrowRight,
} from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: BookOpen,
      title: "Quality Education",
      description:
        "We believe everyone deserves access to high-quality, relevant educational content that can transform their lives and careers.",
    },
    {
      icon: Users,
      title: "Community-Driven",
      description:
        "Our platform thrives on the collective knowledge and experience of educators, professionals, and learners across Nigeria.",
    },
    {
      icon: Globe,
      title: "Local Relevance",
      description:
        "We focus on skills and knowledge that are directly applicable to the Nigerian job market and economic landscape.",
    },
    {
      icon: Heart,
      title: "Inclusive Learning",
      description:
        "We're committed to making education accessible to all, regardless of background, location, or economic status.",
    },
  ]

  const team = [
    {
      name: "Chinedu Okoro",
      role: "Founder & CEO",
      bio: "Former software engineer with 10+ years experience in EdTech. Passionate about democratizing education in Africa.",
      avatar: "CO",
    },
    {
      name: "Adaora Okafor",
      role: "Head of Content",
      bio: "Educational consultant and curriculum designer. Expert in creating engaging learning experiences.",
      avatar: "AO",
    },
    {
      name: "Ibrahim Musa",
      role: "Community Manager",
      bio: "Digital marketing specialist focused on building vibrant learning communities across Nigeria.",
      avatar: "IM",
    },
    {
      name: "Funmi Adebayo",
      role: "Product Designer",
      bio: "UX/UI designer passionate about creating intuitive and accessible educational platforms.",
      avatar: "FA",
    },
  ]

  const stats = [
    { icon: Users, value: "10,000+", label: "Active Learners" },
    { icon: BookOpen, value: "500+", label: "Learning Resources" },
    { icon: Award, value: "50+", label: "Career Paths" },
    { icon: TrendingUp, value: "85%", label: "Success Rate" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 via-white to-green-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Empowering Nigeria's <span className="text-yellow-600">Next Generation</span> of Learners
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              A19 Trade School is on a mission to democratize quality education and create pathways to economic opportunity for
              every Nigerian.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/roadmaps">
                <Button size="lg" className="text-lg px-8 py-3">
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/upload">
                <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
                  Become an Educator
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                We're building Nigeria's most comprehensive educational platform, connecting learners with the skills
                they need to thrive in today's economy. Our goal is to bridge the gap between traditional education and
                practical, job-ready skills.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Through structured learning paths, community-driven content, and mentorship opportunities, we're
                creating a new model of education that's accessible, affordable, and aligned with market needs.
              </p>
              <div className="flex items-center space-x-4">
                <Target className="h-8 w-8 text-yellow-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Our Goal</h3>
                  <p className="text-gray-600">Skill 1 million Nigerians by 2030</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 to-green-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at A19 Trade School
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-yellow-600" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate educators and technologists working to transform education in Nigeria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-yellow-600 font-bold text-xl">{member.avatar}</span>
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <Badge variant="secondary">{member.role}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Sections */}
      <section className="py-20 bg-yellow-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* For Learners */}
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Lightbulb className="h-8 w-8" />
                  <CardTitle className="text-2xl">For Learners</CardTitle>
                </div>
                <CardDescription className="text-yellow-100">
                  Ready to transform your career and unlock new opportunities?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-yellow-100">
                  <li>• Access 500+ high-quality learning resources</li>
                  <li>• Follow structured career roadmaps</li>
                  <li>• Join a community of 10,000+ learners</li>
                  <li>• Earn certificates and build your portfolio</li>
                </ul>
                <Link href="/roadmaps">
                  <Button variant="secondary" className="w-full">
                    Start Learning Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* For Educators */}
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <HandHeart className="h-8 w-8" />
                  <CardTitle className="text-2xl">For Educators</CardTitle>
                </div>
                <CardDescription className="text-yellow-100">
                  Share your expertise and make a lasting impact on Nigeria's future
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-yellow-100">
                  <li>• Reach thousands of eager learners</li>
                  <li>• Upload courses, videos, and resources</li>
                  <li>• Build your reputation as an expert</li>
                  <li>• Contribute to Nigeria's development</li>
                </ul>
                <Link href="/upload">
                  <Button variant="secondary" className="w-full">
                    Become an Educator
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Have questions, suggestions, or want to partner with us? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              Contact Us
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
