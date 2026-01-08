export default function PatnersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{ padding: 24 }}>
      <h1 className="text-2xl font-bold">Patners Layout</h1>
      <div className="mt-4">{children}</div>
    </div>
  );
}