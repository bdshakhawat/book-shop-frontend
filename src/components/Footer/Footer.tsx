import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="bg-blue-50 text-black dark:bg-gray-800 dark:text-white border-t mx-auto">
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600 dark:text-gray-400">
          
                {/* Brand Info */}
                <div>
                    <h3 className="text-2xl font-semibold text-orange-600 dark:text-blue-300 mb-2">BookShop </h3>
                    <p>Any users can buy any book eisyly.</p>
                </div>
    
                {/* Explore */}
                <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Explore</h4>
                    <ul className="space-y-1">
                        <li><Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link></li>
                        <li><Link to="/allbooks" className="hover:text-blue-600 dark:hover:text-blue-400">All Books</Link></li>
                        <li><Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</Link></li>
                        
                    </ul>
                </div>
    
    
                {/* Contact */}
                <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Contact</h4>
                    <p>Email: support@bookshop.com</p>
                    <p>Phone: +880-1234-567890</p>
                    <p>Dhaka, Bangladesh </p>
                </div>
            </div>
    
            {/* Copyright */}
            <div className="border-t border-gray-500 dark:border-blue-100 text-center text-xs py-4 text-gray-500 dark:text-gray-300">
                © {new Date().getFullYear()} BookShop. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
