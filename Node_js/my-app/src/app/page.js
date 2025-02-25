import Image from "next/image";

export default function Home() {
  return (
    <div>
        <nav className="font-sans bg-gray-800 p-2 text-white text-center">
            <a href="#summary" className="text-white no-underline mx-4">Professional Summary</a>
            <a href="#work-experience" className="text-white no-underline mx-4">Work Experience</a>
            <a href="#education" className="text-white no-underline mx-4">Education</a>
            <a href="#skills" className="text-white no-underline mx-4">Skills</a>
            <a href="#project" className="text-white no-underline mx-4">Project</a>
            <a href="#language" className="text-white no-underline mx-4">Language</a>
            <a href="#references" className="text-white no-underline mx-4">References</a>
            <a href="#contact-me" className="text-white no-underline mx-4">Contact Me</a>
        </nav>
        <header className="text-center p-5 bg-gray-300 font-sans">
            <h1 className="text-black">PHORN Sophath</h1>
            <p>Email: Psvwin@gmail.com | Phone: +855 99 999 999</p>
            <p>Address: 123 Main Street, City, Phnom Penh</p>
        </header>
        <h1 id="summary" className="text-xl font-bold mt-5">Professional Summary</h1>
        <p>
            A highly motivated student with over 2 years of experience 
            in website development. Skilled in full-Stack development,
            team collaboration, and project management.
        </p>

        <h1 id="work-experience" className="text-xl font-bold mt-5">Work experience</h1>
        <h3 className="text-lg font-semibold">Development Intern</h3>
        <p>Glean Asia</p>
        <ul className="list-disc list-inside">
            <li>Developed scalable web applications using Liferay CMS.</li>
            <li>Led a team of 4 developers to successfully deliver projects on time.</li>
            <li>Maintained and improved system performance.</li>
        </ul>
        <h1 className="text-xl font-bold mt-5">Full-Stack Developer</h1>
        <p>ITC Mockexam System</p>
        <ul className="list-disc list-inside">
            <li>Design database and developed RestAPI.</li>
            <li>Developed Frontend using NextJS.</li>
        </ul>
        <h1 id="education" className="text-xl font-bold mt-5">Education</h1>
        <h3 className="text-lg font-semibold">Bachelor of Information Technology</h3>
        <p>Institute of Technology of Cambodia, 2022 - Present</p>
        <h1 id="skills" className="text-xl font-bold mt-5">Skills</h1>
        <table className="w-full text-center border-collapse border border-gray-400">
            <tbody>
                <tr className="bg-gray-400 leading-8">
                    <th>Programming Languages</th>
                    <th>Frameworks</th>
                    <th>Tools</th>
                </tr>
                <tr className="leading-6">
                    <td>JavaScript, Typescript, Java</td>
                    <td>NextJS, Node.js, NestJS</td>
                    <td>Git, Docker, Nginx</td>
                </tr>
                <tr className="leading-6">
                    <td>PHP</td>
                    <td>Laravel</td>
                    <td>Vs Code, Linux experience</td>
                </tr>
            </tbody>
        </table>
        <h1 id="project" className="text-xl font-bold mt-5">Project</h1>
        <h3 className="text-lg font-semibold">Mockexam System</h3>
        <p>Developed a mock exam system for ITC students 
            to practice for their final exams. The system is 
            built using NextJS and NestJS.
        </p>
        <h1 className="text-xl font-bold mt-5">Portfolio Website</h1>
        <p>Design and developed a personal portfolio website 
            to showcase my skills and projects.</p>
        <h1 id="language" className="text-xl font-bold mt-5">Language</h1>
        <ul className="list-disc list-inside">
            <li>English: Intermediate</li>
            <li>Khmer: Mother tongue</li>
        </ul>
        <h1 id="references" className="text-xl font-bold mt-5">References</h1>
        <p>Available upon request</p>
        <h1 id="contact-me" className="text-xl font-bold mt-5">Contact Me</h1>
        <form>
            <fieldset className="border border-gray-400 p-4">
                <legend className="font-semibold">Contact Form</legend>
                <label htmlFor="name" className="block mt-2">Full Name: </label>
                <input type="text" id="name" name="name" placeholder="Enter your full name" required className="border border-gray-400 p-2 w-full"/>
                <label htmlFor="email" className="block mt-2">Email:</label>
                <input type="email" id="email" name="email" required placeholder="Enter your email" className="border border-gray-400 p-2 w-full"/>
                <label htmlFor="message" className="block mt-2">Message:</label>
                <textarea name="message" id="message" rows="5" required placeholder="Write your message" className="border border-gray-400 p-2 w-full"></textarea>
                <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">Send Message</button>
            </fieldset>
        </form>
    </div>
  );
}