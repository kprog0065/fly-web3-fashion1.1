
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';

const Rewards = () => {
  const userLevel = {
    current: 'Gold',
    progress: 75,
    nextLevel: 'Platinum',
    pointsNeeded: 250
  };

  const badges = [
    { name: 'First Vote', description: 'Cast your first design vote', earned: true, rarity: 'Common' },
    { name: 'Trendsetter', description: 'Predicted 10 winning designs', earned: true, rarity: 'Rare' },
    { name: 'Fashion Oracle', description: '90% prediction accuracy', earned: true, rarity: 'Epic' },
    { name: 'Elite Collector', description: 'Own 5+ luxury NFTs', earned: false, rarity: 'Legendary' },
    { name: 'Diamond Hands', description: 'Hold NFTs for 6+ months', earned: false, rarity: 'Mythic' }
  ];

  const milestones = [
    { title: 'Vote on 100 Designs', reward: '100 FLY', progress: 86, completed: false },
    { title: 'Weekly Voting Streak', reward: '50 FLY + Badge', progress: 100, completed: true },
    { title: 'Accuracy Above 80%', reward: 'Premium Status', progress: 75, completed: false },
    { title: 'Refer 5 Friends', reward: '500 FLY', progress: 40, completed: false }
  ];

  const claimableRewards = [
    { type: 'Daily Voting', amount: '25 FLY', available: true },
    { type: 'Weekly Bonus', amount: '100 FLY', available: true },
    { type: 'Prediction Streak', amount: '75 FLY', available: true },
    { type: 'Monthly Challenge', amount: '200 FLY', available: false, timeLeft: '5 days' }
  ];

  const recentActivity = [
    { action: 'Earned voting reward', amount: '+25 FLY', time: '2 hours ago', type: 'earned' },
    { action: 'Completed milestone', amount: '+100 FLY', time: '1 day ago', type: 'earned' },
    { action: 'Claimed staking reward', amount: '+15 FLY', time: '2 days ago', type: 'earned' },
    { action: 'Purchased NFT fraction', amount: '-150 FLY', time: '3 days ago', type: 'spent' }
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
      
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold gradient-text mb-4">Profile Rewards</h1>
          <p className="text-white/70 text-lg">Track your achievements and claim your earned rewards</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-white/10 p-1">
            <TabsTrigger value="overview" className="text-white data-[state=active]:text-black">Overview</TabsTrigger>
            <TabsTrigger value="badges" className="text-white data-[state=active]:text-black">Badges</TabsTrigger>
            <TabsTrigger value="milestones" className="text-white data-[state=active]:text-black">Milestones</TabsTrigger>
            <TabsTrigger value="activity" className="text-white data-[state=active]:text-black">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* User Level Progress */}
            <Card className="glass-effect border-white/20">
              <CardHeader>
                <CardTitle className="text-white font-playfair">Membership Level</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-gold-500/20 text-gold-400 border-gold-500/30 text-lg px-4 py-2">
                    {userLevel.current} Member
                  </Badge>
                  <div className="text-right">
                    <div className="text-white/70 text-sm">Next: {userLevel.nextLevel}</div>
                    <div className="text-white text-sm">{userLevel.pointsNeeded} points needed</div>
                  </div>
                </div>
                <Progress value={userLevel.progress} className="h-3" />
              </CardContent>
            </Card>

            {/* Claimable Rewards */}
            <Card className="glass-effect border-white/20">
              <CardHeader>
                <CardTitle className="text-white font-playfair">Claimable Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {claimableRewards.map((reward, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                      <div>
                        <div className="text-white font-medium">{reward.type}</div>
                        <div className="text-gold-400 font-semibold">{reward.amount}</div>
                        {!reward.available && (
                          <div className="text-white/60 text-sm">Available in {reward.timeLeft}</div>
                        )}
                      </div>
                      {reward.available ? (
                        <Button size="sm" className="gradient-gold text-black font-semibold">
                          Claim
                        </Button>
                      ) : (
                        <Button size="sm" variant="ghost" disabled className="text-white/50">
                          Locked
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="glass-effect border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-playfair font-bold gradient-text mb-1">2,450</div>
                  <div className="text-white/70 text-sm">Total FLY Earned</div>
                </CardContent>
              </Card>
              <Card className="glass-effect border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-playfair font-bold text-emerald-400 mb-1">12</div>
                  <div className="text-white/70 text-sm">Badges Earned</div>
                </CardContent>
              </Card>
              <Card className="glass-effect border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-playfair font-bold text-sapphire-400 mb-1">8</div>
                  <div className="text-white/70 text-sm">Milestones</div>
                </CardContent>
              </Card>
              <Card className="glass-effect border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-playfair font-bold text-ruby-400 mb-1">15</div>
                  <div className="text-white/70 text-sm">Day Streak</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="badges" className="space-y-6">
            <Card className="glass-effect border-white/20">
              <CardHeader>
                <CardTitle className="text-white font-playfair">Achievement Badges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {badges.map((badge, index) => (
                    <Card key={index} className={`glass-effect ${badge.earned ? 'border-gold-400/50' : 'border-white/10'} hover:border-gold-400/50 transition-all`}>
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${badge.earned ? 'bg-gold-500/20' : 'bg-white/10'}`}>
                          <span className="text-2xl">{badge.earned ? '🏆' : '🔒'}</span>
                        </div>
                        <h3 className={`font-semibold mb-2 ${badge.earned ? 'text-white' : 'text-white/50'}`}>
                          {badge.name}
                        </h3>
                        <p className={`text-sm mb-3 ${badge.earned ? 'text-white/70' : 'text-white/40'}`}>
                          {badge.description}
                        </p>
                        <Badge className={getRarityColor(badge.rarity)}>
                          {badge.rarity}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="milestones" className="space-y-6">
            <Card className="glass-effect border-white/20">
              <CardHeader>
                <CardTitle className="text-white font-playfair">Progress Milestones</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="p-4 rounded-lg bg-white/5">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-semibold text-white">{milestone.title}</h4>
                        <div className="flex items-center space-x-2">
                          <span className="text-gold-400 font-semibold">{milestone.reward}</span>
                          {milestone.completed && <span className="text-emerald-400">✓</span>}
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Progress value={milestone.progress} className="flex-1 h-2" />
                        <span className="text-white/70 text-sm">{milestone.progress}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card className="glass-effect border-white/20">
              <CardHeader>
                <CardTitle className="text-white font-playfair">Recent Reward Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${
                          activity.type === 'earned' ? 'bg-emerald-400' : 'bg-ruby-400'
                        }`}></div>
                        <div>
                          <div className="text-white font-medium">{activity.action}</div>
                          <div className="text-white/60 text-sm">{activity.time}</div>
                        </div>
                      </div>
                      <div className={`font-semibold ${
                        activity.type === 'earned' ? 'text-emerald-400' : 'text-ruby-400'
                      }`}>
                        {activity.amount}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Rewards;
