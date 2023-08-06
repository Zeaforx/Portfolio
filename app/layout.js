// import './globals.css'
import { Inter } from 'next/font/google'
import Headers from "./header";
import Head from 'next/head';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: "Caleb's Portfolio",
    description: "Generated by NextJS",
    viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (

      <html lang="en">
          <head>
                <meta charSet='utf-8'/>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name='author' content='Caleb' />
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
