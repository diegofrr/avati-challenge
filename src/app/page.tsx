'use client';

import { userRoleLabel } from '@/constants/userRoleLabel';
import { Header } from '@/layouts/Header';
import { MainContainer } from '@/layouts/MainContainer';
import { useCurrentUserStore } from '@/store/CurrentUserStore';

export default function Page() {
  const { currentUser } = useCurrentUserStore();

  return (
    <MainContainer className="flex h-[calc(100dvh-64px)] items-center justify-center pb-32">
      <Header />

      <div className="flex h-full flex-col items-center justify-center space-y-4">
        <p className="text-center text-[38px] font-bold leading-tight sm:text-[48px] md:text-[80px]">
          Olá, {currentUser.name.split(' ')[0]} 👋
        </p>

        <span className="inline-flex items-center gap-x-4 gap-y-2 text-sm max-sm:flex-col">
          <span className="rounded-full border-1 bg-muted px-3">
            {userRoleLabel[currentUser.role]}
          </span>

          <span className="text-muted-foreground">{currentUser.email}</span>
        </span>
      </div>
    </MainContainer>
  );
}
