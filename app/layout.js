import { Inter } from "next/font/google";
import "./globals.css";
import MobileBottomNav from "@/components/mobilebottomnav/MobileBottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cool Man",
  description: "Ecommerce Web App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
