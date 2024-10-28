import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authenticate",
  description: "",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='h-[90vh] flex items-center justify-center'>
      {children}
    </main>
  );
}
