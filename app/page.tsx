import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Briefcase, Heart, Wrench, Star, Users, BookOpen, Award } from "lucide-react"

export default function HomePage() {
  const industries = [
    {
      icon: Code,
      title: "Technology",
      description: "Web development, mobile apps, data science, and more",
      courses: 45,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Briefcase,
      title: "Business",
      description: "Entrepreneurship, marketing, finance, and management",
      courses: 32,
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Nursing, pharmacy, medical technology, and wellness",
      courses: 28,
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Wrench,
      title: "Skilled Trades",
      description: "Plumbing, electrical work, carpentry, and mechanics",
      courses: 24,
      color: "bg-orange-100 text-orange-600",
    },
  ]

  const testimonials = [
    {
      name: "Adaora Okafor",
      role: "Web Developer",
      content:
        "A19 Trade School helped me transition from accounting to tech. The structured roadmaps made learning programming less overwhelming.",
      rating: 5,
    },
    {
      name: "Ibrahim Musa",
      role: "Small Business Owner",
      content:
        "The business courses here are practical and relevant to the Nigerian market. I've grown my tailoring business significantly.",
      rating: 5,
    },
    {
      name: "Funmi Adebayo",
      role: "Nursing Student",
      content:
        "The healthcare resources are comprehensive and helped me excel in my nursing program. Highly recommended!",
      rating: 5,
    },
  ]

  const stats = [
    { icon: Users, value: "10,000+", label: "Active Learners" },
    { icon: BookOpen, value: "500+", label: "Learning Resources" },
    { icon: Award, value: "50+", label: "Career Paths" },
    { icon: Star, value: "4.9", label: "Average Rating" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 via-white to-green-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Learn any skill, any time.{" "}
              <span className="text-yellow-600">Curated learning paths</span> made for Nigerians.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore structured roadmaps, free resources, and community-taught courses designed specifically for the
              Nigerian context and job market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/roadmaps">
                <Button size="lg" className="text-lg px-8 py-3">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/roadmaps">
                <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
                  Browse Roadmaps
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-yellow-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Industries */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Learning Paths</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover career paths that are in high demand in Nigeria's growing economy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 rounded-2xl ${industry.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <industry.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{industry.title}</CardTitle>
                  <CardDescription className="text-center">{industry.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary" className="mb-4">
                    {industry.courses} courses available
                  </Badge>
                  <Link href="/roadmaps">
                    <Button variant="ghost" className="w-full group-hover:bg-yellow-50">
                      Explore Path
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from learners who have transformed their careers with A19 Trade School
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Join thousands of Nigerians who are already building their future with A19 Trade School
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/roadmaps">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Start Learning Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-yellow-600 bg-transparent"
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
