// ContactPage.tsx
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const ContactFrom: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate submission
    console.log("Form submitted:", { name, email, message });

    // Show success message
    setSuccess(true);

    // Reset form
    setName("");
    setEmail("");
    setMessage("");

    // Hide success message after 3 seconds
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div>
        <h2 className=" font-bold size-full text-center text-5xl py-4">FAQ </h2>
         <p className="text-center">This is where blog posts will be displayed.</p>
        <div className="max-w-lg mx-auto mt-5 mb-10 p-6  bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

      {success && (
        <div className="bg-green-100 text-green-700 p-3 mb-4 rounded">
          Your inquiry has been submitted successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Your message..."
            rows={5}
          />
        </div>

       <Button>Submit</Button>
      </form>
    </div>
    </div>
  );
};

export default ContactFrom;
