import BackButtonProvider from "@/components/providers/back-route-provider";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function CourseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='w-4/5 md:w-3/4 m-auto my-10 space-y-5'>
      <BackButtonProvider />

      {children}
    </main>
  );
}
