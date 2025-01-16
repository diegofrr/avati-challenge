type MainContainerProps = {
  children: React.ReactNode;
};

export const MainContainer = ({ children }: MainContainerProps) => {
  return <main className="container p-8">{children}</main>;
};
