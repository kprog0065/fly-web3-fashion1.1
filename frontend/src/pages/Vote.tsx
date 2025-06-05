
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Navbar from '@/components/Navbar';

const Vote = () => {
  const [currentDesignIndex, setCurrentDesignIndex] = useState(0);
  const [rating, setRating] = useState(0);
  const [voted, setVoted] = useState(false);

  const designs = [
    {
      id: 1,
      title: 'Design #2401',
      category: 'Evening Wear',
      description: 'An elegant evening gown with intricate beadwork and flowing silhouette',
      image: '/placeholder.svg',
      votesCount: 1247
    },
    {
      id: 2,
      title: 'Design #2402',
      category: 'Accessories',
      description: 'Minimalist jewelry piece combining gold and emerald elements',
      image: '/placeholder.svg',
      votesCount: 892
    },
    {
      id: 3,
      title: 'Design #2403',
      category: 'Ready-to-Wear',
      description: 'Contemporary blazer with sustainable fabric and modern cut',
      image: '/placeholder.svg',
      votesCount: 1534
    }
  ];

  const stats = {
    designsVoted: 156,
    streak: 12,
    accuracy: 78,
    tokensEarned: 1240
  };

  const handleVote = (selectedRating: number) => {
    setRating(selectedRating);
    setVoted(true);
    
    // Auto advance to next design after 2 seconds
    setTimeout(() => {
      if (currentDesignIndex < designs.length - 1) {
        setCurrentDesignIndex(currentDesignIndex + 1);
        setRating(0);
        setVoted(false);
      }
    }, 2000);
  };

  const currentDesign = designs[currentDesignIndex];
  const progressPercentage = ((currentDesignIndex + 1) / designs.length) * 100;

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold gradient-text mb-4">Vote on New Designs</h1>
          <p className="text-white/70 text-lg">Shape the future of fashion and earn rewards for your predictions</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Voting Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progress Bar */}
            <Card className="glass-effect border-white/20">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white/70">Voting Progress</span>
                  <span className="text-white">{currentDesignIndex + 1} of {designs.length}</span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
              </CardContent>
            </Card>

            {/* Design Card */}
            <Card className="glass-effect border-white/20">
              <CardContent className="p-0">
                <div className="aspect-square bg-white/10 relative overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/50 text-xl">Anonymous Design</span>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-sapphire-500/20 text-sapphire-400 border-sapphire-500/30">
                    {currentDesign.category}
                  </Badge>
                  <Badge className="absolute top-4 right-4 bg-white/10 text-white border-white/20">
                    {currentDesign.votesCount} votes
                  </Badge>
                </div>
                
                <div className="p-6">
                  <h2 className="text-2xl font-playfair font-bold text-white mb-3">
                    {currentDesign.title}
                  </h2>
                  <p className="text-white/70 mb-6">
                    {currentDesign.description}
                  </p>

                  {!voted ? (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white">Rate this design (1-5 stars):</h3>
                      <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            onClick={() => handleVote(star)}
                            className={`text-4xl transition-colors hover:text-gold-400 ${
                              star <= rating ? 'text-gold-400' : 'text-white/30'
                            }`}
                          >
                            ★
                          </button>
                        ))}
                      </div>
                      <div className="flex space-x-3 mt-6">
                        <Button 
                          variant="outline" 
                          className="border-white/20 text-white hover:border-gold-400 hover:text-gold-400"
                          onClick={() => {
                            if (currentDesignIndex < designs.length - 1) {
                              setCurrentDesignIndex(currentDesignIndex + 1);
                              setRating(0);
                            }
                          }}
                        >
                          Skip
                        </Button>
                        <Button 
                          className="bg-ruby-600 hover:bg-ruby-700 text-white"
                          onClick={() => {/* Flag logic */}}
                        >
                          Flag
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="text-6xl mb-4">✓</div>
                      <h3 className="text-xl font-semibold text-emerald-400 mb-2">Vote Recorded!</h3>
                      <p className="text-white/70">You rated this design {rating} stars</p>
                      <div className="mt-4 p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                        <p className="text-emerald-400 font-medium">+5 FLY tokens earned</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Stats */}
          <div className="space-y-6">
            <Card className="glass-effect border-white/20">
              <CardHeader>
                <CardTitle className="text-white font-playfair">Your Voting Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 rounded-lg bg-white/5">
                  <div className="text-2xl font-playfair font-bold gradient-text mb-1">
                    {stats.designsVoted}
                  </div>
                  <div className="text-white/70 text-sm">Designs Voted</div>
                </div>
                
                <div className="text-center p-4 rounded-lg bg-white/5">
                  <div className="text-2xl font-playfair font-bold text-emerald-400 mb-1">
                    {stats.streak}
                  </div>
                  <div className="text-white/70 text-sm">Day Streak</div>
                </div>
                
                <div className="text-center p-4 rounded-lg bg-white/5">
                  <div className="text-2xl font-playfair font-bold text-sapphire-400 mb-1">
                    {stats.accuracy}%
                  </div>
                  <div className="text-white/70 text-sm">Accuracy Rate</div>
                </div>
                
                <div className="text-center p-4 rounded-lg bg-white/5">
                  <div className="text-2xl font-playfair font-bold text-gold-400 mb-1">
                    {stats.tokensEarned}
                  </div>
                  <div className="text-white/70 text-sm">FLY Tokens Earned</div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/20">
              <CardHeader>
                <CardTitle className="text-white font-playfair">Voting Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full mt-2"></div>
                  <p className="text-white/70 text-sm">Consider design innovation and market appeal</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                  <p className="text-white/70 text-sm">Vote consistently to improve your accuracy</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sapphire-400 rounded-full mt-2"></div>
                  <p className="text-white/70 text-sm">Top predictors earn bonus rewards</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vote;
