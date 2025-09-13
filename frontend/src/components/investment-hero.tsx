import { TrendingUp, DollarSign, Users, Zap, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function InvestmentHero() {
  return (
    <section className="relative h-96 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <ImageWithFallback 
        src="https://images.unsplash.com/photo-1740459057005-65f000db582f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHN8ZW58MXx8fHwxNzU3NzMwMTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Music investment"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      
      <div className="relative z-10 h-full flex items-center">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                <Zap className="h-3 w-3 mr-1" />
                Trending Investment
              </Badge>
              
              <div className="space-y-4">
                <h1 className="text-4xl font-bold text-white">
                  Invest in Luna Nova's
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    "Midnight Dreams"
                  </span>
                </h1>
                <p className="text-xl text-white/90">
                  Own shares in rising indie artist's breakthrough track
                </p>
                <div className="flex items-center gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    <span>$24.50 per share</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-400" />
                    <span className="text-green-400">+12.3% today</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Buy Shares Now
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  View Analytics
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-white">2,847</p>
                    <p className="text-sm text-white/70">Total Shares</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">1,203</p>
                    <p className="text-sm text-white/70">Available</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-400">+24.7%</p>
                    <p className="text-sm text-white/70">30 Day ROI</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">847</p>
                    <p className="text-sm text-white/70">Investors</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}