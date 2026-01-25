import Link from 'next/link'

import { Menu } from 'lucide-react'

import Button from '../common/Button/Button'

const Header = () => {
  return (
    <header className="relative w-full h-17 flex items-center justify-between px-main bg-header border-b border-border">
      {/* 로고 */}
      <Link href="/" className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-brand" />
        <span className="text-b-24 font-semibold tracking-tight">Photolog</span>
      </Link>

      {/* 데스크탑 메뉴 */}
      <nav className="hidden lg:flex gap-10 absolute left-1/2 -translate-x-1/2 text-secondary font-medium">
        <Link href="/" className="text-primary">
          Home
        </Link>
        <Link href="/archive" className="hover:text-primary transition-colors">
          Archive
        </Link>
        <Link
          href="/community"
          className="hover:text-primary transition-colors"
        >
          Comunity
        </Link>
      </nav>

      {/* 3. 오른쪽 버튼 (데스크탑에서는 로그인/시작, 모바일은 햄버거) */}
      <div className="flex items-center gap-6">
        {/* 데스크탑 전용 버튼 */}
        <div className="hidden lg:flex items-center gap-6 font-medium">
          <Link
            href="/login"
            className="text-secondary hover:text-primary transition-colors"
          >
            로그인
          </Link>
          <Button size="s">시작하기</Button>
        </div>

        {/* 모바일 아이콘 */}
        <button className="lg:hidden text-primary">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  )
}

export default Header
