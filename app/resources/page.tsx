export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-black mb-12">Resources</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Relevant Links</h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href="https://education.nsw.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  NSW Education
                </a>
              </li>
              <li>
                <a href="https://educationstandards.nsw.edu.au" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  NESA (NSW Education Standards Authority)
                </a>
              </li>
              <li>
                <a href="https://education.nsw.gov.au/public-schools/selective-high-schools-and-opportunity-classes" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  OC (Opportunity Class) Information
                </a>
              </li>
              <li>
                <a href="https://education.nsw.gov.au/public-schools/selective-high-schools-and-opportunity-classes/year-7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Selective Schools Information
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Study Materials</h2>
            <p className="text-gray-700">
              Study materials and resources will be available here. Check back soon for updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Online Learning Tools</h2>
            <p className="text-gray-700">
              Online learning tools and resources will be available here. Check back soon for updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Parent Resources</h2>
            <p className="text-gray-700">
              Resources for parents to support their children's learning journey will be available here. Check back soon for updates.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

