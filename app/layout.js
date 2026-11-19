import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "Akshay Rai | Developer Portfolio",
    template: "%s | Akshay Rai",
  },
  description:
    "Akshay Rai - Computer Science student building projects with Python and C.",
};

// Runs before the page paints so the saved theme is applied without a flash.
const themeScript = `
  try {
    var t = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-theme", t === "light" ? "light" : "dark");
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Navbar />
        <main className="container main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
