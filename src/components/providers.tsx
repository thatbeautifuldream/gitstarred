import { ViewTransitions } from "next-view-transitions";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransitions>
      <ClerkProvider>
        {children}
        <Toaster position="top-center" richColors />
      </ClerkProvider>
    </ViewTransitions>
  );
}
