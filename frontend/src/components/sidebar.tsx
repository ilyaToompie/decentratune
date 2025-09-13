import { Home, Compass, TrendingUp, PieChart, Wallet, ShoppingCart, BarChart3, Target, Clock, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-16 z-40 w-64 h-[calc(100vh-4rem)] bg-background border-r overflow-y-auto">
      <div className="p-6 space-y-8">
        {/* Main Navigation */}
        <div className="space-y-2">
          <Button variant="default" className="w-full justify-start gap-3">
            <Home className="h-4 w-4" />
            Market
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <TrendingUp className="h-4 w-4" />
            Trending
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <Compass className="h-4 w-4" />
            Discover
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <BarChart3 className="h-4 w-4" />
            Analytics
          </Button>
        </div>

        <Separator />

        {/* Your Investments */}
        <div className="space-y-3">
          <h3 className="px-3 text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Your Investments
          </h3>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <PieChart className="h-4 w-4" />
              My Portfolio
              <Badge variant="secondary" className="ml-auto">$8.2K</Badge>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Wallet className="h-4 w-4" />
              Wallet
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Clock className="h-4 w-4" />
              Recent Trades
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Heart className="h-4 w-4" />
              Watchlist
              <Badge variant="secondary" className="ml-auto">12</Badge>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Target className="h-4 w-4" />
              Alerts
              <Badge variant="secondary" className="ml-auto">3</Badge>
            </Button>
          </div>
        </div>

        <Separator />

        {/* Market Categories */}
        <div className="space-y-3">
          <h3 className="px-3 text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Market Categories
          </h3>
          <div className="space-y-1">
            {[
              { name: 'Rising Stars', hot: true },
              { name: 'Electronic', hot: false },
              { name: 'Indie Rock', hot: false },
              { name: 'Hip Hop', hot: true },
              { name: 'Lo-Fi', hot: false },
              { name: 'Experimental', hot: false }
            ].map((category) => (
              <Button key={category.name} variant="ghost" className="w-full justify-start gap-3">
                <ShoppingCart className="h-4 w-4" />
                {category.name}
                {category.hot && <Badge variant="destructive" className="ml-auto text-xs">Hot</Badge>}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}