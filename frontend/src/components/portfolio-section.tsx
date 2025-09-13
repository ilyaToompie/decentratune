import { TrendingUp, TrendingDown, DollarSign, Percent } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PortfolioTrack {
  title: string;
  artist: string;
  sharesOwned: number;
  avgBuyPrice: string;
  currentPrice: string;
  totalValue: string;
  pnl: string;
  pnlPercent: string;
  isPositive: boolean;
  imageUrl: string;
}

export function PortfolioSection() {
  const portfolioTracks: PortfolioTrack[] = [
    {
      title: "Electric Dreams",
      artist: "Neon Pulse",
      sharesOwned: 125,
      avgBuyPrice: "18.40",
      currentPrice: "24.50",
      totalValue: "3,062.50",
      pnl: "+762.50",
      pnlPercent: "+33.2",
      isPositive: true,
      imageUrl: "https://images.unsplash.com/photo-1629923759854-156b88c433aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbGJ1bSUyMGNvdmVyJTIwdmlueWwlMjByZWNvcmR8ZW58MXx8fHwxNzU3NzE2MDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Midnight Dreams",
      artist: "Luna Nova",
      sharesOwned: 200,
      avgBuyPrice: "22.10",
      currentPrice: "24.50",
      totalValue: "4,900.00",
      pnl: "+480.00",
      pnlPercent: "+10.9",
      isPositive: true,
      imageUrl: "https://images.unsplash.com/photo-1677957855684-866bda07805e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZSUyMG11c2ljJTIwYmFuZHxlbnwxfHx8fDE3NTc3NTA0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Ocean Waves",
      artist: "Coastal Drift",
      sharesOwned: 75,
      avgBuyPrice: "16.80",
      currentPrice: "15.20",
      totalValue: "1,140.00",
      pnl: "-120.00",
      pnlPercent: "-9.5",
      isPositive: false,
      imageUrl: "https://images.unsplash.com/photo-1718217028088-a23cb3b277c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzU3NzAzOTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const totalValue = portfolioTracks.reduce((sum, track) => sum + parseFloat(track.totalValue.replace(',', '')), 0);
  const totalPnL = portfolioTracks.reduce((sum, track) => {
    const pnl = parseFloat(track.pnl.replace(/[+,-]/g, ''));
    return sum + (track.isPositive ? pnl : -pnl);
  }, 0);
  const totalPnLPercent = ((totalPnL / (totalValue - totalPnL)) * 100).toFixed(1);

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">My Portfolio</h2>
        <div className="flex items-center gap-4">
          <Card className="px-4 py-2">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">${totalValue.toLocaleString()}</span>
            </div>
          </Card>
          <Card className={`px-4 py-2 ${totalPnL >= 0 ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
            <div className="flex items-center gap-2">
              {totalPnL >= 0 ? (
                <TrendingUp className="h-4 w-4 text-green-600" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-600" />
              )}
              <span className={`font-medium ${totalPnL >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {totalPnL >= 0 ? '+' : ''}${totalPnL.toFixed(2)} ({totalPnL >= 0 ? '+' : ''}{totalPnLPercent}%)
              </span>
            </div>
          </Card>
        </div>
      </div>

      <div className="space-y-3">
        {portfolioTracks.map((track, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-center gap-4">
              <ImageWithFallback 
                src={track.imageUrl}
                alt={`${track.title} by ${track.artist}`}
                className="h-12 w-12 rounded-lg object-cover"
              />
              
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{track.title}</p>
                <p className="text-sm text-muted-foreground truncate">{track.artist}</p>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">Shares</p>
                <p className="font-medium">{track.sharesOwned}</p>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">Avg Buy</p>
                <p className="font-medium">${track.avgBuyPrice}</p>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">Current</p>
                <p className="font-medium">${track.currentPrice}</p>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">Total Value</p>
                <p className="font-medium">${track.totalValue}</p>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">P&L</p>
                <div className="flex items-center gap-1">
                  {track.isPositive ? (
                    <TrendingUp className="h-3 w-3 text-green-500" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-500" />
                  )}
                  <div>
                    <p className={`font-medium ${track.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                      {track.pnl}
                    </p>
                    <p className={`text-xs ${track.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                      {track.pnlPercent}%
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Buy More
                </Button>
                <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                  Sell
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}