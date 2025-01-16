import Image from 'next/image';

export const LoginBanner = () => {
  return (
    <div className="relative flex h-full w-full flex-col gap-8 overflow-hidden rounded-3xl bg-[#F5EFE3] p-16 max-lg:hidden">
      <Image
        src="/assets/avati-logo.svg"
        alt="Avati logo"
        width={64}
        height={64}
      />

      <h1 className="z-10 w-full max-w-md text-[52px] font-extrabold leading-tight text-black">
        Consultoria em Gestão da Inovação
      </h1>

      <span className="mt-auto text-sm font-semibold text-black">
        Avati
        <span className="font-normal italic text-muted-foreground">
          {' '}
          © 2025
        </span>
      </span>

      <div className="pointer-events-none absolute bottom-0 right-0 z-0 w-[30dvw]">
        <Image
          src="/assets/innovation-image.jpg"
          alt="Innovation illustration"
          layout="responsive"
          width={16}
          height={9}
        />
      </div>
    </div>
  );
};
