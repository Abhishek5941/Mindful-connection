import React from "react";

export default function MindfulConnections() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <header className="text-center py-8">
        <h1 className="text-3xl font-bold text-blue-800">Mindful Connections</h1>
        <p className="mt-2 text-gray-600">
          Helping You Feel Heard, Seen, and Understood.
        </p>
      </header>

      <section className="max-w-xl mx-auto space-y-6">
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">About Me</h2>
          <div className="flex flex-col items-center space-y-4">
            <img
              src="/1000196435.jpg"
              alt="Your Photo"
              width={200}
              height={200}
              className="rounded-full shadow-md"
            />
            <p className="text-center">
              I support people facing social anxiety and relationship struggles
              with compassion and tools that work. My approach is warm,
              non-judgmental, and focused on real change.
            </p>
          </div>
        </div>

        <div className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Services</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>1-on-1 virtual sessions</li>
            <li>Support for social anxiety</li>
            <li>Help with dating & relationships</li>
            <li>Free 15-minute intro call</li>
          </ul>
        </div>

        <div className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Book a Session</h2>
          <p className="mb-2">Call or WhatsApp me directly:</p>
          <a
            href="https://wa.me/917508408117"
            className="block w-full text-center bg-green-600 text-white py-2 rounded hover:bg-green-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Message Me on WhatsApp
          </a>
          <p className="mt-2 text-sm text-gray-600 text-center">Phone: +91 7508408117</p>
          <p className="mt-1 text-sm text-gray-600 text-center">Available Daily: 9:00 AM – 12:00 AM</p>
        </div>

        <div className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Contact Me</h2>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded p-2"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded p-2"
            />
            <textarea
              placeholder="Your Message"
              className="w-full border rounded p-2"
            />
            <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="text-center text-gray-500 text-sm mt-10">
        &copy; {new Date().getFullYear()} Mindful Connections. All rights reserved.
      </footer>
    </div>
  );
}