export default function ClassesPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-black mb-12 text-center">Our Classes</h1>
        
        <div className="space-y-12">
          {/* Junior Primary Preparation */}
          <section id="junior-primary" className="border-b border-gray-200 pb-12">
            <h2 className="text-3xl font-semibold text-black mb-6">JUNIOR PRIMARY PREPARATION</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <h3 className="text-xl font-semibold text-black mb-3">Year 1-2 Mathematical Foundations Classes</h3>
              <p className="text-gray-700 leading-relaxed">
              These classes are designed for young children in Years 1 and 2 to develop fundamental mathematical skills, such as understanding numbers, the four mathematical operations and their broader applications. All mathematical skills will be covered throughout the year, extending from numbers to geometry to probability. Students in these classes will be well equipped for our primary school maths classes in future.
              </p>
            </div>
          </section>

          {/* Primary Preparation */}
          <section id="primary" className="border-b border-gray-200 pb-12">
            <h2 className="text-3xl font-semibold text-black mb-6">PRIMARY PREPARATION</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              These classes are suitable for students from Years 3 to 6 of all skill levels.
              <span className="italic">Students will be assessed in order to arrange a class that is most suitable for them - our classes are graded based on skill level rather than year level for the best possible educational experience.</span>
            </p>

            <div className="space-y-8">
              {/* Primary School Maths */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-black mb-4">Primary School Maths Classes</h3>
                
                <div className="ml-4 space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-2">A Grade Classes</h4>
                    <p className="text-gray-700 leading-relaxed">
                    Our A grade classes are for students who have demonstrated extensive knowledge of Mathematics and non-verbal Thinking Skills. Classes and exercises focus on OC, Selective and Scholarship Exam preparation, as well as Mathematical Olympiad and competition problem solving. Students will learn skills to help them excel in Maths and non-verbal Thinking Skills for exams, scholarships and competitions.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-2">B Grade Classes</h4>
                    <p className="text-gray-700 leading-relaxed">
                    Our B grade classes are for students who need further practice to develop a thorough understanding of basic mathematical concepts in a broad range of topics as prescribed by the NSW mathematical syllabus. 
                    </p>
                  </div>
                </div>
              </div>

              {/* Primary School English */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-black mb-4">Primary School English Classes</h3>
                
                <div className="ml-4 space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-2">A Grade Classes</h4>
                    <p className="text-gray-700 leading-relaxed">
                    Our A grade classes are for students who have demonstrated extensive knowledge of Reading and verbal Thinking Skills. Classes will mainly focus on OC, Selective and Scholarship Exam preparation. Students will learn advanced reading techniques and Thinking Skills practice for all exam-style questions. Students will also be introduced to concepts that will help them understand the requirements for success in Humanities in Scholarship exams.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-2">B Grade Classes</h4>
                    <p className="text-gray-700 leading-relaxed">
                    Our B grade classes are for students who need further help with basic English skills. These classes are designed to build understanding with the general rules of spelling, grammar, punctuation and vocabulary. These classes will also teach the fundamental skills for Reading skills and in accordance with the NSW English syllabus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* OC Preparation */}
          <section id="oc" className="border-b border-gray-200 pb-12">
            <h2 className="text-3xl font-semibold text-black mb-6">OC PREPARATION</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                Our OC (Opportunity Class) preparation classes are designed for students aiming to excel in Opportunity Class entry examinations. These specialized classes focus on the key areas tested in OC exams.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Mathematics & Non-Verbal Thinking Skills</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Students in our A grade Primary School Maths classes receive focused training on OC exam preparation. Classes and exercises emphasize Mathematical Olympiad and competition problem solving, along with non-verbal Thinking Skills essential for OC success.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Reading & Verbal Thinking Skills</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our A grade Primary School English classes provide advanced reading techniques and Thinking Skills practice for all OC exam-style questions. Students learn the specific skills needed to excel in the reading comprehension and thinking skills components of the OC exam.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Selective + Scholarships Preparation */}
          <section id="selective" className="border-b border-gray-200 pb-12">
            <h2 className="text-3xl font-semibold text-black mb-6">SELECTIVE + SCHOLARSHIPS PREPARATION</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                Our comprehensive preparation programs are designed for students aiming for Selective School entry and private scholarship examinations. These advanced classes build on the foundation of our A grade Primary School classes.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Mathematics & Non-Verbal Thinking Skills</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Students receive intensive training in Selective and Scholarship Exam preparation, focusing on Mathematical Olympiad and competition problem solving. The curriculum helps students excel in Maths and non-verbal Thinking Skills specifically required for Selective School and scholarship examinations.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Reading, Verbal Thinking Skills & Humanities</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our English classes focus on Selective and Scholarship Exam preparation, teaching advanced reading techniques and Thinking Skills practice for all exam-style questions. Students are introduced to concepts that help them understand the requirements for success in Humanities in Scholarship exams.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Writing Skills</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Writing classes teach students the fundamental skills of writing for exams. Students learn about important points that must be incorporated to communicate ideas in formal writing, suitable structure and writing etiquette for all text types assessed in Selective School and Scholarship exams.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Junior High Preparation */}
          <section id="junior-high" className="pb-12">
            <h2 className="text-3xl font-semibold text-black mb-6">JUNIOR HIGH PREPARATION</h2>
            <div className="space-y-6">
              {/* High School Mathematics Preparation */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-black mb-4">High School Mathematics Preparation Classes</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These classes are suitable for students in Years 6 to 8, who are looking for the best possible preparation for success in junior high school mathematics.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  These classes are designed to teach the essential mathematical skills required to succeed in high school. There is a strong emphasis on practice and perfection in order for students to feel confident with concepts like directed numbers, algebra and geometric techniques. Classes will focus on preparation for term exams and knowledge as prescribed by the NSW mathematics syllabus.
                </p>
              </div>

              {/* Writing Classes */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-black mb-4">Writing Classes</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These classes are suitable for students in Years 4 to 7, who are looking to improve on their written communication skills.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  These classes are designed to teach students the fundamental skills of writing. Students are taught about the important points that must be incorporated in order to communicate their ideas in formal writing for exams, and will learn about suitable structure and writing etiquette for all sorts of text types that will be assessed in the Selective School and Scholarship exams. Students in higher grades will also learn about different texts to prepare them for creative and essay writing in high school.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
