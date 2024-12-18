import { Blocks, Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";


function Footer() {
  return (
    <footer className="relative border-t border-gray-800/50 mt-auto bg-gray-900/40">
      {/* Gradient border effect */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Brand and Tagline */}
          <div className="flex items-center gap-3 text-gray-300">
            <Blocks className="size-6 text-blue-500" />
            <span className="text-sm font-medium">
              Built for developers, by developers
            </span>
          </div>
          
          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link 
              href="/support" 
              className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
            >
              Support
            </Link>
            <Link 
              href="/privacy" 
              className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
            >
              Privacy
            </Link>
            <Link 
              href="/terms" 
              className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
            >
              Terms
            </Link>
          </div>
        </div>
        
        {/* Bottom Section with Copyright and Social Links */}
        <div className="mt-8 pt-6 border-t border-gray-800/50 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © Bittu Singh    All rights reserved.
          </p>
          
          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <Link 
              href="https://github.com/BittuSingh147" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 transition-colors"
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </Link>
            <Link 
              href="https://x.com/BittuSi56134973" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="size-5" />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/bittusingh14/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;