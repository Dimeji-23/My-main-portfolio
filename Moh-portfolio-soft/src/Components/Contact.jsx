import { useState } from "react";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email))
      newErrors.email = "Invalid email";

    if (!formData.subject.trim())
      newErrors.subject = "Subject is required";

    if (!formData.message.trim())
      newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      );

      setStatus({
        type: "success",
        message: "Message sent successfully.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black flex items-center justify-center px-4 py-24"
    >
      <div className="w-full max-w-3xl">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Have a project in mind or just want to say hi?  
            I’m always open to conversations.
          </p>
        </div>

        {/* FORM CARD */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* NAME & EMAIL */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* NAME */}
              <div>
                <label className="text-sm text-gray-400">Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-11 pr-4 py-3 bg-black border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-white/40"
                  />
                </div>
                {errors.name && (
                  <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm text-gray-400">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-black border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-white/40"
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* SUBJECT */}
            <div>
              <label className="text-sm text-gray-400">Subject</label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 bg-black border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-white/40"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-white/40 resize-none"
              />
            </div>

            {/* STATUS */}
            {status.message && (
              <div
                className={`flex items-center gap-2 text-sm ${
                  status.type === "success"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle size={16} />
                ) : (
                  <AlertCircle size={16} />
                )}
                {status.message}
              </div>
            )}

            {/* BUTTON */}
            <button
              disabled={isSubmitting}
              className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
