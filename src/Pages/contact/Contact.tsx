

import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions, suggestions, or want to collaborate? Fill out the form or contact us directly.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-md"
          >
            <div className="mb-5">
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="mb-5">
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="mb-5">
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows={5}
                required
                placeholder="Write your message here..."
                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Details / Live Chat */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center text-center md:text-left"
          >
            <h3 className="text-2xl font-semibold mb-4">📞 Contact Support</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Prefer direct communication? Our support team is available 24/7 via email, phone, or live chat.
            </p>
            <div className="text-gray-800 dark:text-gray-200 space-y-2">
              <p>Email: <a href="mailto:support@bookshop.com" className="text-orange-600 underline hover:text-orange-700">support@bookshop.com</a></p>
              <p>Phone: +880 1234 567890</p>
              <p>Location: Dhaka, Bangladesh</p>
            </div>
            {/* Live chat widget placeholder */}
            {/* Example: <div id="tawk-widget"></div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
