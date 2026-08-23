'use client'

import { useState } from 'react'

import Button from '../components/common/Button'
import ImagePicker from '../components/common/ImagePicker'

const WritePage = () => {
  const [imagePaths, setImagePaths] = useState<string[]>([])

  return (
    <main className="min-h-screen px-main py-10 lg:py-20 max-w-200 mx-auto">
      {/* 헤더 영역 */}
      <header className="mb-10">
        <h1 className="text-b-32 font-bold text-primary">새 기록 작성</h1>
        <p className="text-b-16 text-secondary mt-2">
          특별한 순간을 사진과 함께 기록하세요
        </p>
      </header>

      <form className="flex flex-col gap-10">
        {/* 사진 업로드 */}
        <div className="flex flex-col gap-3">
          <label className="text-b-16 font-bold text-primary">
            사진(최대 5장) <span className="text-brand">*</span>
          </label>
          {/* <div className="aspect-21/9 border border-gray-200 rounded-[12px] flex items-center justify-center cursor-pointer transition-colors">
          </div> */}
          <ImagePicker name="images" onChange={setImagePaths} />
        </div>

        {/* 제목 입력 */}
        <div className="flex flex-col gap-3">
          <label className="text-b-16 font-bold text-primary">
            제목 <span className="text-brand">*</span>
          </label>
          <input
            type="text"
            placeholder="이 순간을 한 줄로 표현해보세요"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-brand"
          />
        </div>

        {/* 설명 입력 */}
        <div className="flex flex-col gap-3">
          <label className="text-b-16 font-bold text-gray-900">설명</label>
          <textarea
            rows={5}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-brand resize-none"
          />
        </div>

        {/* 장소 & 날짜 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-3">
            <label className="text-b-16 font-bold text-primary">
              장소 <span className="text-brand">*</span>
            </label>
            <input
              type="text"
              placeholder="예) 제주 해안도로"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-brand"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-b-16 font-bold text-primary">
              날짜 <span className="text-brand">*</span>
            </label>
            <input
              type="text"
              placeholder="연도.월.일"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-brand"
            />
          </div>
        </div>

        {/* 태그 입력 */}
        <div className="flex flex-col gap-3">
          <label className="text-b-16 font-bold text-primary">태그</label>
          <input
            type="text"
            placeholder="쉼표로 구분하세요 (예: 여행, 제주도, 바다)"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-brand"
          />
        </div>

        <hr className="border-gray-100" />

        {/* 공개 설정 */}
        <div className="flex flex-col gap-4">
          <label className="text-b-16 font-bold text-primary">공개 설정</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="visibility"
                value="private"
                defaultChecked
                className="accent-brand"
              />
              <span className="text-b-16">비공개</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="visibility"
                value="public"
                className="accent-brand"
              />
              <span className="text-b-16">공개</span>
            </label>
          </div>
          <p className="text-sm text-secondary">
            공개로 설정하면 다른 사용자들이 커뮤니티에서 볼 수 있습니다
          </p>
        </div>

        {/* 하단 버튼 */}
        <div className="flex gap-4 pt-10">
          <Button variant="outline" size="l">
            취소
          </Button>
          <Button size="l">기록 저장하기</Button>
        </div>
      </form>
    </main>
  )
}

export default WritePage
