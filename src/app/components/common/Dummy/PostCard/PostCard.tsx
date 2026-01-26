type Post = {
  id: number
  title: string
  location: string
  date: string
  bgColor: string
  count: number
}

type PostCardProps = {
  post: Post
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="group cursor-pointer border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white">
      <div
        className={`relative aspect-4/3 ${post.bgColor} flex items-center justify-center`}
      >
        <span className="text-gray-400 group-hover:scale-110 transition-transform duration-500">
          이미지 준비 중
        </span>

        {/* 사진 장수 뱃지 */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-medium px-2 py-1 rounded">
          {post.count}장
        </div>
      </div>

      {/* 정보 영역 */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 truncate">
          {post.title}
        </h3>
        <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">
          <span className="truncate">📍 {post.location}</span>
          <span className="text-gray-300 text-xs">|</span>
          <span className="shrink-0">{post.date}</span>
        </div>
      </div>
    </div>
  )
}

export default PostCard
