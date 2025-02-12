import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TypeWriter from "../components/TypeWriter";
import { CalendarDays, Mail, Users, Instagram, Linkedin, Twitter, ExternalLink, MapPin, X } from "lucide-react";
import { fetchEvents } from "../utils/sheets";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentEvents, setCurrentEvents] = useState<any[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const loadEvents = async () => {
      const events = await fetchEvents();
      setCurrentEvents(events);
    };
    loadEvents();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-primary text-white relative overflow-hidden">
      {/* Mouse follower */}
      <div
        className="fixed w-8 h-8 rounded-full border border-accent/30 pointer-events-none transition-all duration-100 ease-out z-50"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: `translate(${(mousePosition.x * 0.1)}px, ${(mousePosition.y * 0.1)}px)`,
        }}
      />

      {/* Grid Background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]"
        style={{
          backgroundSize: "24px 24px",
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/30 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-5 py-5">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="https://i.ibb.co/9ksS9kT7/DND-logo-150x150.png"
                alt="Data n Dash"
                
                className="w-16 h-12 object-contain"
              />
              <span className="text-xl font-bold">Data n Dash</span>
            </Link>
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
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-lg border-b border-white/10 py-4">
              <div className="flex flex-col space-y-4 px-4">
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
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 pt-32 pb-16">
        <TypeWriter />
        <p className="mt-8 text-center max-w-2xl mx-auto text-lg text-gray-300">
          Join our community of data professionals and enthusiasts in Ahmedabad. We organize
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
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Focus Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Data Analytics",
                description:
                  "Deep dive into Dashboards and DAX Queries",
              },
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
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Current Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentEvents.map((event, index) => (
              <div
                key={index}
                className="bg-primary/50 backdrop-blur-lg p-6 rounded-lg border border-white/10 hover:border-accent transition-all duration-300 group"
              >
                <CalendarDays className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-300 mb-4">{event.description}</p>
                <div className="flex items-center text-gray-300 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{event.venue}</span>
                </div>
                <div className="text-gray-300">
                  <CalendarDays className="w-4 h-4 inline-block mr-2" />
                  <span>{event.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="relative z-10 bg-white/5 backdrop-blur-lg py-20">
        <div className="container mx-auto px-4">
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

      {/* Team Section with updated images */}
      <section id="team" className="relative z-10 py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              {
                name: "Rajveer Singh",
                role: "Organizer",
                image: "https://media.licdn.com/dms/image/v2/D5603AQEmug7AJ1lItw/profile-displayphoto-shrink_200_200/B56ZSDSBd2H0Ac-/0/1737369327997?e=2147483647&v=beta&t=eIaLPpNlVse277jjWUghzNf9vxduxbZR5znaPPfNEX0",
              },
              {
                name: "Janvi Gupta",
                role: " Organizer",
                image: "https://media.licdn.com/dms/image/v2/D4D03AQGrIXlkxIOXaQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1711783329581?e=1744848000&v=beta&t=PlcnVlhWQyxgD-r6USEh2r2ls1d5lgrtO5FmUvqtqaY",
              },
              {
                name: "Harsh Mer",
                role: "Co-Organizer",
                image: "https://media.licdn.com/dms/image/v2/D5603AQEHgKyxw5RD7Q/profile-displayphoto-shrink_400_400/B56ZTRplr5GsAg-/0/1738684129129?e=1744848000&v=beta&t=o3F3c_N9A4eBES-XHf0r3z5GF7ZeOrsjenPFVnn2Vjs",
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

      {/* Partners Section with updated logo */}
      <section className="relative z-10 bg-white/5 backdrop-blur-lg py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
          <div className="flex justify-center">
            <a
              href="https://exillar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <img
                src="https://exillar.com/wp-content/uploads/2023/07/logo.svg"
                alt="Exillar infotech"
                className="h-12 object-contain"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section with increased width */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Stay Updated</h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border border-white/20 rounded-lg px-6 py-3 focus:outline-none focus:border-accent w-full md:w-96"
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
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* About Column */}
            <div className="space-y-4 font-montserrat">
              <div className="flex items-center space-x-2">
                <img
                  src="https://i.ibb.co/9ksS9kT7/DND-logo-150x150.png"
                  alt="Data n Dash"
                  className="w-8 h-8 object-contain"
                />
                <h3 className="text-xl font-bold">Data n Dash</h3>
              </div>
              <p className="text-gray-300">
                Empowering data professionals through community, learning, and
                innovation in Ahmedabad.
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
                  href="https://www.instagram.com/datandash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Ahmedabad, Gujarat</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 font-montserrat">
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
            <div className="space-y-4 font-montserrat">
              <h3 className="text-xl font-bold">Contact</h3>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-5 h-5" />
                <span>dndcommunity@gmail.com</span>
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

          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400 font-montserrat">
            <p>© {new Date().getFullYear()} Data n Dash. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
