import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      {children}
      <Toaster position="top-center" richColors />
    </ClerkProvider>
  );
}
