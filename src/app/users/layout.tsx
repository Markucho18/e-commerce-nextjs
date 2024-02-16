export default function UsersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header>
        <p>Esto es parte del layout de Users</p>
      </header>
      <main className="px-20">
        {children}
      </main>
    </div>
  );
}