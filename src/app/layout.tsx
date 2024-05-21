import "~/styles/globals.css";

import type { Metadata } from "next";
import { Work_Sans as FontSans } from "next/font/google";
import Providers from "~/components/providers";

const fontSans = FontSans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Git Starred",
  description:
    "Browse and search starred repositories from community GitHub profiles.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html
        lang="en"
        className="scroll-smooth antialiased"
        suppressHydrationWarning
      >
        <body className={`min-h-screen ${fontSans.className}`}>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
        </body>
      </html>
    </Providers>
  );
}
