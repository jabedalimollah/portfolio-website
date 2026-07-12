"use client";

import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaTag,
  FaPaperPlane,
} from "react-icons/fa";
import { MdMessage } from "react-icons/md";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect EmailJS / Resend / Backend API here
    console.log(formData);

    alert("Message submitted successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact-form" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Contact Form
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
            Send Me a Message
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Have a project, job opportunity, or collaboration in mind? Fill out
            the form below and I'll get back to you as soon as possible.
          </p>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="mt-14 rounded-3xl bg-white p-8 shadow-lg"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {/* Name */}

            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-medium text-slate-700"
              >
                Full Name
              </label>

              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-blue-500"
                />
              </div>
            </div>

            {/* Email */}

            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-medium text-slate-700"
              >
                Email Address
              </label>

              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-blue-500"
                />
              </div>
            </div>

            {/* Phone */}

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block font-medium text-slate-700"
              >
                Phone (Optional)
              </label>

              <div className="relative">
                <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-blue-500"
                />
              </div>
            </div>

            {/* Subject */}

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block font-medium text-slate-700"
              >
                Subject
              </label>

              <div className="relative">
                <FaTag className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Message */}

          <div className="mt-6">
            <label
              htmlFor="message"
              className="mb-2 block font-medium text-slate-700"
            >
              Message
            </label>

            <div className="relative">
              <MdMessage className="absolute left-4 top-5 text-slate-400 text-xl" />

              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-blue-500"
              />
            </div>
          </div>

          {/* Button */}

          <button
            type="submit"
            className="mt-8 inline-flex items-center rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            <FaPaperPlane className="mr-2" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
