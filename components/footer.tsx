import Link from "next/link"
import { BookOpen, Facebook, Twitter, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-yellow-400" />
              <span className="text-xl font-bold">A19 Trade School</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering Nigerians with structured learning paths and quality educational resources. Learn any skill,
              any time, with community support.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-yellow-400 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-yellow-400 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-yellow-400 cursor-pointer" />
              <Mail className="h-5 w-5 text-gray-400 hover:text-yellow-400 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/roadmaps" className="text-gray-300 hover:text-white">
                  Explore Roadmaps
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-white">
                  Resource Library
                </Link>
              </li>
              <li>
                <Link href="/upload" className="text-gray-300 hover:text-white">
                  Upload Resources
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-gray-300 hover:text-white">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} A19 Trade School. All rights reserved. Made with ❤️ for Nigeria.
          </p>
        </div>
      </div>
    </footer>
  )
}
