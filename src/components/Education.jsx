import { FaGraduationCap, FaCalendarAlt, FaAward, FaBookOpen } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      period: "2017 - 2019",
      location: "Stanford, CA",
      gpa: "3.9/4.0",
      achievements: [
        "Graduate Teaching Assistant for Web Development course (200+ students)",
        "Published research paper on Progressive Web Apps at IEEE Conference",
        "Member of the Dean's List for 4 consecutive semesters",
        "Recipient of Academic Excellence Scholarship"
      ],
      courses: ["Advanced Web Development", "Machine Learning", "Cloud Computing", "Database Systems"]
    },
    {
      id: 2,
      degree: "Bachelor of Engineering in Computer Science",
      school: "University of California, Berkeley",
      period: "2013 - 2017",
      location: "Berkeley, CA",
      gpa: "3.7/4.0",
      achievements: [
        "Lead developer for university's student portal used by 10,000+ students",
        "Winner of Hackathon 2016 - Best Web Application Award",
        "President of Coding Club - Organized 20+ workshops and events",
        "Graduated with Honors in Computer Science"
      ],
      courses: ["Data Structures", "Algorithms", "Operating Systems", "Computer Networks"]
    }
  ];

  const certifications = [
    { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2023", credential: "AWS-12345" },
    { name: "Meta Backend Developer Certificate", issuer: "Meta", year: "2022", credential: "META-67890" },
    { name: "Google Project Management", issuer: "Google", year: "2021", credential: "GOOG-11111" },
    { name: "React Advanced Patterns", issuer: "Frontend Masters", year: "2023", credential: "FM-22222" }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800/50">
      <div className="container-custom">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
              <FaGraduationCap className="text-blue-600" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 animate-slide-up">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">{edu.gpa}</span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{edu.school}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt size={14} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaAward size={14} />
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-400 text-sm flex items-start gap-2">
                          <span className="text-blue-600">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <FaBookOpen size={14} />
                      Relevant Courses:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
              <FaAward className="text-blue-600" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 hover:scale-105 transition-transform animate-slide-up">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{cert.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                    </div>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">{cert.year}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">Credential ID: {cert.credential}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">📚 Currently Learning</h4>
              <div className="flex flex-wrap gap-2">
                {["GraphQL", "Kubernetes", "WebAssembly", "Rust"].map((item, i) => (
                  <span key={i} className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;