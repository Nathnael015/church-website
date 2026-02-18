import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mekane Birhan St. Gebriel EOTC Monastery",
  description: "Mekane Birhan St. Gebriel Ethiopian Orthodox Monastery in Seattle, WA.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        - min-h-screen makes the whole app at least full screen height
        - flex flex-col lets us push the footer down
        - bg/text classes here apply to EVERY page
      */}
      <body className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-[#0f0f0f] dark:text-gray-100">
        <Navbar />

        {/* flex-1 forces main content area to expand and keep footer at the bottom */}
        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
