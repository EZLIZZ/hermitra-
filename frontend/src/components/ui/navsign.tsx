import Link from "next/link";

export default function Navsign() {
  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img src="/photos/logo.png" className="h-16" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/learn-more"
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Contact
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                href="/signin"
                className="text-gray-700 hover:text-pink-600 transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
