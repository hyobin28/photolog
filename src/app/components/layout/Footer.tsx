import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="px-main py-12 border-t border-border mt-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-8">
        {/* 왼쪽: 로고, 슬로건 */}
        <div className="flex flex-col gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-brand" />
            <span className="text-b-24 font-medium">Photolog</span>
          </Link>
          <p className="text-b-16 text-secondary">
            사진으로 기록하는 특별한 순간
          </p>
        </div>

        {/* 오른쪽: 하단 메뉴 링크 */}
        <nav className="flex gap-6 lg:gap-10 text-b-16 text-secondary">
          <Link href="/about" className="hover:text-primary transition-colors">
            소개
          </Link>
          <Link
            href="/privacy"
            className="hover:text-primary transition-colors"
          >
            개인정보처리방침
          </Link>
          <Link href="/terms" className="hover:text-primary transition-colors">
            이용약관
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary transition-colors"
          >
            문의하기
          </Link>
        </nav>
      </div>

      {/* 하단 구분선, 카피라이트 */}
      <div className="mt-16 pt-8 border-t border-border text-center">
        <p className="text-b-14 text-secondary">
          © 2026 Photolog. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
