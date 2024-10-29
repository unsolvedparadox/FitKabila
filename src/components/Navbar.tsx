import React from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-black/95 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <Dumbbell className="h-8 w-8 text-purple-500" />
                <span className="text-white font-bold text-xl">FitKabila</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-white hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#about" className="text-white hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#services" className="text-white hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="#videos" className="text-white hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium">Videos</a>
              <a href="#contact" className="bg-purple-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-600">Contact</a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-purple-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-white hover:text-purple-500 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#about" className="text-white hover:text-purple-500 block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#services" className="text-white hover:text-purple-500 block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#videos" className="text-white hover:text-purple-500 block px-3 py-2 rounded-md text-base font-medium">Videos</a>
            <a href="#contact" className="bg-purple-500 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}