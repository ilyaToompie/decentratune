import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { InvestmentHero } from './components/investment-hero';
import { NFTTrackCard } from './components/nft-track-card';
import { ArtistCard } from './components/artist-card';
import { PortfolioSection } from './components/portfolio-section';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Card } from './components/ui/card';
import { ArrowRight, Sparkles, TrendingUp, DollarSign, Users } from 'lucide-react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0)
  const { publicKey } = useWallet()
  const trendingNFTs = [
    {
      title: "Electric Dreams",
      artist: "Neon Pulse",
      price: "28.40",
      change: "+15.2",
      isPositive: true,
      sharesAvailable: "234",
      totalShares: "1,000",
      imageUrl: "https://images.unsplash.com/photo-1629923759854-156b88c433aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbGJ1bSUyMGNvdmVyJTIwdmlueWwlMjByZWNvcmR8ZW58MXx8fHwxNzU3NzE2MDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      isHot: true
    },
    {
      title: "Ocean Waves",
      artist: "Coastal Drift",
      price: "15.20",
      change: "-3.8",
      isPositive: false,
      sharesAvailable: "567",
      totalShares: "2,500",
      imageUrl: "https://images.unsplash.com/photo-1718217028088-a23cb3b277c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzU3NzAzOTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Midnight Dreams",
      artist: "Luna Nova",
      price: "24.50",
      change: "+12.3",
      isPositive: true,
      sharesAvailable: "89",
      totalShares: "500",
      imageUrl: "https://images.unsplash.com/photo-1677957855684-866bda07805e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZSUyMG11c2ljJTIwYmFuZHxlbnwxfHx8fDE3NTc3NTA0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      isHot: true
    },
    {
      title: "Digital Rain",
      artist: "Cyber Dreams",
      price: "31.75",
      change: "+8.9",
      isPositive: true,
      sharesAvailable: "156",
      totalShares: "750",
      imageUrl: "https://images.unsplash.com/photo-1693835777292-cf103dcd2324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFydGlzdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1Nzc0ODg3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Sunset Boulevard",
      artist: "Golden Hour",
      price: "19.85",
      change: "+5.7",
      isPositive: true,
      sharesAvailable: "423",
      totalShares: "1,200",
      imageUrl: "https://images.unsplash.com/photo-1629923759854-156b88c433aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbGJ1bSUyMGNvdmVyJTIwdmlueWwlMjByZWNvcmR8ZW58MXx8fHwxNzU3NzE2MDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const risingArtists = [
    {
      name: "Echo Valley",
      genre: "Indie Folk",
      followers: "Market Cap: $420K",
      imageUrl: "https://images.unsplash.com/photo-1693835777292-cf103dcd2324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFydGlzdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1Nzc0ODg3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      isNew: true
    },
    {
      name: "Neon Pulse",
      genre: "Electronic",
      followers: "Market Cap: $1.2M",
      imageUrl: "https://images.unsplash.com/photo-1677957855684-866bda07805e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZSUyMG11c2ljJTIwYmFuZHxlbnwxfHx8fDE3NTc3NTA0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      isNew: true
    },
    {
      name: "Coastal Drift",
      genre: "Ambient",
      followers: "Market Cap: $680K",
      imageUrl: "https://images.unsplash.com/photo-1718217028088-a23cb3b277c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzU3NzAzOTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      isNew: true
    },
    {
      name: "Urban Echoes",
      genre: "Lo-Fi Hip Hop",
      followers: "Market Cap: $950K",
      imageUrl: "https://images.unsplash.com/photo-1693835777292-cf103dcd2324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFydGlzdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1Nzc0ODg3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      
      <main className="ml-64 pt-16">
        <InvestmentHero />
        
        <div className="container px-6 py-8 space-y-12">
          {/* Market Overview */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Market Cap</p>
                    <p className="text-2xl font-bold">$47.2M</p>
                    <p className="text-sm text-green-600">+12.4% today</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <DollarSign className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">24h Volume</p>
                    <p className="text-2xl font-bold">$2.8M</p>
                    <p className="text-sm text-blue-600">+8.7% from yesterday</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Active Investors</p>
                    <p className="text-2xl font-bold">12,847</p>
                    <p className="text-sm text-purple-600">+234 this week</p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Portfolio Section */}
          <PortfolioSection />

          {/* Trending NFTs */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold">Trending Music NFTs</h2>
                <Badge variant="secondary">Hot Market</Badge>
              </div>
              <Button variant="ghost" className="group">
                View All Markets
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="space-y-3">
              {trendingNFTs.map((nft, index) => (
                <NFTTrackCard key={index} {...nft} />
              ))}
            </div>
          </section>

          {/* Rising Artists Section */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Rising Artists to Invest In</h2>
              <Button variant="ghost" className="group">
                Explore More
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {risingArtists.map((artist, index) => (
                <ArtistCard key={index} {...artist} />
              ))}
            </div>
          </section>

          {/* Investment Collections */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Investment Collections</h2>
              <Button variant="ghost" className="group">
                All Collections
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Rising Stars Fund",
                  description: "Curated emerging artists portfolio",
                  totalValue: "$2.4M",
                  return: "+18.5%",
                  tracks: "24 artists",
                  imageUrl: "https://images.unsplash.com/photo-1629923759854-156b88c433aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbGJ1bSUyMGNvdmVyJTIwdmlueWwlMjByZWNvcmR8ZW58MXx8fHwxNzU3NzE2MDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                },
                {
                  title: "Electronic Futures",
                  description: "High-growth electronic music tokens",
                  totalValue: "$1.8M",
                  return: "+24.2%",
                  tracks: "18 tracks",
                  imageUrl: "https://images.unsplash.com/photo-1677957855684-866bda07805e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZSUyMG11c2ljJTIwYmFuZHxlbnwxfHx8fDE3NTc3NTA0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                },
                {
                  title: "Indie Gems Portfolio",
                  description: "Undervalued indie music assets",
                  totalValue: "$920K",
                  return: "+12.8%",
                  tracks: "31 tracks",
                  imageUrl: "https://images.unsplash.com/photo-1718217028088-a23cb3b277c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzU3NzAzOTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                }
              ].map((collection, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={collection.imageUrl}
                      alt={collection.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-green-500/90 text-white mb-2">
                        {collection.return} ROI
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold mb-2">{collection.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{collection.description}</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-lg font-bold">{collection.totalValue}</p>
                        <p className="text-xs text-muted-foreground">{collection.tracks}</p>
                      </div>
                      <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                        Invest
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}