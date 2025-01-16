import Image from 'next/image';

export const LoginBanner = () => {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-3xl border-1 max-lg:hidden">
      <Image
        src="/assets/avati-logo.svg"
        alt="Avati"
        width={320}
        height={320}
        className="invert dark:invert-0"
      />
    </div>
  );
};
