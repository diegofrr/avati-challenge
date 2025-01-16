'use client';

import { Button } from '@/components/ui/button';
import { LoginForm } from './components/LoginForm/LoginForm';
import { Card, CardContent } from '@/components/ui/card';
import { useMediaQuery, useTheme } from '@/hooks';
import { getGreeting } from '@/utils/shared';
import { LoginBackground } from './components/LoginBackground';
import { LoginBanner } from './components/LoginBanner';
import { cn } from '@/lib/utils';

export default function LoginPage() {
  const { toggleTheme, ThemeIcon } = useTheme();
  const isSmallHeight = useMediaQuery('(max-height: 600px)');

  return (
    <div
      className={cn(
        'relative flex h-screen items-center justify-between gap-16 overflow-hidden p-8',
        isSmallHeight && 'min-h-[600px]',
      )}
    >
      <div className="w-full pb-16">
        <div className="mx-auto flex w-full max-w-md flex-col gap-8">
          <div className="flex w-full items-center justify-between gap-4 rounded-full">
            <Button className="group rounded-full" variant="outline">
              <span className="group-hover:animate-[pulse_1s_ease_infinite]">
                ✨
              </span>
              Criar conta
            </Button>

            <Button
              variant="outline"
              className="rounded-full"
              size="icon"
              onClick={toggleTheme}
            >
              <ThemeIcon size={16} />
            </Button>
          </div>

          <div className="flex flex-col py-8 text-center">
            <p className="text-xl font-semibold text-foreground">
              Olá, {getGreeting()}👋
            </p>
            <span className="text-sm text-muted-foreground">
              Acesse sua conta para continuar
            </span>
          </div>

          <Card className="w-full border-none bg-transparent shadow-none">
            <CardContent className="p-0">
              <LoginForm />
            </CardContent>
          </Card>
        </div>
      </div>

      <LoginBanner />

      {!isSmallHeight && <LoginBackground />}
    </div>
  );
}
