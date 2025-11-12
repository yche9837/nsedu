export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-black mb-8">About Us</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Next Step Education is a private education specialist with over <strong className="text-black font-semibold">15 years experience</strong> ensuring students' academic successes in <strong className="text-black font-semibold">Mathematics, English, Thinking Skills and Mathematical Olympiads</strong>. We have a proven track record with <strong className="text-black font-semibold">Opportunity Class, Selective School and Private Scholarship results</strong> for students.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            We are also one of the leading private education providers with a strong focus on <strong className="text-black font-semibold">Mathematical Olympiads, Problem Solving and Mathematics Competitions</strong>. Our focus is delivering the best educational experience to students of all levels in <strong className="text-black font-semibold">Primary School and Junior High School</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

