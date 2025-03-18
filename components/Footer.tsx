import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

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
              Your trusted partner for overseas education consultancy, providing expert guidance for studying abroad in
              prestigious universities worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
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
                href="#"
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
            <h3 className="text-lg font-semibold mb-6 text-brand-800">Study Destinations</h3>
            <ul className="space-y-3">
              {["USA", "UK", "Canada", "Australia", "Germany", "Italy", "France", "Ireland"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/destinations#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-brand-600 transition-colors duration-300"
                  >
                    Study in {item}
                  </Link>
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
                  Shiksha Yogya Pvt. Ltd., 123 Education Street, New Delhi, India 110001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-brand-600 mr-3 flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-gray-600 hover:text-brand-600 transition-colors duration-300"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-brand-600 mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@shikshayogya.com"
                  className="text-gray-600 hover:text-brand-600 transition-colors duration-300"
                >
                  info@shikshayogya.com
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

