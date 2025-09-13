import { Play, Heart, Share } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="relative h-96 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <ImageWithFallback 
        src="https://images.unsplash.com/photo-1740459057005-65f000db582f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHN8ZW58MXx8fHwxNzU3NzMwMTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Featured artist"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      
      <div className="relative z-10 h-full flex items-end">
        <div className="container px-6 pb-12">
          <div className="max-w-2xl space-y-4">
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
              Featured Artist
            </Badge>
            
            <div className="space-y-2">
              <h1 className="text-5xl font-bold text-white">
                Discover Luna Nova
              </h1>
              <p className="text-xl text-white/90">
                Rising indie artist with ethereal soundscapes
              </p>
              <p className="text-white/70">
                From Portland, Oregon • 12.5K monthly listeners
              </p>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <Button size="lg" className="bg-white text-black hover:bg-white/90">
                <Play className="h-5 w-5 mr-2 fill-current" />
                Play Now
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Heart className="h-4 w-4 mr-2" />
                Follow
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Share className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}