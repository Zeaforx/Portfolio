import './globals.css'
import { Inter } from 'next/font/google'
import Headers from "./header";
import Head from 'next/head';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
          <head>
              <script
                  src="https://kit.fontawesome.com/b0505807a7.js"
                  crossOrigin="anonymous"
              ></script>
              <link rel="stylesheet" href="./font-awesome/css/font-awesome.min.css"></link>
          </head>
          <body>
              <Headers />

              {children}
          </body>
      </html>
  );
}