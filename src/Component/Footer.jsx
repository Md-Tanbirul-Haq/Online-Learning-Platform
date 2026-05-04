"use client";
import React from "react";
import { Link } from "@heroui/react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      
      <div className="mx-auto max-w-6xl px-6 py-10 grid gap-8 md:grid-cols-3">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
            <li>Email: ****@****.com</li>
            <li>Phone: +000 0000-000000</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex gap-5 text-xl">
            <Link href="#" className="text-gray-300 hover:text-white transition transform hover:scale-110">
              <FaFacebook />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition transform hover:scale-110">
              <CiYoutube />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition transform hover:scale-110">
              <FaLinkedin />
            </Link>
          </div>
        </div>

        {/* Terms & Privacy */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Legal</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-6xl px-6 py-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} SkillSphere. All rights reserved.
        </div>
      </div>

    </footer>
  );
};

export default Footer;