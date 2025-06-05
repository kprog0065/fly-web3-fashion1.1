
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Navbar from '@/components/Navbar';

const UserProfile = () => {
  const userStats = [
    { label: 'Designs Viewed', value: '1,247' },
    { label: 'Votes Cast', value: '892' },
    { label: 'Successful Predictions', value: '324' },
    { label: 'Accuracy Rate', value: '76%' }
  ];

  const topRatedPieces = [
    { name: 'Emerald Evening Gown', designer: 'Anonymous', rating: 5, status: 'Winner' },
    { name: 'Diamond Cufflinks', designer: 'Anonymous', rating: 5, status: 'Top 10' },
    { name: 'Sapphire Necklace', designer: 'Anonymous', rating: 4, status: 'Featured' }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="glass-effect border-white/20 lg:col-span-1">
            <CardContent className="p-6 text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src="" />
                <AvatarFallback className="bg-gold-500 text-black text-2xl font-bold">JD</AvatarFallback>
              </Avatar>
              <h2 className="text-2xl font-playfair font-bold text-white mb-2">John Doe</h2>
              <p className="text-white/70 mb-4">Fashion Enthusiast</p>
              <Badge className="bg-gold-500/20 text-gold-400 border-gold-500/30">
                Premium Member
              </Badge>
              <div className="mt-6 space-y-3">
                <Button variant="outline" className="w-full border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black">
                  Edit Profile
                </Button>
                <Button variant="ghost" className="w-full text-white/70 hover:text-white">
                  Notification Settings
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Stats Grid */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="glass-effect border-white/20">
              <CardHeader>
                <CardTitle className="text-white font-playfair">Platform Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {userStats.map((stat, index) => (
                    <div key={index} className="text-center p-4 rounded-lg bg-white/5">
                      <div className="text-2xl font-playfair font-bold gradient-text mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-white/70">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Rated Pieces */}
            <Card className="glass-effect border-white/20">
              <CardHeader>
                <CardTitle className="text-white font-playfair">Your Top-Rated Pieces</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topRatedPieces.map((piece, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">{piece.name}</h4>
                        <p className="text-white/70 text-sm">by {piece.designer}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={`text-lg ${i < piece.rating ? 'text-gold-400' : 'text-white/30'}`}>
                              ★
                            </span>
                          ))}
                        </div>
                        <Badge 
                          className={`
                            ${piece.status === 'Winner' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : ''}
                            ${piece.status === 'Top 10' ? 'bg-sapphire-500/20 text-sapphire-400 border-sapphire-500/30' : ''}
                            ${piece.status === 'Featured' ? 'bg-ruby-500/20 text-ruby-400 border-ruby-500/30' : ''}
                          `}
                        >
                          {piece.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="glass-effect border-white/20">
              <CardHeader>
                <CardTitle className="text-white font-playfair">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5">
                    <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-white text-sm">Voted on 5 new designs</p>
                      <p className="text-white/60 text-xs">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-white text-sm">Earned 50 Fly tokens from successful prediction</p>
                      <p className="text-white/60 text-xs">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5">
                    <div className="w-2 h-2 bg-sapphire-400 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-white text-sm">Purchased fractional NFT</p>
                      <p className="text-white/60 text-xs">3 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
