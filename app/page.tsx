import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <div className="relative mb-6">
                <Image 
                  src="/images/logo1.jpeg" 
                  alt="Next Step Education Logo" 
                  width={120} 
                  height={120} 
                  className="object-contain"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-2">
                NEXT STEP EDUCATION
              </h1>
              <p className="text-xl text-gray-600 mb-6">方法补习班</p>
              <div className="space-y-2 text-sm text-gray-700">
                <p>23/16-20 Henley Road, Homebush West NSW 2140</p>
                <p>PH: <a href="tel:0433928819" className="text-blue-600 hover:underline">0433928819</a></p>
                <p>Web: <a href="https://nsedu.com.au" className="text-blue-600 hover:underline">nsedu.com.au</a></p>
                <p>Email: <a href="mailto:jimmy@nsedu.com.au" className="text-blue-600 hover:underline">jimmy@nsedu.com.au</a></p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <Image 
                src="/images/homepage.png" 
                alt="Next Step Education" 
                width={800} 
                height={600} 
                className="w-full h-auto rounded-lg object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-black rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-black rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 animate-fade-in">
              About Us
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8 animate-slide-in"></div>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-fade-in-up animate-delay-100">
              <div className="text-4xl font-bold text-black mb-2">15+</div>
              <div className="text-gray-600 font-semibold">Years of Experience</div>
              <div className="text-sm text-gray-500 mt-2">Proven track record in education</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-fade-in-up animate-delay-200">
              <div className="text-4xl font-bold text-black mb-2">OC & Selective</div>
              <div className="text-gray-600 font-semibold">Success</div>
              <div className="text-sm text-gray-500 mt-2">Outstanding exam results</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-fade-in-up animate-delay-300">
              <div className="text-4xl font-bold text-black mb-2">Math Olympiads</div>
              <div className="text-gray-600 font-semibold"> Focus</div>
              <div className="text-sm text-gray-500 mt-2">Competition excellence</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-8 border border-gray-100 animate-fade-in-up animate-delay-400">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Next Step Education is a private education specialist with over 15 years experience ensuring students' academic successes in Mathematics, English, Thinking Skills and Mathematical Olympiads. We have a proven track record with Opportunity Class, Selective School and Private Scholarship results for students. We are also one of the leading private education providers with a strong focus on Mathematical Olympiads, Problem Solving and Mathematics Competitions. Our focus is delivering the best educational experience to students of all levels in primary school and junior high school.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center animate-fade-in-up animate-delay-500">
            <Link 
              href="/about" 
              className="inline-block px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">Our Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-black mb-3">JUNIOR PRIMARY PREPARATION</h3>
              <p className="text-gray-600 text-sm mb-4">
              Year 1-2 Mathematical Foundations Classes - Foundation classes for young learners to develop essential skills and prepare for primary school.
              </p>
              <Link href="/classes#junior-primary" className="text-blue-600 hover:underline text-sm">
                Learn more →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-black mb-3">PRIMARY PREPARATION</h3>
              <p className="text-gray-600 text-sm mb-4">
              These classes are suitable for students from Years 3 to 6 of all skill levels. Students will be assessed in order to arrange a class that is most suitable for them.
              </p>
              <Link href="/classes#primary" className="text-blue-600 hover:underline text-sm">
                Learn more →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-black mb-3">OC PREPARATION</h3>
              <p className="text-gray-600 text-sm mb-4">
                Specialized training for Opportunity Class entry exams with proven success rates.
              </p>
              <Link href="/classes#oc" className="text-blue-600 hover:underline text-sm">
                Learn more →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-black mb-3">SELECTIVE + SCHOLARSHIPS PREPARATION</h3>
              <p className="text-gray-600 text-sm mb-4">
                Advanced preparation for Selective School entry and private scholarship examinations.
              </p>
              <Link href="/classes#selective" className="text-blue-600 hover:underline text-sm">
                Learn more →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-black mb-3">JUNIOR HIGH PREPARATION</h3>
              <p className="text-gray-600 text-sm mb-4">
              These classes are suitable for students in Years 4 to 8, who are looking for the best possible preparation for success in junior high school English and mathematics.
              </p>
              <Link href="/classes#junior-high" className="text-blue-600 hover:underline text-sm">
                Learn more →
              </Link>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link 
              href="/classes" 
              className="inline-block px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors"
            >
              View All Classes
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center">Resources</h2>
          <p className="text-gray-700 text-center mb-8">
            Access helpful resources, study materials, and educational links to support your learning journey.
          </p>
          <div className="text-center">
            <Link 
              href="/resources" 
              className="inline-block px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors"
            >
              Explore Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center">Contact Us</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-black mb-4">Location</h3>
                <p className="text-gray-600">23/16-20 Henley Road<br />Homebush West NSW 2140</p>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-4">Contact Information</h3>
                <p className="text-gray-600">
                  Phone: <a href="tel:0433928819" className="text-blue-600 hover:underline">0433928819</a><br />
                  Email: <a href="mailto:jimmy@nsedu.com.au" className="text-blue-600 hover:underline">jimmy@nsedu.com.au</a><br />
                  Website: <a href="https://nsedu.com.au" className="text-blue-600 hover:underline">nsedu.com.au</a>
                </p>
              </div>
            </div>
            <div className="text-center">
              <Link 
                href="/contact" 
                className="inline-block px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors"
              >
                Send Us a Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
