import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import React, { useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from "../lib/utils";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(""); // Pesan sukses

  const form = useRef();

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_njobtii", "template_abtzyl9", form.current, {
        publicKey: "Ua1ClD3EsqphhTsRT",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("Message Sent! I'll back to you as soon as possible");

          setTimeout(() => {
            setSuccess("");
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Email</h4>
                  <a
                    href="mailto:robinndraha2@gmail.com"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    robinndraha2@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <FaWhatsapp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Phone</h4>
                  <a
                    href="https://wa.me/628891758672?text=Halo%20Robin%2c%20bisakah%20Anda%20membantu%20saya%3f"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +62889-1758-672
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Location</h4>
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    Gamping, Sleman, Yogyakarta
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect with Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/robinndraha"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.instagram.com/robin_ndraha?igsh=eDJtbG1mcTM0N3Rj"
                  target="_blank"
                >
                  <Instagram />
                </a>
                <a href="https://www.facebook.com/robinndrhhhh" target="_blank">
                  <Facebook />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold">Send a Message</h3>
            <p className="text-primary text-left">{success}</p>{" "}
            {/* Pesan Sukses */}
            <form className="space-y-6" ref={form} onSubmit={sendEmail}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-left"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="John Doe..."
                  value={name}
                  onChange={handleName}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-left"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com..."
                  value={email}
                  onChange={handleEmail}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-left"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                  value={message}
                  onChange={handleMessage}
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                <Send size={16} />
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
