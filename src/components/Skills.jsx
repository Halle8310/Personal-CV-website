import { useState } from 'react';
import { FaCode, FaDatabase, FaCloud, FaLaptopCode, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Skills = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const skillCategories = [
    {
      name: "Frontend Development",
      icon: FaLaptopCode,
      skills: [
        { name: "React", level: 90, years: 4 },
        { name: "Vue.js", level: 75, years: 2 },
        { name: "TypeScript", level: 85, years: 3 },
        { name: "Tailwind CSS", level: 90, years: 3 },
        { name: "Next.js", level: 80, years: 2 }
      ]
    },
    {
      name: "Backend Development",
      icon: FaCode,
      skills: [
        { name: "Node.js", level: 88, years: 4 },
        { name: "Python/Django", level: 85, years: 3 },
        { name: "Express.js", level: 85, years: 3 },
        { name: "GraphQL", level: 75, years: 2 },
        { name: "REST APIs", level: 92, years: 5 }
      ]
    },
    {
      name: "Database",
      icon: FaDatabase,
      skills: [
        { name: "PostgreSQL", level: 85, years: 4 },
        { name: "MongoDB", level: 80, years: 3 },
        { name: "MySQL", level: 85, years: 4 },
        { name: "Redis", level: 70, years: 2 }
      ]
    },
    {
      name: "DevOps & Tools",
      icon: FaCloud,
      skills: [
        { name: "Docker", level: 75, years: 2 },
        { name: "AWS", level: 80, years: 3 },
        { name: "Git", level: 90, years: 5 },
        { name: "CI/CD", level: 75, years: 2 }
      ]
    }
  ];

  const toolsList = [
    "Git", "Docker", "Kubernetes", "Jenkins", "Jira", "Figma", 
    "Postman", "VS Code", "Linux", "Nginx", "Webpack", "Jest"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all animate-slide-up">
              <button
                onClick={() => setExpandedCategory(expandedCategory === catIndex ? null : catIndex)}
                className="w-full p-6 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <category.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.name}</h3>
                </div>
                {expandedCategory === catIndex ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              
              {(expandedCategory === catIndex || expandedCategory === null) && (
                <div className="px-6 pb-6 space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <div>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">({skill.years} years)</span>
                        </div>
                        <span className="text-blue-600 dark:text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-8 animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Tools & Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {toolsList.map((tool, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md text-gray-700 dark:text-gray-300 hover:scale-105 transition-transform cursor-pointer text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
          <h3 className="text-xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Problem Solving", "Team Collaboration", "Communication", "Time Management", 
              "Leadership", "Critical Thinking", "Adaptability", "Mentoring"].map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;