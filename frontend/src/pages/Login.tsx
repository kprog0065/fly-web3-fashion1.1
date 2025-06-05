
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Wallet } from 'lucide-react';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleWalletConnect = async () => {
    setIsLoading(true);
    // Simulate wallet connection
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <img 
              src="/lovable-uploads/a9b1a4d1-44fd-4a87-97d8-58d4b4c21b62.png" 
              alt="Fly Logo" 
              className="h-10 w-10"
            />
            <span className="text-3xl font-playfair font-bold gradient-text">Fly</span>
          </Link>
          <h1 className="text-2xl font-playfair font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-white/70">Enter the future of luxury fashion</p>
        </div>

        <Card className="glass-effect border-white/20">
          <CardHeader>
            <CardTitle className="text-center text-white">Sign In</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="wallet" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-white/10">
                <TabsTrigger value="wallet" className="text-white data-[state=active]:text-black">Wallet</TabsTrigger>
                <TabsTrigger value="email" className="text-white data-[state=active]:text-black">Email</TabsTrigger>
              </TabsList>
              
              <TabsContent value="wallet" className="space-y-4 mt-6">
                <Button 
                  onClick={handleWalletConnect}
                  disabled={isLoading}
                  className="w-full gradient-gold text-black font-semibold py-6 text-lg"
                >
                  <Wallet className="mr-2 h-5 w-5" />
                  {isLoading ? 'Connecting...' : 'Connect Wallet'}
                </Button>
                <p className="text-sm text-white/60 text-center">
                  Connect your wallet to access all features securely
                </p>
              </TabsContent>
              
              <TabsContent value="email" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
                <Button className="w-full gradient-gold text-black font-semibold py-6">
                  Sign In
                </Button>
                <div className="text-center">
                  <Link to="/forgot-password" className="text-sm text-gold-400 hover:text-gold-300">
                    Forgot your password?
                  </Link>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <p className="text-white/60">
                Don't have an account?{' '}
                <Link to="/signup" className="text-gold-400 hover:text-gold-300 font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-xs text-white/50">
            Are you an industry professional?{' '}
            <Link to="/professional-signup" className="text-gold-400 hover:text-gold-300">
              Apply here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
