
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, User, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Vote', path: '/vote' },
    { name: 'Rewards', path: '/rewards' },
    { name: 'Discounts', path: '/discounts' },
  ];

  const handleWalletConnect = () => {
    setIsConnected(!isConnected);
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/a9b1a4d1-44fd-4a87-97d8-58d4b4c21b62.png" 
              alt="Fly Logo" 
              className="h-8 w-8"
            />
            <span className="text-2xl font-playfair font-bold gradient-text">Fly</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-gold-400 ${
                  location.pathname === item.path ? 'text-gold-400' : 'text-white/80'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop User Menu & Wallet */}
          <div className="hidden md:flex items-center space-x-4">
            {isConnected && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-white hover:text-gold-400">
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black/90 border-white/20">
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="text-white hover:text-gold-400">
                      User Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/wallet" className="text-white hover:text-gold-400">
                      Wallet Contents
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-white/20" />
                  <DropdownMenuItem className="text-white hover:text-gold-400">
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            
            <Button
              onClick={handleWalletConnect}
              className={`${
                isConnected 
                  ? 'bg-emerald-600 hover:bg-emerald-700' 
                  : 'gradient-gold hover:opacity-90'
              } text-black font-semibold`}
            >
              <Wallet className="h-4 w-4 mr-2" />
              {isConnected ? 'Connected' : 'Connect Wallet'}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-gold-400 ${
                    location.pathname === item.path ? 'text-gold-400' : 'text-white/80'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {isConnected && (
                <>
                  <Link
                    to="/profile"
                    className="text-sm font-medium text-white/80 hover:text-gold-400"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    User Profile
                  </Link>
                  <Link
                    to="/wallet"
                    className="text-sm font-medium text-white/80 hover:text-gold-400"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Wallet Contents
                  </Link>
                </>
              )}
              
              <Button
                onClick={handleWalletConnect}
                className={`w-full ${
                  isConnected 
                    ? 'bg-emerald-600 hover:bg-emerald-700' 
                    : 'gradient-gold hover:opacity-90'
                } text-black font-semibold`}
              >
                <Wallet className="h-4 w-4 mr-2" />
                {isConnected ? 'Connected' : 'Connect Wallet'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
