import type { Metadata } from 'next'
import localFont from 'next/font/local'

import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import './globals.css'

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
})

export const metadata: Metadata = {
  title: 'Photolog | 소중한 순간의 기록',
  keywords: ['사진', '블로그', '포토로그', '일상기록'],
  description: '포토로그에서 당신의 일상을 사진으로 기록하고 공유하세요.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className={`${pretendard.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
