'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginSchema, defaultValues } from './LoginSchema';
import { useLogin } from '@/core/hooks/useAuth';
import { useRouter } from 'next/navigation';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { f_input } from '@/utils/formatters';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  ArrowRightIcon,
  EyeIcon,
  EyeOffIcon,
  Loader2Icon,
  LoaderIcon,
  LogInIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useCurrentUserStore } from '@/store/CurrentUserStore';

export const LoginForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { mutateAsync: login, isPending } = useLogin();
  const { setCurrentUser } = useCurrentUserStore();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues,
    mode: 'onChange',
  });

  const handleSubmit = async () => {
    const data = form.getValues();

    const response = await login(data);

    if (response?.user) {
      setCurrentUser(response.user);
      router.replace('/');
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-foreground">Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value}
                    onChange={(e) => field.onChange(f_input(e))}
                    className="h-10 bg-background"
                    required
                    type="email"
                    placeholder="mail@example.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <FormField
          name="password"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-foreground">Senha</FormLabel>
                <FormControl>
                  <div className="relative flex items-center">
                    <Input
                      {...field}
                      value={field.value}
                      onChange={(e) => field.onChange(f_input(e))}
                      className={cn(
                        'h-10 bg-background pr-10 text-base',
                        showPassword && 'text-sm',
                      )}
                      required
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••••"
                    />
                    <Button
                      onClick={() => setShowPassword(!showPassword)}
                      type="button"
                      className="absolute right-0 h-10 w-10 !bg-transparent p-0 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeIcon size={16} />
                      ) : (
                        <EyeOffIcon size={16} />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <div className="flex items-center gap-4">
          <Button className="w-full rounded-full" size="lg" type="submit">
            {isPending && <Loader2Icon className="animate-spin" size={16} />}
            {isPending ? 'Acessando...' : 'Acessar'}
            {!isPending && <LogInIcon size={16} />}
          </Button>
        </div>

        <Link
          href="#"
          className={cn(
            buttonVariants({ variant: 'link' }),
            'w-full px-0 text-center text-xs text-muted-foreground hover:text-foreground',
          )}
        >
          Esqueci minha senha
          <ArrowRightIcon size={14} />
        </Link>
      </form>
    </Form>
  );
};
