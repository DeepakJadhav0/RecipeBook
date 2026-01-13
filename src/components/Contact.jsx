import React, { useState } from "react";
import { SlNotebook } from "react-icons/sl";
import { CgMail, CgPhone, CgFacebook, CgInstagram } from "react-icons/cg";
import toast,{ Toaster } from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    toast.success("Submitted Succefully")
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-[#FFA542] p-4">
      <Toaster/>

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 flex flex-col gap-4">

        <div className="flex items-center justify-center gap-2 mb-2">
          <SlNotebook className="text-2xl text-green-800" />
          <h1 className="font-serif font-bold text-2xl text-gray-900">
            Cook<span className="text-green-800">Book</span>
          </h1>
        </div>

        <h2 className="text-center text-3xl font-bold text-gray-900 mb-2">
          Contact Us
        </h2>
        <p className="text-center text-gray-700 text-sm mb-4">
          We’d love to hear your feedback, questions, or suggestions!
        </p>

        <form onSubmit={handleSubmit} action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-3">
         <input type="hidden" name="access_key" value="ecb877b2-f01a-4a8d-9325-e171e5238f5c"></input>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-3 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-800 text-sm"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-3 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-800 text-sm"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            className="p-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-800 text-sm resize-none"
            required
          />
          <button
            type="submit"
            className="bg-green-800 text-white py-2 rounded-full font-bold text-sm hover:bg-green-700 transition duration-200"
          >
            Send
          </button>
        </form>


        <div className="flex justify-between mt-4 text-gray-700 text-sm">
          <div className="flex items-center gap-1">
            <CgMail className="text-green-800" /> contact@cookbook.com
          </div>
          <div className="flex items-center gap-1">
            <CgPhone className="text-green-800" /> +123 456 7890
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-3 text-green-800 text-lg">
          <CgFacebook className="cursor-pointer hover:scale-110 transition duration-200" />
          <CgInstagram className="cursor-pointer hover:scale-110 transition duration-200" />
        </div>
      </div>
    </main>
  );
}
