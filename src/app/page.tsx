export default function HomePage() {
  return (
    <div>
      <section
        id="aboutme"
        className="scroll-mt-16 py-12 bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
      >
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Hey 👋 I am <br className="block sm:hidden" />
                <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
                  Gregory Elias
                </span>
              </h2>
              <p className="max-w-lg mt-6 text-lg leading-relaxed text-gray-100 md:mt-8">
                I&apos;m a passionate software engineer with two years of hands-on
                experience. Currently, I&apos;m set to graduate from Georgia Tech
                this semester with a B.S. in Computer Science, and I&apos;m thrilled
                to pursue my master&apos;s in machine learning in 2025.
                <br />
                <br />
                Since 2022, I&apos;ve interned at TeamDynamix as a Student Software
                Engineer, developing enterprise solutions using Microsoft .NET
                MVC C#. Since 2023, I have been working as an undergraduate
                researcher for Georgia Tech&apos;s Big Data and Quantum Mechanics
                team, creating machine learning models to predict chemical
                reaction energies. In the summer of 2023, I also interned at
                Target, collaborating with the merchandise planning team.
              </p>
              <div className="mt-8">
                <a
                  href="#projects"
                  className="inline-block px-6 py-3 text-lg font-medium text-white bg-indigo-500 rounded-lg shadow-lg hover:bg-indigo-400 transition transform hover:-translate-y-1"
                >
                  Check out my projects
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg -rotate-6 transform"></div>
              <img
                className="relative w-full max-w-lg mx-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                src="me.jpg"
                alt="Gregory Elias"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-16 bg-gray-100 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            A summary of my work experience in various fields and companies.
          </p>

          <div className="space-y-16">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <img
                  src="TeamDynamix.png"
                  alt="TeamDynamix Logo"
                  className="w-24"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Software Engineer Intern @{" "}
                  <span className="text-indigo-600">TeamDynamix</span>
                </h3>
                <p className="text-sm text-gray-500">July 2022 - Present</p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>
                    Transformed and enhanced 241 corporate pages to meet WCAG
                    2.1 AA standards.
                  </li>
                  <li>
                    Migrated and rewrote 40+ ASP.NET legacy code pages in MVC
                    C#.
                  </li>
                  <li>
                    Re-engineered UI, UX, frontend, and backend functionality
                    ahead of schedule.
                  </li>
                  <li>
                    Ensured industry-standard compatibility across 27 browsers,
                    devices, and systems.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <img src="GT.png" alt="Georgia Tech Logo" className="w-24" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Undergraduate Researcher @{" "}
                  <span className="text-indigo-600">Georgia Tech</span>
                </h3>
                <p className="text-sm text-gray-500">January 2023 - Present</p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>
                    Collaborated with 30 researchers on the Big Data and Quantum
                    Mechanics Team.
                  </li>
                  <li>
                    Generated data sets using quantum-mechanical simulations in
                    SPARC.
                  </li>
                  <li>
                    Analyzed ML models to predict the adsorption energy of CO
                    and O on Ru(0001).
                  </li>
                  <li>
                    Trained neural networks using PyTorch for predicting
                    chemical reaction energies.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <img src="Target.png" alt="Target Logo" className="w-24" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Software Engineer Intern @{" "}
                  <span className="text-indigo-600">Target</span>
                </h3>
                <p className="text-sm text-gray-500">June 2023 - August 2023</p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>
                    Collaborated with the Merchandise Planning Team to develop a
                    forecasting web app.
                  </li>
                  <li>
                    Implemented the provider pattern with React Context API for
                    data sharing across micro-apps.
                  </li>
                  <li>
                    Built software using TypeScript and AG Grid&apos;s Filter API for
                    persisting settings.
                  </li>
                  <li>
                    Optimized architecture with senior engineers to save user
                    states across a Spring Boot backend and PostgreSQL database.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Take a look at some of the major projects I&apos;ve worked on.
          </p>

          <div className="space-y-16">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0 w-full md:w-1/2">
                <img
                  src="pinpoint.png"
                  alt="Pinpoint"
                  className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-semibold text-gray-800">
                  Pinpoint 📍
                </h3>
                <p className="mt-4 text-gray-600 text-lg">
                  A web application that allows users to see their Twitter
                  followers on a map. Created with Next.JS (React.JS + Node.JS),
                  Supabase, Firebase, Twitter OAuth API, Mixpanel, and much
                  more! The product consists of a map that shows the live
                  locations of the Twitter followers associated with your
                  account.
                </p>
                <div className="mt-6 space-x-4">
                  <a
                    href="https://github.com/PinPoint-City"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 text-lg font-medium text-white bg-indigo-500 rounded-lg shadow-lg hover:bg-indigo-400 transition transform hover:-translate-y-1"
                  >
                    View on GitHub
                  </a>
                  <a
                    href="https://pinpoint.city"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 text-lg font-medium text-indigo-500 bg-white border border-indigo-500 rounded-lg shadow-lg hover:bg-indigo-100 transition transform hover:-translate-y-1"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0 w-full md:w-1/2">
                <img
                  src="firefly.png"
                  alt="Firefly"
                  className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-semibold text-gray-800">
                  Firefly
                </h3>
                <p className="mt-4 text-gray-600 text-lg">
                  A web-based app designed to provide lecturers with an
                  interactive online classroom. The product provides live
                  lecturing and student feedback alongisde a learning management
                  system. Any student or teacher can host live lectures for
                  classes they create! The app also integrates AI, as it
                  auto-generates notes for each recorded lecture.
                </p>
                <div className="mt-6 space-x-4">
                  <a
                    href="https://github.com/Education-Lecture-Platform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 text-lg font-medium text-white bg-indigo-500 rounded-lg shadow-lg hover:bg-indigo-400 transition transform hover:-translate-y-1"
                  >
                    View on GitHub
                  </a>
                  <a
                    href="https://thefirefly.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 text-lg font-medium text-indigo-500 bg-white border border-indigo-500 rounded-lg shadow-lg hover:bg-indigo-100 transition transform hover:-translate-y-1"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="documents" className="py-16 bg-gray-100 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
            Documents
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Below you can find my resume and cover letter. Feel free to view
            them directly or download them for future reference.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="px-6 py-4">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Resume
                </h3>
                <iframe
                  src="Gregory_Elias_Resume.pdf"
                  className="w-full h-[750px] rounded-lg border border-gray-200"
                  title="Resume"
                ></iframe>
                <div className="mt-4">
                  <a
                    href="Gregory_Elias_Resume.pdf"
                    download
                    className="inline-block px-6 py-3 text-lg font-medium text-white bg-indigo-500 rounded-lg shadow-lg hover:bg-indigo-400 transition transform hover:-translate-y-1"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="px-6 py-4">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Cover Letter
                </h3>
                <iframe
                  src="Gregory_Elias_Cover_Letter.pdf"
                  className="w-full h-[750px] rounded-lg border border-gray-200"
                  title="Cover Letter"
                ></iframe>
                <div className="mt-4">
                  <a
                    href="Gregory_Elias_Cover_Letter.pdf"
                    download
                    className="inline-block px-6 py-3 text-lg font-medium text-white bg-indigo-500 rounded-lg shadow-lg hover:bg-indigo-400 transition transform hover:-translate-y-1"
                  >
                    Download Cover Letter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
