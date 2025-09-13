import { Search, Bell, Settings } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Logo } from './logo';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-6 justify-between w-full">
        {/* Левая часть: логотип + навигация */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <Logo className="h-8 w-8" />
            <span className="font-semibold text-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              DecentraTune
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" className="hover:text-primary">Market</Button>
            <Button variant="ghost" className="hover:text-primary">Artists</Button>
            <Button variant="ghost" className="hover:text-primary">Portfolio</Button>
            <Button variant="ghost" className="hover:text-primary">Trading</Button>
          </nav>
        </div>

        {/* Правая часть: поиск, иконки, кнопка кошелька */}
        <div className="flex items-center gap-4">
          <div className="relative w-80 hidden lg:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for music NFTs, artists, or tokens..."
              className="pl-10 bg-muted/50 border-0 focus-visible:ring-1"
            />
          </div>

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500"></span>
          </Button>

          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>

          <div className="ml-4">
            <WalletMultiButton className="px-3 py-1" />
          </div>
        </div>
      </div>
    </header>
  );
}