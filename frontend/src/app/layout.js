import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import UserContext from "./contexts/UserContext";
import CaptainContext from "./contexts/CaptainContext";
import { UserProtectWrapper } from "./UserProtectWrapper";
import CaptainProtectWrapper from "./CaptainProtectWrapper";
import "remixicon/fonts/remixicon.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Uber",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  // Define protected routes for both wrappers
  const userProtectedRoutes = ["/home"];
  const captainProtectedRoutes = ["/CaptainHome"];
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";

  const isUserProtected =
    typeof window !== "undefined" && userProtectedRoutes.includes(currentPath);
  const isCaptainProtected =
    typeof window !== "undefined" &&
    captainProtectedRoutes.includes(currentPath);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/fav.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CaptainContext>
          <UserContext>
            {isCaptainProtected ? (
              <CaptainProtectWrapper>{children}</CaptainProtectWrapper>
            ) : isUserProtected ? (
              <UserProtectWrapper>{children}</UserProtectWrapper>
            ) : (
              children
            )}
          </UserContext>
        </CaptainContext>
      </body>
    </html>
  );
}
