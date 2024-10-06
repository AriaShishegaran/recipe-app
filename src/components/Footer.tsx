import React from 'react'
import { Facebook, Twitter, Instagram } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">PizzaPerfection</h3>
            <p className="text-sm">Discover the art of pizza making with our curated recipes.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li><a href="/" className="hover:text-gray-300">Home</a></li>
              <li><a href="/recipes" className="hover:text-gray-300">Recipes</a></li>
              <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
              <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300"><Facebook /></a>
              <a href="#" className="text-white hover:text-gray-300"><Twitter /></a>
              <a href="#" className="text-white hover:text-gray-300"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-center">
          &copy; {new Date().getFullYear()} PizzaPerfection. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer