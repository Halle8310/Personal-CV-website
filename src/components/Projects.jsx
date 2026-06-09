import { useState } from 'react';
import { FiExternalLink, FiGithub, FiSearch, FiStar, FiGitBranch } from 'react-icons/fi';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with real-time inventory management, payment integration, and admin dashboard. Features include product search, cart, checkout, and order tracking.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Tailwind"],
      category: "fullstack",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true,
      stars: 45,
      forks: 12
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with drag-and-drop functionality, real-time updates, team features, and analytics dashboard for productivity tracking.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
      technologies: ["React", "Firebase", "Tailwind CSS", "DnD Kit", "Chart.js"],
      category: "frontend",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true,
      stars: 38,
      forks: 8
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Interactive dashboard for visualizing business metrics with customizable widgets, real-time data updates, and export functionality.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL", "Socket.io"],
      category: "frontend",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
      stars: 27,
      forks: 6
    },
    {
      id: 4,
      title: "Chat Application",
      description: "Real-time chat application with video calls, file sharing, end-to-end encryption, and message reactions.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop",
      technologies: ["React", "Socket.io", "WebRTC", "Node.js", "Redis"],
      category: "fullstack",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
      stars: 52,
      forks: 15
    },
    {
      id: 5,
      title: "Weather App",
      description: "Beautiful weather application with detailed forecasts, interactive maps, weather alerts, and location-based recommendations.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API"],
      category: "frontend",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
      stars: 31,
      forks: 7
    },
    {
      id: 6,
      title: "REST API Gateway",
      description: "Scalable API gateway with rate limiting, authentication, request logging, and load balancing capabilities.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      technologies: ["Node.js", "Express", "Redis", "JWT", "Docker"],
      category: "backend",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
      stars: 43,
      forks: 11
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = projects
    .filter(project => filter === 'all' || project.category === filter)
    .filter(project => project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      project.description.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800/50">
      <div className="container-custom">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-6 py-2 rounded-full transition-all ${
                  filter === cat.value
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">No projects found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 animate-fade-in"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {project.featured && (
                    <span className="absolute top-4 right-4 px-2 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <FiStar size={14} />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiGitBranch size={14} />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                    >
                      <FiGithub size={16} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                    >
                      <FiExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;