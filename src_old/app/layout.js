import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Beldum Bot',
    description: 'Static website for Beldum-Bot, a Discord bot/application',
    keywords: 'beldum, bot, discord, application, serverless',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme='dark'>
        <head>
            <meta name="google-site-verification" content="sT7zxJyHGIMTCNqwicuwD1VUve64S7T17tXwXiZQX9c" />
        </head>
        <body className={inter.className}>{children}</body>
    </html>
  )
}
