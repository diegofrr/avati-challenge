import { cn } from '@/lib/utils';

type MainContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const MainContainer = ({ children, className }: MainContainerProps) => {
  return (
    <main className={cn('container mt-16 p-8', className)}>{children}</main>
  );
};
