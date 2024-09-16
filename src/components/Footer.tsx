import { FaLinkedin, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">Contact Me</h2>
            <p className="mt-2 text-gray-400">
              I'd love to connect with you! Feel free to reach out on any of my
              social media platforms.
            </p>
          </div>

          <div className="flex space-x-8">
            <a
              href="https://linkedin.com/in/gregoryelias"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-8 w-8" />
            </a>

            <a
              href="https://www.instagram.com/_gregoryelias"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="h-8 w-8" />
            </a>

            <a
              href="https://youtube.com/@Gregmaster"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="YouTube"
            >
              <FaYoutube className="h-8 w-8" />
            </a>

            <a
              href="https://x.com/gregmasteryt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="Twitter"
            >
              <FaTwitter className="h-8 w-8" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500">
          <p>&copy; 2024 Gregory Elias. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
