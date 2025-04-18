import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/_theme.scss";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import CustomNavbar from "@/components/molecules/Navbar";
import Container from "react-bootstrap/Container";
import { ModalProvider } from "@/components/context/Modal";
import { ToastProvider } from "@/components/context/Toast";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          <ModalProvider>
            <CustomNavbar />
            <Container className="py-4 pt-5 mt-5">{children}</Container>
            <ThemeToggle />
          </ModalProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
