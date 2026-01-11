import React, { useState } from "react";
import { Phone, MapPin, Mail, Linkedin, Facebook, X } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";
import ContactEffects from "../components/ContactEffects";
import "../components/ContactEffects.css";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      toast.success("Message sent successfully!");
      setLoading(false);
      e.target.reset();
    }, 1000);
  };

  const openEmailModal = () => setIsEmailModalOpen(true);
  const closeEmailModal = () => setIsEmailModalOpen(false);

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen py-24 text-white overflow-hidden bg-[#0b0b0b] px-6 md:px-12"
    >
      <Toaster position="top-right" />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#1c1c1c] pointer-events-none z-0" />
      <ContactEffects />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-3">Get in Touch</h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Reach out for collaborations, opportunities, or any inquiries.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 w-full justify-center">
          {/* Phone Card */}
          <div className="p-6 w-full max-w-xs rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300 cursor-pointer flex flex-col items-center text-center">
            <Phone size={28} className="text-green-400 mb-3" />
            <h3 className="font-medium mb-1 text-white">Phone</h3>
            <p className="text-gray-400 mb-1 text-sm sm:text-base">Feel Free To Call Me Anytime</p>
            <span className="font-medium text-white text-sm sm:text-base">+8801754677889</span>
          </div>

          {/* Location Card */}
          <div className="p-6 w-full max-w-xs rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300 cursor-pointer flex flex-col items-center text-center">
            <MapPin size={28} className="text-green-400 mb-3" />
            <h3 className="font-medium mb-1 text-white">Location</h3>
            <p className="text-gray-400 mb-1 text-sm sm:text-base">Amin Bazar, Savar, Dhaka, Bangladesh</p>
            <a
              href="https://www.google.com/maps/@23.786758,90.3289589,3a,75y,25.26h,111.63t/data=!3m7!1e1!3m5!1swv0XWd24hTj4Khq3kMNtLQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-21.626742877214795%26panoid%3Dwv0XWd24hTj4Khq3kMNtLQ%26yaw%3D25.255994016547618!7i13312!8i6656?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline hover:text-green-300 text-sm sm:text-base transition"
            >
              View on map
            </a>
          </div>

          {/* Email / Social Card */}
          <div className="p-6 w-full max-w-xs rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300 cursor-pointer flex flex-col items-center text-center">
            <Mail size={28} className="text-green-400 mb-3" />
            <h3 className="font-medium mb-1 text-white">Email / Social</h3>
            <p className="text-gray-400 mb-2 text-sm sm:text-base">Connect with me</p>
            <div className="flex items-center gap-4 mt-2 justify-center">
              <button onClick={openEmailModal} className="hover:text-green-300 transition">
                <Mail size={20} />
              </button>
              <a
                href="https://www.linkedin.com/in/afiful-hasan-0781803a2"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300 transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/md.afiful.hasan.ratul"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300 transition"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg flex flex-col gap-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-md bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-gray-400"
            />
            <input
              type="text"
              placeholder="Subject"
              required
              className="w-full px-4 py-3 rounded-md bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-gray-400"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 rounded-md bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-gray-400"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 rounded-md bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-gray-400 resize-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-green-400 font-medium hover:bg-white/20 hover:backdrop-blur-lg hover:scale-105 transition-all duration-500 ease-in-out disabled:opacity-60"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      {/* Email Modal */}
      {isEmailModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 max-w-sm w-full relative text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeEmailModal}
              className="absolute top-4 right-4 text-white hover:text-green-400 transition"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-semibold mb-4 text-white">My Email</h3>
            <p className="text-gray-200 text-lg sm:text-xl">afifulhasan28@gmail.com</p>
          </div>
        </div>
      )}
    </section>
  );
}
