import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <Link href="/" className="flex items-center space-x-4">
            <div className="flex flex-col items-center space-y-1">
              {/* Logos */}
              <Image src="/images/logo1.jpeg" alt="NS EDU Logo 1" width={60} height={60} className="object-contain" />
              {/* <Image src="/images/logo2.jpeg" alt="NS EDU Logo 2" width={120} height={120} className="object-contain" /> */} {/* TODO: too small to see */}
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-black">NEXT STEP EDUCATION</span>
              <span className="text-sm text-gray-600">方法补习班</span>
            </div>
          </Link>
          
          {/* Navigation links */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="relative text-gray-700 hover:text-black transition-all duration-300 ease-in-out py-2 px-1 group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link 
              href="/about" 
              className="relative text-gray-700 hover:text-black transition-all duration-300 ease-in-out py-2 px-1 group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link 
              href="/classes" 
              className="relative text-gray-700 hover:text-black transition-all duration-300 ease-in-out py-2 px-1 group"
            >
              Classes
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link 
              href="/resources" 
              className="relative text-gray-700 hover:text-black transition-all duration-300 ease-in-out py-2 px-1 group"
            >
              Resources
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link 
              href="/contact" 
              className="relative text-gray-700 hover:text-black transition-all duration-300 ease-in-out py-2 px-1 group"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

