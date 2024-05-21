import "~/styles/globals.css";

import { Work_Sans } from "next/font/google";
import Providers from "~/components/providers";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Git Starred",
  description:
    "Git Starred is a platform for you to browse starred repositories from the community.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${workSans.className}`}>
      <body>
        <Providers>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
