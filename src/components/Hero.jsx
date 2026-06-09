import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone, MdDownload } from 'react-icons/md';

const Hero = () => {
  const personalInfo = {
    name: "Halleluya Belay",
    title: "Full Stack Developer",
    location: "Addis Ababa, Ethiopia",
    email: "halebebiyo@gmail.com",
    phone: "+251983103644",
    github: "https://github.com/Halle8310",
    linkedin: "https://www.linkedin.com/in/halleluya-belay-48575737b/",
    bio: "Passionate Full Stack Developer with average years of experience building exceptional web applications. Specialized in React, Node.js, and cloud technologies."
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">
                Available for work
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6">
              {personalInfo.title}
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              {personalInfo.bio}
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <MdLocationOn size={18} />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <MdEmail size={18} />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <MdPhone size={18} />
                <span>{personalInfo.phone}</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-all hover:scale-105"
              >
                <FaGithub size={20} />
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105"
              >
                <FaLinkedin size={20} />
                LinkedIn
              </a>
              <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transition-all hover:scale-105">
                <MdDownload size={20} />
                Download CV
              </button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="flex-1 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src="src/assets/halle.jpg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;