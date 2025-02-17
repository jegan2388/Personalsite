import React, { useState } from 'react';
import { 
  Rocket, 
  TrendingUp, 
  Users, 
  Target, 
  Award,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  ChevronDown,
  Brain,
  LineChart,
  Zap
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Rocket className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Growth Leader</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Achievements', 'Vision', 'Insights', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium
                    ${activeSection === item.toLowerCase() ? 'text-indigo-600' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Driving Exponential Growth
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Strategic Growth Marketing Leader with 10+ years of experience in scaling businesses, 
            driving revenue growth, and building high-performing teams.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 
                transition duration-300 flex items-center"
            >
              Let's Connect
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <TrendingUp className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Growth Strategy</h3>
              <p className="text-gray-600">
                Expertise in developing and executing comprehensive growth strategies
                with proven track record of scaling businesses from early stage to maturity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Users className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Team Leadership</h3>
              <p className="text-gray-600">
                Successfully built and led cross-functional teams of 15+ members,
                fostering a culture of innovation and continuous improvement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Target className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data-Driven</h3>
              <p className="text-gray-600">
                Strong analytical mindset with experience in leveraging data to optimize
                marketing performance and drive business decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <Briefcase className="h-6 w-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Head of Growth Marketing</h3>
                  <p className="text-gray-600">Acme Technologies • Feb 2022 - Present</p>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li>• Led growth initiatives resulting in 150% YoY user acquisition increase</li>
                    <li>• Managed $5M+ annual marketing budget across multiple channels</li>
                    <li>• Built and scaled a team of 15 growth marketers</li>
                    <li>• Implemented data-driven marketing strategies resulting in 40% improvement in ROI</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <Briefcase className="h-6 w-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Senior Growth Marketing Manager</h3>
                  <p className="text-gray-600">Growth Co • Jan 2021 - Feb 2022</p>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li>• Developed and executed growth strategy for B2B SaaS product</li>
                    <li>• Achieved 200% increase in qualified leads through optimization</li>
                    <li>• Led a team of 8 marketing specialists</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <Briefcase className="h-6 w-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Growth Marketing Manager</h3>
                  <p className="text-gray-600">Digital Solutions Inc • Dec 2017 - Dec 2019</p>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li>• Spearheaded growth initiatives across multiple product lines</li>
                    <li>• Increased conversion rates by 85% through A/B testing</li>
                    <li>• Managed successful product launches and campaigns</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Award className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Revenue Growth</h3>
              <p className="text-gray-600">
                Drove 200% increase in revenue through strategic growth initiatives
                and optimization of marketing channels.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <LineChart className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Performance Marketing</h3>
              <p className="text-gray-600">
                Achieved 40% improvement in marketing ROI through data-driven 
                optimization and strategic channel allocation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Zap className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Team Building</h3>
              <p className="text-gray-600">
                Built and scaled high-performing marketing teams from scratch,
                establishing processes for sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">My Vision</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <p className="text-gray-600 text-lg leading-relaxed">
              As a Head of Growth Marketing, my vision is to drive sustainable business 
              growth through innovative strategies, data-driven decision making, and 
              building high-performing teams. I believe in creating scalable marketing 
              systems that deliver consistent results while maintaining agility to adapt 
              to changing market conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Growth Marketing Insights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Brain className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">The Future of Growth Marketing</h3>
              <p className="text-gray-600">
                In my view, the future of growth marketing lies in the convergence of AI-driven 
                automation and human creativity. While AI tools will handle data analysis and 
                optimization, human insight will be crucial for strategy and innovation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Target className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Building Sustainable Growth</h3>
              <p className="text-gray-600">
                I believe sustainable growth comes from balancing rapid scaling with 
                strong fundamentals. This means focusing on customer retention alongside 
                acquisition and building robust systems that can scale efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Let's Connect</h2>
          <div className="flex justify-center space-x-6">
            <a href="mailto:your.email@example.com" 
              className="flex items-center text-gray-600 hover:text-indigo-600">
              <Mail className="h-6 w-6 mr-2" />
              Email
            </a>
            <a href="https://linkedin.com/in/yourprofile" 
              className="flex items-center text-gray-600 hover:text-indigo-600">
              <Linkedin className="h-6 w-6 mr-2" />
              LinkedIn
            </a>
            <a href="https://github.com/yourusername" 
              className="flex items-center text-gray-600 hover:text-indigo-600">
              <Github className="h-6 w-6 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 Growth Marketing Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;