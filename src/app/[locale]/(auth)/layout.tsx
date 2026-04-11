const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative flex items-center justify-center min-h-screen">
      <div className="m-5 w-full md:w-md">{children}</div>
    </main>
  );
};

export default AuthLayout;
