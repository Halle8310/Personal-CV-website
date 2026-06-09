import { MdWork, MdCalendarToday, MdLocationOn } from 'react-icons/md';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Tech Solutions Inc.",
      position: "Senior Full Stack Developer",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: [
        "Leading a team of 5 developers to build enterprise-level React applications serving 1M+ users",
        "Architecting scalable backend solutions using Node.js and PostgreSQL, improving performance by 40%",
        "Implementing CI/CD pipelines reducing deployment time from 2 hours to 15 minutes",
        "Mentoring junior developers and conducting code reviews for 10+ team members"
      ],
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Docker"]
    },
    {
      id: 2,
      company: "Digital Innovations",
      position: "Frontend Developer",
      period: "2020 - 2022",
      location: "New York, NY",
      description: [
        "Developed responsive web applications using React and Tailwind CSS for 20+ client projects",
        "Collaborated with designers to implement pixel-perfect UI components with 99% accuracy",
        "Optimized application performance achieving 95+ Lighthouse scores across all metrics",
        "Integrated REST APIs and managed state using Redux Toolkit and React Query"
      ],
      technologies: ["React", "Redux", "Tailwind CSS", "JavaScript", "Jest", "Figma"]
    },
    {
      id: 3,
      company: "StartUp Hub",
      position: "Junior Web Developer",
      period: "2019 - 2020",
      location: "Austin, TX",
      description: [
        "Built and maintained 15+ company websites using HTML, CSS, and JavaScript",
        "Implemented responsive designs ensuring cross-browser compatibility across all devices",
        "Collaborated in an Agile environment with daily standups and 2-week sprints",
        "Reduced page load time by 35% through code optimization and lazy loading"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className={`relative flex flex-col md:flex-row gap-8 items-start ${
                idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                
                <div className={`flex-1 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all animate-slide-up">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.position}</h3>
                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mt-1">
                          <MdWork size={16} />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <MdCalendarToday size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MdLocationOn size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start gap-2 text-sm">
                          <span className="text-blue-600 dark:text-blue-400 mt-1">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;