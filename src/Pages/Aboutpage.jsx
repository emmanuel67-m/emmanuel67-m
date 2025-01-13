import React from 'react';

const AboutUsPage = () => {
  return (
    <section className="bg-gray-50 py-12 px-6">
      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">About Us</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          We are a passionate team dedicated to providing the best solutions
          for our customers. Our goal is to innovate, inspire, and improve the
          lives of those we serve through quality products and exceptional
          service.
        </p>
      </div>

      {/* Mission Statement */}
      <div className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h3 className="text-3xl font-semibold mb-6">Our Mission</h3>
          <p className="text-lg max-w-2xl mx-auto">
            Our mission is to empower individuals and businesses by delivering
            top-notch products and services with integrity, transparency, and
            dedication. We are committed to innovation, sustainability, and
            creating lasting relationships with our customers and partners.
          </p>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="max-w-7xl mx-auto text-center py-16 px-4">
        <h3 className="text-3xl font-semibold text-gray-800 mb-12">
          Meet Our Team
        </h3>
        <div className="grid md:grid-cols-3 gap-12">
          {/* Team Member 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlr3rs5CbcPVfxccdNhfIeZftyUHZKpmw4OeNc_ZQesE2V45-UlH2KUvA&s=10"
              alt="Team Member 1"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800">John Doe</h4>
            <p className="text-gray-600">CEO & Founder</p>
            <p className="text-gray-600 mt-4">
              John is a visionary leader who has guided the company to new
              heights. He focuses on the strategic growth of the business and
              creating innovative solutions that help our customers succeed.
            </p>
          </div>
          {/* Team Member 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiLZL9bEtaFGWEA-kKsaG3Nv_cAznW4pGE4mzwTm7RDGXWEn4P_vEyiZo&s=10"
              alt="Team Member 2"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800">Jane Smith</h4>
            <p className="text-gray-600">Head of Operations</p>
            <p className="text-gray-600 mt-4">
              Jane is responsible for managing the day-to-day operations of the
              company. She ensures smooth workflow, efficiency, and quality
              standards across all departments.
            </p>
          </div>
          {/* Team Member 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_MDbZ_HXNOXSgpHH3R5oJc2dgHdRuFDQIRXteu0IGKZDKoyRpbK8as3w&s=10"
              alt="Team Member 3"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800">Sam Wilson</h4>
            <p className="text-gray-600">Lead Developer</p>
            <p className="text-gray-600 mt-4">
              Sam is the technical mastermind behind our products. With his
              expertise in coding and product design, he ensures that our
              offerings are user-friendly and cutting-edge.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h3 className="text-3xl font-semibold mb-6">Get in Touch</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you have a question or want to learn more about our
            services, feel free to reach out to us. We’d love to hear from you!
          </p>
          <div className="flex justify-center gap-8">
            <div>
              <p className="text-lg">Email:</p>
              <a
                href="mailto:info@company.com"
                className="text-indigo-400 hover:text-indigo-300"
              >
                info@company.com
              </a>
            </div>
            <div>
              <p className="text-lg">Phone:</p>
              <a
                href="tel:+123456789"
                className="text-indigo-400 hover:text-indigo-300"
              >
                +1 234 567 89
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
