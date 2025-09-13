import { TrendingUp, TrendingDown, ShoppingCart, Heart, MoreHorizontal } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface NFTTrackCardProps {
  title: string;
  artist: string;
  price: string;
  change: string;
  isPositive: boolean;
  sharesAvailable: string;
  totalShares: string;
  imageUrl: string;
  isHot?: boolean;
}

export function NFTTrackCard({ 
  title, 
  artist, 
  price, 
  change, 
  isPositive, 
  sharesAvailable, 
  totalShares, 
  imageUrl, 
  isHot = false 
}: NFTTrackCardProps) {
  return (
    <div className="group flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors border border-border/50">
      <div className="relative">
        <ImageWithFallback 
          src={imageUrl}
          alt={`${title} by ${artist}`}
          className="h-16 w-16 rounded-lg object-cover"
        />
        {isHot && (
          <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs">
            🔥
          </Badge>
        )}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <p className="font-medium truncate">{title}</p>
          {isHot && <Badge variant="secondary" className="text-xs">Hot</Badge>}
        </div>
        <p className="text-sm text-muted-foreground truncate">{artist}</p>
        <p className="text-xs text-muted-foreground mt-1">
          {sharesAvailable} of {totalShares} shares available
        </p>
      </div>
      
      <div className="text-right">
        <p className="font-semibold">${price}</p>
        <div className="flex items-center gap-1">
          {isPositive ? (
            <TrendingUp className="h-3 w-3 text-green-500" />
          ) : (
            <TrendingDown className="h-3 w-3 text-red-500" />
          )}
          <span className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {change}%
          </span>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Buy Shares
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-red-500">
          <Heart className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}