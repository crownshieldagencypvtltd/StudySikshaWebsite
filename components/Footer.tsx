import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2022.43.16_21b245d9.jpg-Wl3OUCBIC0swFiSSd9QWrhkjt7lPHK.jpeg"
                alt="Shiksha Yogya Logo"
                width={50}
                height={50}
                className="mr-2"
              />
              <span className="text-xl font-bold text-brand-800">Shiksha Yogya</span>
            </Link>
            <p className="text-gray-600 mb-6">
              Your trusted partner for overseas education providing expert guidance for studying abroad in
              prestigious universities worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/16CmJ6yHvK/"
                className="bg-gray-100 hover:bg-gray-200 text-brand-600 p-2 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-100 hover:bg-gray-200 text-brand-600 p-2 rounded-full transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://www.instagram.com/shikshayogya?igsh=MWl5Z3plM3RlMTdsMA=="
                className="bg-gray-100 hover:bg-gray-200 text-brand-600 p-2 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-100 hover:bg-gray-200 text-brand-600 p-2 rounded-full transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-brand-800">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Study Destinations", "Success Stories", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item === "Home" ? "" : item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-600 hover:text-brand-600 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Study Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-brand-800">Top Study Destinations</h3>
            <ul className="space-y-3">
              {[
                { title: "USA, Canada, UK, Australia", description: "Leading for quality education and work opportunities." },
                { title: "Germany, New Zealand, Dubai", description: "Affordable with strong career prospects." },
                { title: "Delhi, Mumbai, Bangalore", description: "Top for management, tech, and finance in India." },
                { title: "Chennai, Hyderabad, Kolkata", description: "Known for engineering, biotech, and arts courses." }
              ].map((item, index) => (
                <li key={index} className="text-gray-600">
                  <span className="font-medium text-brand-700">{item.title}</span> – {item.description}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-brand-800">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-brand-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-600">
                  Shiksha Yogya Pvt. Ltd. Diamond Harbour Road, New Alipore Kolkata 700038
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-brand-600 mr-3 flex-shrink-0" />
                <a
                  href="tel:+917319367046"
                  className="text-gray-600 hover:text-brand-600 transition-colors duration-300"
                >
                  +91 7319367046
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-brand-600 mr-3 flex-shrink-0" />
                <a
                  href="mailto:shikshayogya@gmail.com"
                  className="text-gray-600 hover:text-brand-600 transition-colors duration-300"
                >
                  shikshayogya@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Shiksha Yogya Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

