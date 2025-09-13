import { Play, UserPlus } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ArtistCardProps {
  name: string;
  genre: string;
  followers: string;
  imageUrl: string;
  isNew?: boolean;
}

export function ArtistCard({ name, genre, followers, imageUrl, isNew = false }: ArtistCardProps) {
  return (
    <div className="group relative bg-card rounded-xl p-6 hover:bg-muted/30 transition-all duration-300 hover:shadow-lg">
      {isNew && (
        <Badge className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          New
        </Badge>
      )}
      
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <ImageWithFallback 
            src={imageUrl}
            alt={name}
            className="h-24 w-24 rounded-full object-cover ring-2 ring-muted"
          />
          <Button 
            size="icon"
            className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-primary hover:bg-primary/90 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Play className="h-3 w-3 text-primary-foreground fill-current" />
          </Button>
        </div>
        
        <div className="space-y-1">
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground">{genre}</p>
          <p className="text-xs text-muted-foreground">{followers} followers</p>
        </div>
        
        <Button variant="outline" size="sm" className="w-full">
          <UserPlus className="h-3 w-3 mr-2" />
          Follow
        </Button>
      </div>
    </div>
  );
}