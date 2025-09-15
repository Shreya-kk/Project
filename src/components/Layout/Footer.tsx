import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Quick Links": [
      { name: "Find Jobs", href: "/jobs" },
      { name: "Post a Job", href: "/post-job" },
      { name: "Browse Products", href: "/marketplace" },
      { name: "Sell Products", href: "/sell" },
    ],
    "Support": [
      { name: "Help Center", href: "/help" },
      { name: "Community Guidelines", href: "/guidelines" },
      { name: "Safety Resources", href: "/community" },
      { name: "Contact Us", href: "/contact" },
    ],
    "Legal": [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Accessibility", href: "/accessibility" },
    ],
  };

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-hero-gradient flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Saathi</h1>
                <p className="text-xs text-muted-foreground -mt-1">Rural Women Hub</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering rural women through job opportunities, business growth, and community support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-foreground mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Emergency Contact Section */}
        <div className="py-6 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-destructive" />
              <div>
                <p className="text-sm font-medium text-foreground">Emergency Helpline</p>
                <p className="text-sm text-muted-foreground">1091 (Women's Helpline)</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">Support Email</p>
                <p className="text-sm text-muted-foreground">support@saathi.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-accent" />
              <div>
                <p className="text-sm font-medium text-foreground">Serving</p>
                <p className="text-sm text-muted-foreground">Rural India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Saathi. All rights reserved. Made with ❤️ for rural women empowerment.
            </p>
            <p className="text-xs text-muted-foreground mt-2 md:mt-0">
              Supporting women across rural India since 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;