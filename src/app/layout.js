import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Beldum Bot',
    description: 'Static website for Beldum-Bot, a Discord bot/application',
    keywords: 'beldum, bot, discord, application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme='dark'>
        <head>
            {/* Google tag (gtag.js) TODO */}
            {/* <script async src="https://www.googletagmanager.com/gtag/js?id="/>
            <script dangerouslySetInnerHTML=
                {{__html:
                    `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '');`
                }}
            /> */}
        </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
