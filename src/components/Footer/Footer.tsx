import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-sm">
        
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold text-orange-600 dark:text-blue-400 mb-3">
            BookShop
          </h3>
          <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            Your trusted online bookstore. Find your next favorite read and enjoy seamless shopping.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
            Explore
          </h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link to="/allbooks" className="hover:text-orange-500">All Books</Link></li>
            <li><Link to="/about" className="hover:text-orange-500">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
            Contact
          </h4>
          <p className="mb-1">📧 support@bookshop.com</p>
          <p className="mb-1">📞 +880-1234-567890</p>
          <p>📍 Dhaka, Bangladesh</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
            Follow Us
          </h4>
          <div className="flex items-center gap-4 text-xl text-gray-600 dark:text-gray-400">
            <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" className="hover:text-sky-500 transition"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-4 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700">
        © {new Date().getFullYear()} BookShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
