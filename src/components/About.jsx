import { FaAward, FaUsers, FaCode, FaRocket, FaCoffee, FaBook } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: FaAward, label: "Years Experience", value: "5+" },
    { icon: FaCode, label: "Projects Completed", value: "50+" },
    { icon: FaUsers, label: "Happy Clients", value: "30+" },
    { icon: FaRocket, label: "Technologies", value: "20+" },
  ];

  const interests = [
    "Open Source Contributor",
    "Tech Blogger",
    "AI Enthusiast",
    "Hackathon Judge"
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800/50">
      <div className="container-custom">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Who am I?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              I'm a passionate Full Stack Developer with a strong foundation in modern web technologies. 
              I love creating elegant solutions to complex problems and continuously learning new technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              My journey in web development started 5 years ago, and since then I've worked with various 
              companies and startups, helping them build scalable and performant web applications.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <FaCoffee className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Mission</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">To build impactful applications that make a difference in people's lives.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <FaBook className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Philosophy</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Write clean, maintainable code and always keep learning.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-center hover:scale-105 transition-transform">
                  <stat.icon className="w-10 h-10 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">💡 Important Notice</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                What is written here is just a sample text to show how the about section will look like. You can replace it with your own content to make it more personalized and unique to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;