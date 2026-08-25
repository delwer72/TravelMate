import Link from "next/link";
import { FiTwitter, FiInstagram, FiGithub, FiMail, FiArrowRight } from "react-icons/fi";
import { LuMountain } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="w-full bg-background border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Section - Newsletter (Premium Card Style) */}
        <div className="flex flex-col lg:flex-row justify-between items-center bg-surface/50 p-8 md:p-10 rounded-[2rem] border border-border mb-16 shadow-lg">
          <div className="mb-6 lg:mb-0 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-foreground mb-2">Ready for your next adventure?</h3>
            <p className="text-foreground/70 text-sm">Join our newsletter for the latest travel tips and feature updates.</p>
          </div>
          <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full sm:w-80 px-6 py-3.5 bg-background border border-border rounded-full text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
            />
            <button className="px-8 py-3.5 bg-primary text-white rounded-full font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 flex-shrink-0 shadow-[0_0_15px_rgba(255,102,0,0.4)]">
              Subscribe <FiArrowRight className="text-lg" />
            </button>
          </div>
        </div>

        {/* Middle Section - Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 border border-primary rounded-xl">
                <LuMountain className="text-primary text-xl" />
              </div>
              <span className="text-2xl font-bold text-foreground">TravelMate</span>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed mb-6">
              The ultimate platform to plan trips, track budgets, and collaborate with friends in real-time. Travel smarter, together.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors"><FiTwitter /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors"><FiInstagram /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors"><FiGithub /></a>
            </div>
          </div>

          {/* Product Links */}
          <div className="text-center md:text-left">
            <h4 className="text-foreground font-bold mb-6 uppercase text-sm tracking-wider">Product</h4>
            <ul className="space-y-4 text-sm text-foreground/60">
              <li><Link href="/destinations" className="hover:text-primary transition-colors">Explore Destinations</Link></li>
              <li><Link href="/trips" className="hover:text-primary transition-colors">Trip Planner</Link></li>
              <li><Link href="/budget" className="hover:text-primary transition-colors">Budget Tracker</Link></li>
              <li><Link href="/reviews" className="hover:text-primary transition-colors">Community Reviews</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="text-center md:text-left">
            <h4 className="text-foreground font-bold mb-6 uppercase text-sm tracking-wider">Resources</h4>
            <ul className="space-y-4 text-sm text-foreground/60">
              <li><Link href="/blog" className="hover:text-primary transition-colors">Travel Blog</Link></li>
              <li><Link href="/guides" className="hover:text-primary transition-colors">City Guides</Link></li>
              <li><Link href="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="text-center md:text-left">
            <h4 className="text-foreground font-bold mb-6 uppercase text-sm tracking-wider">Legal</h4>
            <ul className="space-y-4 text-sm text-foreground/60">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Support</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section - Copyright */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground/50">
          <p>© {new Date().getFullYear()} TravelMate Inc. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <FiMail className="text-primary text-base" />
            <span className="font-medium hover:text-foreground transition-colors cursor-pointer">support@travelmate.com</span>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;