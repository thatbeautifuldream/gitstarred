import { ViewTransitions } from "next-view-transitions";
import { Toaster } from "sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransitions>
      {children}
      <Toaster position="top-center" richColors />
    </ViewTransitions>
  );
}
