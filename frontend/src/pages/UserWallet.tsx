
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';

const UserWallet = () => {
  const tokenBalance = {
    fly: 2450.75,
    sui: 125.30,
    usdc: 500.00
  };

  const nftHoldings = [
    { name: 'Emerald Evening Gown #1/100', fraction: '15%', value: '$450', image: '/placeholder.svg' },
    { name: 'Diamond Cufflinks #1/50', fraction: '8%', value: '$280', image: '/placeholder.svg' },
    { name: 'Sapphire Necklace #1/75', fraction: '12%', value: '$360', image: '/placeholder.svg' }
  ];

  const transactions = [
    { type: 'Earned', description: 'Voting rewards', amount: '+50 FLY', time: '2 hours ago', status: 'completed' },
    { type: 'Purchase', description: 'Fractional NFT', amount: '-150 FLY', time: '1 day ago', status: 'completed' },
    { type: 'Reward', description: 'Successful prediction', amount: '+25 FLY', time: '2 days ago', status: 'completed' },
    { type: 'Stake', description: 'Staking rewards', amount: '+12.5 FLY', time: '3 days ago', status: 'completed' }
  ];

  const claimableRewards = [
    { type: 'Voting Rewards', amount: '25 FLY', available: true },
    { type: 'Prediction Bonus', amount: '40 FLY', available: true },
    { type: 'Staking Returns', amount: '15.5 FLY', available: false, timeLeft: '2 days' }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-playfair font-bold gradient-text mb-2">Wallet Contents</h1>
          <p className="text-white/70">Manage your tokens, NFTs, and rewards</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-white/10 p-1">
            <TabsTrigger value="overview" className="text-white data-[state=active]:text-black">Overview</TabsTrigger>
            <TabsTrigger value="nfts" className="text-white data-[state=active]:text-black">NFTs</TabsTrigger>
            <TabsTrigger value="transactions" className="text-white data-[state=active]:text-black">Transactions</TabsTrigger>
            <TabsTrigger value="rewards" className="text-white data-[state=active]:text-black">Rewards</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Token Balances */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="glass-effect border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-playfair font-bold gradient-text mb-2">
                    {tokenBalance.fly.toLocaleString()}
                  </div>
                  <div className="text-white/70 mb-4">FLY Tokens</div>
                  <Button size="sm" className="gradient-gold text-black font-semibold">
                    Stake
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="glass-effect border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-playfair font-bold text-sapphire-400 mb-2">
                    {tokenBalance.sui.toLocaleString()}
                  </div>
                  <div className="text-white/70 mb-4">SUI</div>
                  <Button size="sm" variant="outline" className="border-sapphire-400 text-sapphire-400 hover:bg-sapphire-400 hover:text-black">
                    Swap
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="glass-effect border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-playfair font-bold text-emerald-400 mb-2">
                    ${tokenBalance.usdc.toLocaleString()}
                  </div>
                  <div className="text-white/70 mb-4">USDC</div>
                  <Button size="sm" variant="outline" className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black">
                    Convert
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Portfolio Summary */}
            <Card className="glass-effect border-white/20">
              <CardHeader>
                <CardTitle className="text-white font-playfair">Portfolio Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-4 rounded-lg bg-white/5">
                    <div className="text-xl font-playfair font-bold text-white mb-1">$3,240</div>
                    <div className="text-sm text-white/70">Total Value</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5">
                    <div className="text-xl font-playfair font-bold text-emerald-400 mb-1">+$127</div>
                    <div className="text-sm text-white/70">24h Change</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5">
                    <div className="text-xl font-playfair font-bold text-white mb-1">3</div>
                    <div className="text-sm text-white/70">NFTs Owned</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5">
                    <div className="text-xl font-playfair font-bold text-gold-400 mb-1">4.2%</div>
                    <div className="text-sm text-white/70">APY Staking</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="nfts" className="space-y-6">
            <Card className="glass-effect border-white/20">
              <CardHeader>
                <CardTitle className="text-white font-playfair">Fractional NFT Holdings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {nftHoldings.map((nft, index) => (
                    <Card key={index} className="glass-effect border-white/10 hover:border-gold-400/50 transition-all">
                      <CardContent className="p-4">
                        <div className="aspect-square bg-white/10 rounded-lg mb-4 flex items-center justify-center">
                          <span className="text-white/50">NFT Image</span>
                        </div>
                        <h4 className="font-semibold text-white mb-2">{nft.name}</h4>
                        <div className="flex justify-between items-center mb-3">
                          <Badge className="bg-gold-500/20 text-gold-400 border-gold-500/30">
                            {nft.fraction}
                          </Badge>
                          <span className="text-emerald-400 font-semibold">{nft.value}</span>
                        </div>
                        <Button size="sm" variant="outline" className="w-full border-white/20 text-white hover:border-gold-400 hover:text-gold-400">
                          Manage
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transactions" className="space-y-6">
            <Card className="glass-effect border-white/20">
              <CardHeader>
                <CardTitle className="text-white font-playfair">Transaction History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((tx, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${
                          tx.type === 'Earned' || tx.type === 'Reward' ? 'bg-emerald-400' :
                          tx.type === 'Purchase' ? 'bg-ruby-400' : 'bg-gold-400'
                        }`}></div>
                        <div>
                          <div className="text-white font-medium">{tx.type}</div>
                          <div className="text-white/70 text-sm">{tx.description}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-semibold ${
                          tx.amount.startsWith('+') ? 'text-emerald-400' : 'text-ruby-400'
                        }`}>
                          {tx.amount}
                        </div>
                        <div className="text-white/60 text-sm">{tx.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rewards" className="space-y-6">
            <Card className="glass-effect border-white/20">
              <CardHeader>
                <CardTitle className="text-white font-playfair">Claimable Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {claimableRewards.map((reward, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                      <div>
                        <div className="text-white font-medium">{reward.type}</div>
                        <div className="text-gold-400 font-semibold">{reward.amount}</div>
                      </div>
                      {reward.available ? (
                        <Button size="sm" className="gradient-gold text-black font-semibold">
                          Claim
                        </Button>
                      ) : (
                        <div className="text-right">
                          <div className="text-white/50 text-sm">Available in</div>
                          <div className="text-white/70 text-sm">{reward.timeLeft}</div>
                        </div>
                      )}
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

export default UserWallet;
