import "./globals.css";

export const metadata = {
  title: "Escala Familiar 2026",
  description: "App de escala familiar"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
