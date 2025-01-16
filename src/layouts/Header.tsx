'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks';
import { useLogout } from '@/core/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { Loader2Icon, LogOutIcon } from 'lucide-react';

export const Header = () => {
  const router = useRouter();

  const { toggleTheme, ThemeIcon } = useTheme();
  const { mutateAsync: logout, isPending: isLoggingOut } = useLogout();

  const handleLogout = async () => {
    await logout();
    router.replace('/login');
  };

  return (
    <div className="absolute left-0 top-0 flex h-16 w-full items-center justify-between border-b-1 px-4 sm:px-8">
      <Image
        src="/assets/avati-logo.svg"
        alt="Avati logo"
        width={64}
        height={64}
        className="invert-0 dark:invert"
      />

      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          className="rounded-full"
          size="icon"
          onClick={toggleTheme}
        >
          <ThemeIcon size={16} />
        </Button>

        <Button
          variant="outline"
          onClick={handleLogout}
          className="rounded-full hover:border-transparent hover:bg-destructive/10 hover:text-destructive"
        >
          {isLoggingOut && <Loader2Icon className="animate-spin" size={16} />}
          {isLoggingOut ? 'Saindo...' : 'Sair'}
          {!isLoggingOut && <LogOutIcon size={16} />}
        </Button>
      </div>
    </div>
  );
};
