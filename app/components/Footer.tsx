'use client';

import React from 'react';
import {
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaLinkedin,
  FaThreads,
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#fce4ec] to-[#ede7f6] text-gray-800 text-sm ">
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-2">Rustic AI</h3>
            <p>The AI Design Studio</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Products</h4>
            <ul className="space-y-1">
              <li>Thumbnail Generator</li>
              <li>Catalogue Generator</li>
              <li>Branded Creatives</li>
              <li>Batch Processing</li>
              <li>Train your own AI</li>
              <li>AI Templates</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Tools</h4>
            <ul className="space-y-1">
              <li>Image Generator</li>
              <li>AI Eraser</li>
              <li>AI Shadow</li>
              <li>Image Upscaler</li>
              <li>Background Remover</li>
              <li>Logo Mockup</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1">
              <li>About us</li>
              <li>Pricing</li>
              <li>FAQ</li>
              <li>Blogs</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex gap-4 text-xl mb-4 md:mb-0">
            <FaXTwitter className="hover:text-black cursor-pointer" />
            <FaThreads className="hover:text-black cursor-pointer" />
            <FaInstagram className="hover:text-black cursor-pointer" />
            <FaYoutube className="hover:text-black cursor-pointer" />
            <FaLinkedin className="hover:text-black cursor-pointer" />
            <FaPinterest className="hover:text-black cursor-pointer" />
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>

        <div className="text-center text-xs mt-8 text-gray-600">
          © 2025 Fluttering Infotech OPC Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
