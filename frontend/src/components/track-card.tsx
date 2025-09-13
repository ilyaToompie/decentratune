import { Play, Heart, MoreHorizontal } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TrackCardProps {
  title: string;
  artist: string;
  duration: string;
  imageUrl: string;
  isPlaying?: boolean;
}

export function TrackCard({ title, artist, duration, imageUrl, isPlaying = false }: TrackCardProps) {
  return (
    <div className="group flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
      <div className="relative">
        <ImageWithFallback 
          src={imageUrl}
          alt={`${title} by ${artist}`}
          className="h-12 w-12 rounded-lg object-cover"
        />
        <Button 
          size="icon"
          className="absolute inset-0 h-12 w-12 rounded-lg bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity"
          variant="ghost"
        >
          <Play className="h-4 w-4 text-white fill-current" />
        </Button>
      </div>
      
      <div className="flex-1 min-w-0">
        <p className={`font-medium truncate ${isPlaying ? 'text-primary' : ''}`}>{title}</p>
        <p className="text-sm text-muted-foreground truncate">{artist}</p>
      </div>
      
      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-sm text-muted-foreground">{duration}</span>
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