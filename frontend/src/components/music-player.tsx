import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function MusicPlayer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur border-t">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Currently Playing */}
        <div className="flex items-center gap-4 w-80">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1629923759854-156b88c433aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbGJ1bSUyMGNvdmVyJTIwdmlueWwlMjByZWNvcmR8ZW58MXx8fHwxNzU3NzE2MDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Current track"
            className="h-14 w-14 rounded-lg object-cover"
          />
          <div className="min-w-0">
            <p className="font-medium truncate">Midnight Dreams</p>
            <p className="text-sm text-muted-foreground truncate">Luna Nova</p>
          </div>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-red-500">
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center gap-2 flex-1 max-w-2xl mx-8">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <Shuffle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button size="icon" className="h-10 w-10 rounded-full bg-primary hover:bg-primary/90">
              <Play className="h-5 w-5 fill-current" />
            </Button>
            <Button variant="ghost" size="icon">
              <SkipForward className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <Repeat className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex items-center gap-2 w-full">
            <span className="text-xs text-muted-foreground w-10 text-right">2:14</span>
            <Slider 
              value={[35]} 
              max={100} 
              step={1}
              className="flex-1"
            />
            <span className="text-xs text-muted-foreground w-10">3:42</span>
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-2 w-80 justify-end">
          <Volume2 className="h-5 w-5 text-muted-foreground" />
          <Slider 
            value={[75]} 
            max={100} 
            step={1}
            className="w-24"
          />
        </div>
      </div>
    </footer>
  );
}