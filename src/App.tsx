import React, { useState } from 'react';
import {
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
        <h1 className="text-4xl font-bold text-gray-500 mb-4">
            I craft marketing strategies that go beyond lead generation—building scalable, full-funnel growth engines that drive predictable growth, from awareness to conversion and long-term retention
        </h1>
        <h2 className="text-2xl text-gray-600 mb-8">
      
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
                      <h3 className="text-xl font-semibold">Sr. Demand Generation Manager</h3>
                      <p className="text-gray-600">ContactMonkey • Feb 2022 - Present</p>
                      <ul className="mt-4 space-y-2 text-gray-600">
                        <li>• Influenced $63Mn in pipeline by driving full-funnel marketing strategies—from demand creation to conversion optimization and sales acceleration</li>
                        <li>• Optimized lead nurturing with HubSpot, Salesloft, and Salesforce, increasing lead-to-opportunity conversion by 47%</li>
                        <li>• Refined lead scoring with sales, improving MQL-to-SQL by 23% and opp-to-trial conversion by 15%</li>
                        <li>• Ran 95+ A/B tests, boosting website conversion rates by 33% and improving funnel efficiency</li>
                        <li>• Implemented AI-driven workflows, enhancing efficiency in data analysis and content creation</li>
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
                      <h3 className="text-xl font-semibold">Manager - Marketing Analytics & PPC</h3>
                      <p className="text-gray-600">Scribendi • Jan 2021 - Feb 2022</p>
                      <ul className="mt-4 space-y-2 text-gray-600">
                        <li>• Identified key revenue drivers and built real-time Tableau dashboards, enabling data-driven decisions that increased revenue by 12.5%</li>
                        <li>• Optimized PPC campaigns across Google, Bing, and affiliates, improving ROAS by 17%</li>
                        <li>• Improved website conversion flow through rapid experimentation, increasing conversion rates by 22%</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

                {/* MBA Break */}
                <div className="relative">
                    <div className="flex items-center mb-4 md:justify-center">
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white"></div>
                    <div className="ml-16 md:ml-0 md:absolute md:left-[52%] text-sm text-green-600 font-semibold">
                        2019 - 2021
                    </div>
                </div>
                <div className="mx-auto w-full md:w-[90%] bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-center">MBA, McGill University</h3>
                    <p className="text-gray-600 text-center mb-4">Desautels Faculty of Management</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Capstone Project, Leading Canadian Bank – Analyzed credit adjudication processes, delivering insights to improve efficiency and decision quality.</li>
                    <li>Marketing Strategy, Bensadoun School – Designed a comprehensive outreach and recruitment strategy for the launch of the MMR program.</li>
                    <li>Consultant, Thinkr Consulting – Led two nonprofit projects, developing GTM and social media strategies to improve outreach and engagement</li>
                    <li>Product Management & PPC Intern, MoveMate – Enhanced PPC performance and streamlined website booking flow to improve conversions</li>
                    </ul>
                </div>
                </div>

              {/* Previous Role 2 */}
              <div className="relative">
                <div className="flex items-center mb-4 md:justify-center">
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-300 rounded-full border-4 border-white"></div>
                  <div className="ml-16 md:ml-0 md:absolute md:right-[52%] text-sm text-indigo-600 font-semibold">
                    2019
                  </div>
                </div>
                <div className="ml-16 md:ml-0 md:w-[45%] bg-white p-6 rounded-lg shadow-sm md:relative md:left-[52%]">
                  <div className="flex items-start">
                    <Briefcase className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">Freelance Marketing Consultant</h3>
                      <p className="text-gray-600"> • Dec 2017 - Present</p>
                      <ul className="mt-4 space-y-2 text-gray-600">
                        <li>• Worked on 8+ projects across SaaS, B2B services, and D2C, driving marketing and growth initiatives for startups and SMEs</li>
                        <li>• Led digital marketing & partnerships for A.R. Rahman’s One Heart Concert, generating 85% of sales ($970K) through online channels</li>
                        <li>• Helped three pre-seed startups go from zero to revenue, supporting product strategy, go-to-market, and growth execution</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
                      {/* Previous Role 3 */}
              <div className="relative">
                <div className="flex items-center mb-4 md:justify-center">
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-300 rounded-full border-4 border-white"></div>
                  <div className="ml-16 md:ml-0 md:absolute md:left-[52%] text-sm text-indigo-600 font-semibold">
                    2017
                  </div>
                </div>
                <div className="ml-16 md:ml-0 md:w-[45%] bg-white p-6 rounded-lg shadow-sm md:relative">
                  <div className="flex items-start">
                    <Briefcase className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">Head - Digital Marketing & Marketing Analyticsr</h3>
                      <p className="text-gray-600">HeroTalkies (Acquired by YuppTV) • Sept 2015 - May 2018</p>
                      <ul className="mt-4 space-y-2 text-gray-600">
                        <li>• Scaled revenue by 600% to $1M in 2 years, leading an 8-member team and managing a $400K annual budget through growth hacking and multi-channel marketing</li>
                        <li>• Reduced churn by 12.5% in 6 months using data modeling, driving a $34K quarterly impact in partnership with Data Analytics teams.</li>
                        <li>• Drove market expansion into Dubai & Sri Lanka, launching set-top boxes and operator billing, increasing quarterly revenue by 7.5%s</li>
                        <li>• Drove market expansion into Dubai & Sri Lanka, launching set-top boxes and operator billing, increasing quarterly revenue by 7.5%s</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
                            {/* Previous Role 4 */}
              <div className="relative">
                <div className="flex items-center mb-4 md:justify-center">
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-300 rounded-full border-4 border-white"></div>
                  <div className="ml-16 md:ml-0 md:absolute md:right-[52%] text-sm text-indigo-600 font-semibold">
                    2015
                  </div>
                </div>
                <div className="ml-16 md:ml-0 md:w-[45%] bg-white p-6 rounded-lg shadow-sm md:relative md:left-[52%]">
                  <div className="flex items-start">
                    <Briefcase className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">Associate - Digital Marketing & Market Research</h3>
                      <p className="text-gray-600">GAVS Technologies • Feb 2012 - Jul 2015</p>
                      <ul className="mt-4 space-y-2 text-gray-600">
                        <li>• Revamped digital marketing strategy, enhancing brand presence and creating a new lead gen channel.</li>
                        <li>• Drove $400K in pipeline through inbound and content marketing in 9 months</li>
                        <li>• Provided research and strategic recommendations that helped secure a $1.3M deal with a US-based hospital.</li>
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
            <p className="text-gray-600 text-lg leading-relaxed center-text">
                Persona-Centric, Experimentation-Forward, and Deeply Collaborative - with an emphasis on data-driven insights and sustainable growth, supported by emotional resonance and brand-building.”
   </p>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Let's Connect</h2>
          <div className="flex justify-center space-x-6">
            <a href="mailto:r.jegan2388@gmail.com"
              className="flex items-center text-gray-600 hover:text-indigo-600">
              <Mail className="h-6 w-6 mr-2" />
              Email
            </a>
            <a href="https://linkedin.com/in/jegan-ramanathan"
              className="flex items-center text-gray-600 hover:text-indigo-600">
              <Linkedin className="h-6 w-6 mr-2" />
              LinkedIn
            </a>
            <a href="https://github.com/jegan2388"
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
          <p>© 2025 Growth Marketing Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
