
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('trending');

  const nftItems = [
    {
      id: 1,
      name: 'Emerald Evening Gown',
      brand: 'Luxe Atelier',
      price: 150,
      totalFractions: 100,
      availableFractions: 42,
      image: '/placeholder.svg',
      category: 'Evening Wear',
      rarity: 'Rare'
    },
    {
      id: 2,
      name: 'Diamond Cufflinks',
      brand: 'Royal Jewelry',
      price: 89,
      totalFractions: 50,
      availableFractions: 23,
      image: '/placeholder.svg',
      category: 'Accessories',
      rarity: 'Epic'
    },
    {
      id: 3,
      name: 'Sapphire Necklace',
      brand: 'Celestial Gems',
      price: 220,
      totalFractions: 75,
      availableFractions: 15,
      image: '/placeholder.svg',
      category: 'Jewelry',
      rarity: 'Legendary'
    },
    {
      id: 4,
      name: 'Ruby Tiara',
      brand: 'Crown Jewels',
      price: 345,
      totalFractions: 25,
      availableFractions: 8,
      image: '/placeholder.svg',
      category: 'Headpieces',
      rarity: 'Mythic'
    },
    {
      id: 5,
      name: 'Gold Watch Collection',
      brand: 'TimeKeeper',
      price: 78,
      totalFractions: 200,
      availableFractions: 156,
      image: '/placeholder.svg',
      category: 'Watches',
      rarity: 'Common'
    },
    {
      id: 6,
      name: 'Platinum Bracelet',
      brand: 'Elite Fashion',
      price: 195,
      totalFractions: 60,
      availableFractions: 31,
      image: '/placeholder.svg',
      category: 'Jewelry',
      rarity: 'Rare'
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      case 'Rare': return 'bg-sapphire-500/20 text-sapphire-400 border-sapphire-500/30';
      case 'Epic': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Legendary': return 'bg-gold-500/20 text-gold-400 border-gold-500/30';
      case 'Mythic': return 'bg-ruby-500/20 text-ruby-400 border-ruby-500/30';
      default: return 'bg-white/20 text-white border-white/30';
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold gradient-text mb-4">Fractional NFT Marketplace</h1>
          <p className="text-white/70 text-lg">Invest in luxury fashion pieces through blockchain technology</p>
        </div>

        {/* Filters */}
        <Card className="glass-effect border-white/20 mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search luxury items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-48 bg-white/10 border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-black/90 border-white/20">
                  <SelectItem value="trending">Trending</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rarity">Rarity</SelectItem>
                  <SelectItem value="availability">Most Available</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="glass-effect border-white/20">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-playfair font-bold gradient-text mb-1">247</div>
              <div className="text-white/70 text-sm">Total Items</div>
            </CardContent>
          </Card>
          <Card className="glass-effect border-white/20">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-playfair font-bold text-emerald-400 mb-1">$2.4M</div>
              <div className="text-white/70 text-sm">Total Volume</div>
            </CardContent>
          </Card>
          <Card className="glass-effect border-white/20">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-playfair font-bold text-sapphire-400 mb-1">15K</div>
              <div className="text-white/70 text-sm">Active Traders</div>
            </CardContent>
          </Card>
          <Card className="glass-effect border-white/20">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-playfair font-bold text-ruby-400 mb-1">87%</div>
              <div className="text-white/70 text-sm">Avg. Ownership</div>
            </CardContent>
          </Card>
        </div>

        {/* NFT Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nftItems.map((item) => (
            <Card key={item.id} className="glass-effect border-white/20 hover:border-gold-400/50 transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="aspect-square bg-white/10 rounded-t-lg relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/50">Luxury Item Image</span>
                  </div>
                  <Badge className={`absolute top-3 left-3 ${getRarityColor(item.rarity)}`}>
                    {item.rarity}
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-playfair font-bold text-white text-lg group-hover:text-gold-400 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-white/70 text-sm">{item.brand}</p>
                    </div>
                    <Badge className="bg-white/10 text-white/70">
                      {item.category}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Price per fraction:</span>
                      <span className="text-gold-400 font-semibold">{item.price} FLY</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Available:</span>
                      <span className="text-white">{item.availableFractions}/{item.totalFractions}</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-gold-400 to-gold-600 h-2 rounded-full"
                        style={{ width: `${((item.totalFractions - item.availableFractions) / item.totalFractions) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Button asChild className="w-full gradient-gold text-black font-semibold">
                      <Link to={`/nft/${item.id}`}>View Details</Link>
                    </Button>
                    <Button variant="outline" className="w-full border-white/20 text-white hover:border-gold-400 hover:text-gold-400">
                      Quick Buy
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
