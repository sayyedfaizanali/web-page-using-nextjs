import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaAmazon } from "react-icons/fa"; // Import Amazon and WhatsApp

const YEAR = new Date().getFullYear();

const LINKS = [
  {
    title: "Our Products",
    href: "#",
  },
  {
    title: "Why Us?",
    href: "/#whyus",
  },
  {
    title: "About Us",
    href: "/#aboutus",
  },
];

const SOCIAL_LINKS = [
  { icon: <FaFacebookF />, href: "https://facebook.com" },
  { icon: <FaInstagram />, href: "https://instagram.com" },
  { icon: <FaWhatsapp />, href: "https://whatsapp.com" },
  { icon: <FaAmazon />, href: "https://amazon.com" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12 pb-4">
        {/* First Column: About Us */}
        <div className="flex flex-col  md:items-start">
          <ul className="flex flex-col gap-y-4">
            {LINKS.map(({ title, href }) => (
              <li key={title}>
                <Link
                  href={href}
                  className="text-sm md:text-base hover:text-customeGreen transition-colors duration-300"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Second Column: Contact Us and Social Icons */}
        <div className="flex flex-col md:items-start">
          <ul className="flex flex-col gap-y-4">
            <li>
              <a
                href="/#our-videos"
                className="text-sm md:text-base hover:text-customeGreen transition-colors duration-300"
              >
                Explore and Shops
              </a>
            </li>
            <li>
              <a
                href="/#testimonial"
                className="text-sm md:text-base hover:text-customeGreen transition-colors duration-300"
              >
                Customer Feedback
              </a>
            </li>
          </ul>

          {/* Social Media Icons */}
        </div>

        <div className="flex flex-col">
          <Link
            href="/#contactus"
            className="rounded-full text-center bg-white text-black hover:bg-customeGreen hover:text-white transition-colors duration-300 p-2 transform motion-safe:hover:scale-110"
          >
            Contact Us
          </Link>

          <ul className="flex place-content-center gap-x-6 mt-6">
            {SOCIAL_LINKS.map(({ icon, href }, index) => (
              <li key={index} className="transform motion-safe:hover:scale-110">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-customeGreen transition-colors duration-300 text-xl"
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bottom-0 text-center p-4 w-full bg-customeBlue text-white">
        <span className="text-sm md:text-base">
          &copy; {YEAR} THINKLife. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
