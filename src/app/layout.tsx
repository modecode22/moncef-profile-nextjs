import TheThemeProvider from '@/components/TheThemeProvider';
import './globals.css'

export const metadata = {
  title: 'Moncef Portfolio',
  description: 'My cool portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col w-screen overflow-x-hidden text-pr5 dark:text-pr   font   min-h-screen bg-pr dark:bg-pr5 ">
        <TheThemeProvider>{children}</TheThemeProvider>
      </body>
    </html>
  );
}
