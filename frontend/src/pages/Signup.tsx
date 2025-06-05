
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Wallet } from 'lucide-react';

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleWalletConnect = async () => {
    setIsLoading(true);
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
          <h1 className="text-2xl font-playfair font-bold text-white mb-2">Join Fly</h1>
          <p className="text-white/70">Start your luxury fashion journey</p>
        </div>

        <Card className="glass-effect border-white/20">
          <CardHeader>
            <CardTitle className="text-center text-white">Create Account</CardTitle>
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
                  disabled={isLoading || !agreed}
                  className="w-full gradient-gold text-black font-semibold py-6 text-lg disabled:opacity-50"
                >
                  <Wallet className="mr-2 h-5 w-5" />
                  {isLoading ? 'Connecting...' : 'Connect Wallet'}
                </Button>
              </TabsContent>
              
              <TabsContent value="email" className="space-y-4 mt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-white">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-white">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                </div>
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
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-white">Confirm Password</Label>
                  <Input 
                    id="confirmPassword" 
                    type="password" 
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
                <Button 
                  disabled={!agreed}
                  className="w-full gradient-gold text-black font-semibold py-6 disabled:opacity-50"
                >
                  Create Account
                </Button>
              </TabsContent>
            </Tabs>

            <div className="mt-6 flex items-start space-x-2">
              <Checkbox 
                id="terms" 
                checked={agreed}
                onCheckedChange={setAgreed}
                className="border-white/20 data-[state=checked]:bg-gold-500 data-[state=checked]:border-gold-500"
              />
              <Label htmlFor="terms" className="text-sm text-white/70 leading-relaxed">
                I agree to the{' '}
                <Link to="/terms" className="text-gold-400 hover:text-gold-300">Terms of Service</Link>
                {' '}and{' '}
                <Link to="/privacy" className="text-gold-400 hover:text-gold-300">Privacy Policy</Link>
              </Label>
            </div>

            <div className="mt-6 text-center">
              <p className="text-white/60">
                Already have an account?{' '}
                <Link to="/login" className="text-gold-400 hover:text-gold-300 font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
