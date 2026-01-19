import "./globals.css";

export const metadata = {
  title: "Product Order System",
  description: "Single product with server-side order management"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
