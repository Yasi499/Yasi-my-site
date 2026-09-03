import './globals.css';

export const metadata = {
  title: 'Next.js Dark Landing',
  description: 'Minimal Dark Mode Landing Page',
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>
        <header>
          <div className="logo">DarkApp</div>
        </header>
        {children}
        <footer>
          &copy; {new Date().getFullYear()} DarkApp. Всі права захищено.
        </footer>
      </body>
    </html>
  );
}
