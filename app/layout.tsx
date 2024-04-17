import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar/Sidebar";
import GSProvider from "./providers/GSProvider";
import CtxtProvider from "./providers/CtxtProvider";
import { ClerkProvider, auth } from "@clerk/nextjs";
import NextTopLoader from "nextjs-toploader";

const nunito = Nunito({ 
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"], 
});

export const metadata: Metadata = {
  title: "Todo Task",
  description: "Sauer, João",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const {userId} = auth();

  return (
    <ClerkProvider>
    <html lang="en">
      <head>
      <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" />
      </head>
      <body className={nunito.className}>
        <NextTopLoader 
          height={2}
          color="blue"
          easing="cubic-bezier(0.53,0.21,0,1)"
        />
        <CtxtProvider>
          <GSProvider>
            {userId && <Sidebar />}
            <div className="w-full">{children}</div>
          </GSProvider>
        </CtxtProvider>
        </body>
    </html>
    </ClerkProvider>
  );
}
