import Button from './components/common/Button/Button'
import PostCard from './components/common/Dummy/PostCard/PostCard'

const DUMMY_POSTS = [
  {
    id: 1,
    title: '제주도 겨울 바다',
    location: '제주 애월',
    date: '2026.01.02',
    bgColor: 'bg-blue-100',
    count: 5,
  },
  {
    id: 2,
    title: '경복궁 설경',
    location: '서울 경복궁',
    date: '2025.12.28',
    bgColor: 'bg-slate-200',
    count: 4,
  },
  {
    id: 3,
    title: '부산 감천문화마을',
    location: '부산 감천동',
    date: '2025.12.15',
    bgColor: 'bg-orange-100',
    count: 3,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen px-main py-10 lg:py-20">
      <section>
        <h1 className="text-4xl lg:text-h-64 text-primary font-light leading-tight tracking-tighter">
          사진으로 기록하는
          <br className="hidden lg:block" />
          특별한 순간
        </h1>

        <p className="text-b-16 lg:text-b-24 text-secondary mt-6 max-w-150 font-light">
          단순한 사진 모음이 아닌, 여행과 일상의 특별한 순간을
          <br className="hidden lg:block" />
          하나의 결과물로 정리하는 개인 아카이브 서비스입니다.
        </p>

        <div className="mt-7.5 flex gap-3">
          <Button size="m" textClassName="font-light">
            시작하기
          </Button>
          <Button variant="outline" size="m" textClassName="font-light">
            둘러보기
          </Button>
        </div>
      </section>

      <section className="mt-25">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-b-24">공개된 기록들</h2>
            <p className="text-b-16 mt-0.5 text-secondary">
              사용자들이 공유한 특별한 순간들을 둘러보세요
            </p>
          </div>
          <button className="group text-b-16 text-secondary hover:text-primary flex items-center gap-1 transition-colors">
            모두 보기
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DUMMY_POSTS.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </main>
  )
}
