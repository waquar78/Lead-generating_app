import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateLeadMutation } from "../api/api";
import toast from "react-hot-toast";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [createLead] = useCreateLeadMutation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, contact, message } = formData;
    if (!name || !email || !contact || !message) {
      toast.error("All fields are required!");
      return;
    }
    try {
      await createLead(formData).unwrap();
      toast.success("Lead submitted successfully!");
      navigate("/submit");
    } catch (error) {
      toast.error("Submission failed!");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://wallpapercave.com/wp/wp3709137.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 md:p-12 rounded-lg shadow-lg max-w-md w-full opacity-85">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Lead Generation Form
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
              value={formData.name}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
              value={formData.email}
            />
          </div>

         
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Contact <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="contact"
              placeholder="Enter your contact number"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
              value={formData.contact}
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              placeholder="Enter your message"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={4}
              onChange={handleChange}
              value={formData.message}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold p-3 rounded hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
