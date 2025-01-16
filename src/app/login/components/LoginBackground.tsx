export const LoginBackground = () => {
  return (
    <>
      <div className="pointer-events-none fixed -bottom-[130dvh] -left-[320px] -z-20 aspect-square w-[1400px] animate-[pulse_5s_ease_infinite] rounded-full bg-primary/50" />
      <div className="pointer-events-none fixed -right-0 -top-[500px] -z-20 aspect-square w-[600px] animate-[pulse_5s_ease_infinite] rounded-full bg-primary/50" />

      <span className="pointer-events-none fixed inset-0 -z-10 bg-white/60 backdrop-blur-2xl dark:bg-background/95" />
    </>
  );
};
