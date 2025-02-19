import React, { useState } from 'react';
import {
  TrendingUp,
  Users,
  Target,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  ChevronDown,
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element === null){
        console.error(`Element with id ${sectionId} not found`)
        return;
    }
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="ml-2 text-xl font-bold text-gray-900">Growth Leader</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Marketing Philosophy', 'Contact'].map((item) => (
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
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Hi, I'm Jegan
        </h1>
        <h1 className="text-4xl font-bold text-gray-700 mb-4">
            Growth Marketing Leader | Scaling Businesses and Building High-Performing Teams
        </h1>
        <h2 className="text-2xl text-gray-600 mb-8">
            Driving 10x+ Growth for Leading Tech Companies
        </h2>
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

      {/* About Me Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              I'm a passionate growth marketing leader with a knack for turning innovative ideas into tangible results. Here are a few things that define my approach:
            </p>
            <ul className="list-disc pl-5 space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Data-Driven Strategist:</span> I believe in leveraging data to make informed decisions, optimizing campaigns for maximum impact and ROI.
              </li>
              <li>
                <span className="font-semibold">Team Builder & Mentor:</span> I thrive on building and leading high-performing teams, fostering a culture of collaboration and continuous learning.
              </li>
              <li>
                <span className="font-semibold">Customer-Centric Approach:</span> Understanding the customer journey is paramount. I focus on creating experiences that resonate with users and drive long-term engagement.
              </li>
                <li>
                <span className="font-semibold">Proven Results</span> Drove 200% increase in revenue through strategic growth initiatives and optimization of marketing channels.
              </li>
              <li>
                <span className="font-semibold">Adaptability & Innovation:</span> The marketing landscape is constantly evolving. I embrace change and continuously seek out new strategies and technologies to stay ahead of the curve.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-200"></div>

            {/* Experience items */}
            <div className="space-y-12">
              {/* Current Role */}
              <div className="relative">
                <div className="flex items-center mb-4 md:justify-center">
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white"></div>
                  <div className="ml-16 md:ml-0 md:absolute md:left-[52%] text-sm text-indigo-600 font-semibold">
                    Present
                  </div>
                </div>
                <div className="ml-16 md:ml-0 md:w-[45%] bg-white p-6 rounded-lg shadow-sm md:relative">
                  <div className="flex items-start">
                    <Briefcase className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
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
              </div>

              {/* Previous Role 1 */}
              <div className="relative">
                <div className="flex items-center mb-4 md:justify-center">
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-400 rounded-full border-4 border-white"></div>
                  <div className="ml-16 md:ml-0 md:absolute md:right-[52%] text-sm text-indigo-600 font-semibold">
                    2022
                  </div>
                </div>
                <div className="ml-16 md:ml-0 md:w-[45%] bg-white p-6 rounded-lg shadow-sm md:relative md:left-[52%]">
                  <div className="flex items-start">
                    <Briefcase className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
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
              </div>

              {/* Previous Role 2 */}
              <div className="relative">
                <div className="flex items-center mb-4 md:justify-center">
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-300 rounded-full border-4 border-white"></div>
                  <div className="ml-16 md:ml-0 md:absolute md:left-[52%] text-sm text-indigo-600 font-semibold">
                    2019
                  </div>
                </div>
                <div className="ml-16 md:ml-0 md:w-[45%] bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <Briefcase className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
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
                      {/* Previous Role 3 */}
              <div className="relative">
                <div className="flex items-center mb-4 md:justify-center">
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-300 rounded-full border-4 border-white"></div>
                  <div className="ml-16 md:ml-0 md:absolute md:right-[52%] text-sm text-indigo-600 font-semibold">
                    2017
                  </div>
                </div>
                <div className="ml-16 md:ml-0 md:w-[45%] bg-white p-6 rounded-lg shadow-sm md:relative md:left-[52%]">
                  <div className="flex items-start">
                    <Briefcase className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">Growth Marketing Manager</h3>
                      <p className="text-gray-600">Digital Solutions Inc • Dec 2015 - Dec 2017</p>
                      <ul className="mt-4 space-y-2 text-gray-600">
                        <li>• Spearheaded growth initiatives across multiple product lines</li>
                        <li>• Increased conversion rates by 85% through A/B testing</li>
                        <li>• Managed successful product launches and campaigns</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
                            {/* Previous Role 4 */}
              <div className="relative">
                <div className="flex items-center mb-4 md:justify-center">
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-300 rounded-full border-4 border-white"></div>
                  <div className="ml-16 md:ml-0 md:absolute md:left-[52%] text-sm text-indigo-600 font-semibold">
                    2015
                  </div>
                </div>
                <div className="ml-16 md:ml-0 md:w-[45%] bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <Briefcase className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">Growth Marketing Manager</h3>
                      <p className="text-gray-600">Digital Solutions Inc • Dec 2013 - Dec 2015</p>
                      <ul className="mt-4 space-y-2 text-gray-600">
                        <li>• Spearheaded growth initiatives across multiple product lines</li>
                        <li>• Increased conversion rates by 85% through A/B testing</li>
                        <li>• Managed successful product launches and campaigns</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

        {/* Previous Role 5 */}
              <div className="relative">
                <div className="flex items-center mb-4 md:justify-center">
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-300 rounded-full border-4 border-white"></div>
                  <div className="ml-16 md:ml-0 md:absolute md:right-[52%] text-sm text-indigo-600 font-semibold">
                    2013
                  </div>
                </div>
                <div className="ml-16 md:ml-0 md:w-[45%] bg-white p-6 rounded-lg shadow-sm md:relative md:left-[52%]">
                  <div className="flex items-start">
                    <Briefcase className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">Growth Marketing Manager</h3>
                      <p className="text-gray-600">Digital Solutions Inc • Dec 2011 - Dec 2013</p>
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
          </div>
        </div>
      </section>



      {/* Marketing Philosophy Section */}
      <section id="marketing-philosophy" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Marketing Philosophy</h2>
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
