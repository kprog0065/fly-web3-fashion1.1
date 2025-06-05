
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navbar from '@/components/Navbar';

const Discounts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBrand, setFilterBrand] = useState('all');

  const discountItems = [
    {
      id: 1,
      name: 'Luxury Silk Scarf',
      brand: 'Hermès',
      originalPrice: 450,
      discountedPrice: 315,
      discount: 30,
      category: 'Accessories',
      image: '/placeholder.svg',
      requirement: 'Gold Member',
      tokensRequired: 250,
      available: true
    },
    {
      id: 2,
      name: 'Premium Leather Handbag',
      brand: 'Gucci',
      originalPrice: 2200,
      discountedPrice: 1540,
      discount: 30,
      category: 'Handbags',
      image: '/placeholder.svg',
      requirement: 'NFT Holder',
      tokensRequired: 500,
      available: true
    },
    {
      id: 3,
      name: 'Diamond Earrings',
      brand: 'Tiffany & Co.',
      originalPrice: 1800,
      discountedPrice: 1260,
      discount: 30,
      category: 'Jewelry',
      image: '/placeholder.svg',
      requirement: 'Platinum Member',
      tokensRequired: 800,
      available: false
    },
    {
      id: 4,
      name: 'Cashmere Coat',
      brand: 'Burberry',
      originalPrice: 3500,
      discountedPrice: 2450,
      discount: 30,
      category: 'Outerwear',
      image: '/placeholder.svg',
      requirement: '5+ NFTs',
      tokensRequired: 1000,
      available: true
    },
    {
      id: 5,
      name: 'Swiss Watch',
      brand: 'Rolex',
      originalPrice: 8500,
      discountedPrice: 5950,
      discount: 30,
      category: 'Watches',
      image: '/placeholder.svg',
      requirement: 'Elite Status',
      tokensRequired: 2000,
      available: true
    },
    {
      id: 6,
      name: 'Designer Sunglasses',
      brand: 'Tom Ford',
      originalPrice: 650,
      discountedPrice: 455,
      discount: 30,
      category: 'Eyewear',
      image: '/placeholder.svg',
      requirement: 'Silver Member',
      tokensRequired: 150,
      available: true
    }
  ];

  const userCredits = {
    flyTokens: 2450,
    luxuryCredits: 850,
    discountVouchers: 3
  };

  const getRequirementColor = (requirement: string) => {
    if (requirement.includes('Silver')) return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    if (requirement.includes('Gold')) return 'bg-gold-500/20 text-gold-400 border-gold-500/30';
    if (requirement.includes('Platinum')) return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
    if (requirement.includes('Elite')) return 'bg-ruby-500/20 text-ruby-400 border-ruby-500/30';
    return 'bg-sapphire-500/20 text-sapphire-400 border-sapphire-500/30';
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold gradient-text mb-4">Luxury Discounts</h1>
          <p className="text-white/70 text-lg">Exclusive deals from premium fashion brands using your Fly tokens</p>
        </div>

        {/* User Credits Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="glass-effect border-white/20">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-playfair font-bold gradient-text mb-1">
                {userCredits.flyTokens.toLocaleString()}
              </div>
              <div className="text-white/70 text-sm">FLY Tokens</div>
            </CardContent>
          </Card>
          <Card className="glass-effect border-white/20">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-playfair font-bold text-emerald-400 mb-1">
                ${userCredits.luxuryCredits.toLocaleString()}
              </div>
              <div className="text-white/70 text-sm">Luxury Credits</div>
            </CardContent>
          </Card>
          <Card className="glass-effect border-white/20">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-playfair font-bold text-sapphire-400 mb-1">
                {userCredits.discountVouchers}
              </div>
              <div className="text-white/70 text-sm">Discount Vouchers</div>
            </CardContent>
          </Card>
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
              <Select value={filterBrand} onValueChange={setFilterBrand}>
                <SelectTrigger className="w-full md:w-48 bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Filter by brand" />
                </SelectTrigger>
                <SelectContent className="bg-black/90 border-white/20">
                  <SelectItem value="all">All Brands</SelectItem>
                  <SelectItem value="hermes">Hermès</SelectItem>
                  <SelectItem value="gucci">Gucci</SelectItem>
                  <SelectItem value="tiffany">Tiffany & Co.</SelectItem>
                  <SelectItem value="burberry">Burberry</SelectItem>
                  <SelectItem value="rolex">Rolex</SelectItem>
                  <SelectItem value="tomford">Tom Ford</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Discount Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {discountItems.map((item) => (
            <Card key={item.id} className={`glass-effect transition-all duration-300 group ${
              item.available ? 'border-white/20 hover:border-gold-400/50' : 'border-white/10 opacity-60'
            }`}>
              <CardContent className="p-0">
                <div className="aspect-square bg-white/10 rounded-t-lg relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/50">Luxury Item</span>
                  </div>
                  <Badge className="absolute top-3 left-3 bg-ruby-500/20 text-ruby-400 border-ruby-500/30">
                    -{item.discount}%
                  </Badge>
                  {!item.available && (
                    <Badge className="absolute top-3 right-3 bg-white/10 text-white/50">
                      Locked
                    </Badge>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className={`font-playfair font-bold text-lg mb-1 ${
                      item.available ? 'text-white group-hover:text-gold-400' : 'text-white/50'
                    } transition-colors`}>
                      {item.name}
                    </h3>
                    <p className="text-white/70 text-sm">{item.brand}</p>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70 line-through">${item.originalPrice}</span>
                      <span className="text-emerald-400 font-bold text-xl">${item.discountedPrice}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Cost:</span>
                      <span className="text-gold-400 font-semibold">{item.tokensRequired} FLY</span>
                    </div>

                    <Badge className={getRequirementColor(item.requirement)}>
                      {item.requirement}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    {item.available ? (
                      userCredits.flyTokens >= item.tokensRequired ? (
                        <Button className="w-full gradient-gold text-black font-semibold">
                          Purchase with FLY
                        </Button>
                      ) : (
                        <Button disabled className="w-full bg-white/10 text-white/50">
                          Insufficient FLY Tokens
                        </Button>
                      )
                    ) : (
                      <Button disabled className="w-full bg-white/10 text-white/50">
                        Unlock Required
                      </Button>
                    )}
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-white/20 text-white hover:border-gold-400 hover:text-gold-400"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partner Brands */}
        <Card className="glass-effect border-white/20 mt-12">
          <CardHeader>
            <CardTitle className="text-white font-playfair text-center">Our Luxury Partners</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center">
              {['Hermès', 'Gucci', 'Tiffany & Co.', 'Burberry', 'Rolex', 'Tom Ford'].map((brand, index) => (
                <div key={index} className="text-white/70 hover:text-gold-400 transition-colors cursor-pointer">
                  <div className="w-20 h-20 bg-white/5 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-xs font-medium">{brand}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Discounts;
