import React from "react";
import { Link } from "react-router-dom";
import TypeWriter from "../components/TypeWriter";
import { CalendarDays, Mail, Users, Github, Linkedin, ExternalLink } from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-primary text-white relative overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]"
        style={{
          backgroundSize: "24px 24px",
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/30 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">Data n Dash</div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("objectives")}
                className="hover:text-accent transition-colors duration-300"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("events")}
                className="hover:text-accent transition-colors duration-300"
              >
                Events
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="hover:text-accent transition-colors duration-300"
              >
                Team
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 pt-32 pb-16">
        <TypeWriter />
        <p className="mt-8 text-center max-w-2xl mx-auto text-lg text-gray-300">
          Join our community of data professionals and enthusiasts. We organize
          meetups and events focused on data analysis, engineering, and more.
        </p>
        <div className="mt-12 flex justify-center">
          <a
            href="https://www.linkedin.com/company/data-n-dash/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent/80 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Join Community
          </a>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objectives" className="relative z-10 bg-white/5 backdrop-blur-lg py-20 scroll-mt-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Focus Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Data Engineering Excellence",
                description:
                  "Deep dive into data pipeline architecture and best practices",
              },
              {
                title: "Business Intelligence",
                description:
                  "Transform raw data into actionable business insights",
              },
              {
                title: "Data Science Innovation",
                description:
                  "Explore machine learning and advanced analytics techniques",
              },
            ].map((focus, index) => (
              <div
                key={index}
                className="bg-primary/50 backdrop-blur-lg p-6 rounded-lg border border-white/10 hover:border-accent transition-all duration-300 group hover:transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent">
                  {focus.title}
                </h3>
                <p className="text-gray-300">{focus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Events */}
      <section id="events" className="relative z-10 py-20 scroll-mt-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Current Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="bg-primary/50 backdrop-blur-lg p-6 rounded-lg border border-white/10 hover:border-accent transition-all duration-300 group"
              >
                <CalendarDays className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Data Engineering Meetup #{index}
                </h3>
                <p className="text-gray-300">
                  Join us for an evening of learning and networking.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="relative z-10 bg-white/5 backdrop-blur-lg py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Past Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Data Science Workshop",
              "BI Tools Comparison",
              "ETL Pipeline Design",
            ].map((event, index) => (
              <div
                key={index}
                className="bg-primary/50 backdrop-blur-lg p-6 rounded-lg border border-white/10 hover:border-accent transition-all duration-300 group"
              >
                <CalendarDays className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">{event}</h3>
                <p className="text-gray-300">
                  A successful event that brought together data enthusiasts.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="relative z-10 py-20 scroll-mt-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              {
                name: "Pranav Nair",
                role: "Founder",
                image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
              },
              {
                name: "Umair Mansuri",
                role: "Co-Founder",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white/5 backdrop-blur-lg p-6 rounded-lg border border-white/10 hover:border-accent transition-all duration-300 group"
              >
                <div className="mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-accent"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative z-10 bg-white/5 backdrop-blur-lg py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
          <div className="flex justify-center">
            <a
              href="https://exillar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <img
                src="https://exillar.com/assets/images/header/logo.png"
                alt="Exillar"
                className="h-12 object-contain"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Stay Updated</h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border border-white/20 rounded-lg px-6 py-3 focus:outline-none focus:border-accent"
              />
              <button className="bg-accent hover:bg-accent/80 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                <Mail className="w-5 h-5 inline-block mr-2" />
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-primary/90 border-t border-white/10">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* About Column */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Data n Dash</h3>
              <p className="text-gray-300">
                Empowering data professionals through community, learning, and
                innovation.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/data-n-dash/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("objectives")}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("events")}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    Events
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("team")}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    Our Team
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Contact</h3>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-5 h-5" />
                <span>info@datandash.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <a
                  href="https://exillar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent transition-colors flex items-center space-x-1"
                >
                  <span>Supported by Exillar</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Data n Dash. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
