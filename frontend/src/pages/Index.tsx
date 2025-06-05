
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';

const Index = () => {
  const features = [
    {
      title: 'Fractional NFT Marketplace',
      description: 'Invest in luxury fashion pieces through blockchain technology',
      link: '/marketplace',
      gradient: 'from-gold-400 to-gold-600'
    },
    {
      title: 'Vote on New Designs',
      description: 'Shape the future of fashion and earn rewards for your predictions',
      link: '/vote',
      gradient: 'from-emerald-400 to-emerald-600'
    },
    {
      title: 'Exclusive Rewards',
      description: 'Unlock luxury benefits and earn Fly tokens for your participation',
      link: '/rewards',
      gradient: 'from-sapphire-400 to-sapphire-600'
    },
    {
      title: 'Luxury Discounts',
      description: 'Access exclusive deals from premium fashion brands',
      link: '/discounts',
      gradient: 'from-ruby-400 to-ruby-600'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">
            The Future of
            <span className="block gradient-text">Luxury Fashion</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            A next-generation platform blending blockchain technology with luxury fashion. 
            Trade fractional ownership, vote on emerging talent, and unlock exclusive rewards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="gradient-gold text-black font-semibold text-lg px-8 py-3 h-auto">
              <Link to="/marketplace">Explore Marketplace</Link>
            </Button>
            <Button asChild variant="outline" className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black text-lg px-8 py-3 h-auto">
              <Link to="/vote">Start Voting</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-playfair font-bold text-center mb-16 gradient-text">
            Discover the Platform
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass-effect border-white/10 hover:border-gold-400/50 transition-all duration-300 group">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} mb-4 flex items-center justify-center`}>
                    <div className="w-6 h-6 bg-white rounded-full opacity-80"></div>
                  </div>
                  <h3 className="text-xl font-playfair font-semibold mb-3 text-white group-hover:text-gold-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 mb-6 flex-grow">
                    {feature.description}
                  </p>
                  <Button asChild variant="ghost" className="text-gold-400 hover:text-gold-300 p-0 h-auto justify-start">
                    <Link to={feature.link}>Explore →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gold-500/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-playfair font-bold gradient-text mb-2">$2.4M+</div>
              <div className="text-white/80">Total Value Traded</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-playfair font-bold gradient-text mb-2">15K+</div>
              <div className="text-white/80">Active Voters</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-playfair font-bold gradient-text mb-2">500+</div>
              <div className="text-white/80">Luxury Partners</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
