import Image from "next/image"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import projectsData from "../../public/data/projects.json"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-green-400">Bhuvan Gabbita</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="text-gray-300 hover:text-green-400 transition duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-green-400 transition duration-300">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-green-400 transition duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-green-400 transition duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-green-400 transition duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div>
            <h2 className="text-5xl font-extrabold text-white sm:text-6xl sm:tracking-tight lg:text-7xl">
              Hi, I'm <span className="text-green-400">Bhuvan Gabbita</span>
            </h2>
            <p className="mt-6 text-xl text-gray-300">A passionate engineer who loves making and breaking stuff at scale.</p>
            <a
              href="#contact"
              className="mt-8 inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Get in touch
            </a>
          </div>
          <Image
            src="/pp.jpeg?height=300&width=300"
            alt="Profile"
            width={300}
            height={300}
            className="rounded-full border-4 border-green-400 shadow-lg"
            loading="lazy"
            style={{ objectFit: "cover", width: "300px", height: "300px" }}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-green-400">About Me</h2>
          <p className="mt-6 text-xl text-gray-300 leading-relaxed">
          I believe in doing everything at scale — whether that’s building AI pipelines to validate terabytes of metadata, or reverse-engineering brittle systems to make them stronger. My default mindset? Make it. Break it. Rebuild it better. That’s not just how I code — it’s how I approach life.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      {/*Need to add a promotion type of continuation for the OvalEdge experience where I was promoted from Software Engineer Intern to Full Time software engineer , some sort of lines between those two experiences*/}

      <section id="experience" className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-green-400">Experience</h2>
          <div className="mt-12 relative">
            <div className="flex flex-col space-y-6">
              {[
                {
                  title: "Graduate Research and Teaching Assistant",
                  company: "UMass Dartmouth",
                  duration: "Jan 2024 - May 2025",
                  description: "Not so boring LLM Safety research and sometimes conduct lab sessions/office hours for students.",
                  image: "/umass.webp?height=200&width=200",
                },
                {
                  title: "Software Engineer ( Data and Operational AI)",
                  company: "OvalEdge",
                  duration: "January 2022 - July 2023",
                  description: "Contributed to the core backend of a data governance platform supporting large-scale enterprise metadata management, access control, and AI-enabling workflows.",
                  image: "/ovaledge.png?height=200&width=400",
                },
                {
                  title: "Software Developer Intern",
                  company: "GeeXpress Logistics",
                  duration: "June 2021 - December 2021",
                  description: "Freelance developer turned Intern, collaborated with a team of interns to develop a logistics platform, from scratch to deployment, using React.",
                  image: "/geexpress.png?height=200&width=400",
                },
               
              ].map((experience, index) => (
                <div key={index} className="bg-gray-900 rounded-lg shadow-lg p-6 transition duration-100 hover:shadow-green-400/30 hover:scale-102 flex flex-col md:flex-row items-start ">
                  
                  <Image
                    src={experience.image}
                    alt="Experience"
                    width={200}
                    height={200} // Adjust height as needed
                    className="w-50 h-[200px] rounded-lg"></Image>
                    
                  <div className="flex-1 ml-6">
                  <h3 className="text-xl font-semibold text-green-400">{experience.title}</h3>
                  {/* <p className="mt-2 text-gray-300">{experience.company}</p> */}
                  <p className="mt-1 text-gray-500 ">{experience.duration}</p>
                  </div>
                  {/* Add spaciing from second column */}
                  <div className="flex-1 ml-6">
                  <p className="mt-4 text-gray-300 ">{experience.description}</p>
                  </div>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="text-green-400 hover:text-green-300 transition duration-300"
                    >
                      Learn more →
                    </a>
                </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

            {/* Projects Section */}
          <section id="projects" className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-green-400">My Projects</h2>
          <div className="mt-12 relative">
            <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
              {projectsData.map((project) => (
                <div
                  key={project.projectid}
                  className="flex-none w-[400px] bg-gray-800 rounded-lg shadow-lg transition duration-300 hover:shadow-green-400/30 hover:scale-105"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200} // Adjust height as needed
                    className="w-full h-[350px]"
                    // style={{ objectFit: "cover", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }}

                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-green-400">{project.title}</h3>
                    <p className="mt-3 text-gray-300 line-clamp-3">
                      {project.description}
                    </p>
                    <a 
                      href={`/projects/${project.projectid}`} 
                      className="mt-4 inline-block text-green-400 hover:text-green-300 transition duration-300"
                    >
                      Learn more →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-green-400">Skills</h2>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Node.js", "Git"].map((skill) => (
              <div
                key={skill}
                className="bg-gray-900 overflow-hidden rounded-lg shadow-md p-6 text-center transition duration-300 hover:shadow-green-400/30 hover:scale-105"
              >
                <div className="text-lg font-semibold text-green-400">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="bg-gray-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-green-400 text-center">Contact Me</h2>
          <form className="mt-12 space-y-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">© 2023 Bhuvan Gabbita. All rights reserved.</div>
            <div className="flex space-x-6">
              <a href="https://github.com/notbhuvangab" className="text-gray-400 hover:text-green-400 transition duration-300">
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/bhuvan-gabbita/" className="text-gray-400 hover:text-green-400 transition duration-300">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="mailto:gbhuvanhyd@gmail.com" className="text-gray-400 hover:text-green-400 transition duration-300">
                <FaEnvelope className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

