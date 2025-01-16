'use client';

import { Button } from '@/components/ui/button';
import { useLogout } from '@/core/hooks/useAuth';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const { mutateAsync: logout } = useLogout();

  const handleLogout = async () => {
    await logout();
    router.replace('/login');
  };

  return (
    <div>
      <Button onClick={handleLogout}>Sair</Button>
      teste
    </div>
  );
}
