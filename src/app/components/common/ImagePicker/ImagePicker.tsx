'use client'

import { useEffect, useRef, useState } from 'react'

import { createClient } from '../../../utils/supabase/client'

type PickedImage = {
  id: string
  file: File
  previewUrl: string
  status: 'uploading' | 'success' | 'error'
  path?: string
}

type ImagePickerProps = {
  label?: string
  name: string
  max?: number
  onChange?: (paths: string[]) => void
}

export default function ImagePicker({
  label,
  name,
  max = 5,
  onChange,
}: ImagePickerProps) {
  const [images, setImages] = useState<PickedImage[]>([])
  const imageInput = useRef<HTMLInputElement>(null)
  const supabase = createClient()

  useEffect(() => {
    onChange?.(
      images.filter((img) => img.status === 'success').map((img) => img.path!),
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images])

  async function uploadImage(image: PickedImage) {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      setImages((prev) =>
        prev.map((img) =>
          img.id === image.id ? { ...img, status: 'error' } : img,
        ),
      )
      return
    }

    const path = `${user.id}/${crypto.randomUUID()}-${image.file.name}`
    const { error } = await supabase.storage
      .from('post-images')
      .upload(path, image.file)

    setImages((prev) =>
      prev.map((img) =>
        img.id === image.id
          ? error
            ? { ...img, status: 'error' }
            : { ...img, status: 'success', path }
          : img,
      ),
    )
  }

  function handlePickClick() {
    imageInput.current?.click()
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || [])
    e.target.value = ''

    if (images.length + files.length > max) {
      alert(`최대 ${max}장까지 가능합니다!`)
      return
    }

    const newImages: PickedImage[] = files.map((file) => ({
      id: crypto.randomUUID(),
      file,
      previewUrl: URL.createObjectURL(file),
      status: 'uploading',
    }))

    setImages((prev) => [...prev, ...newImages])
    newImages.forEach(uploadImage)
  }

  function handleRemove(id: string) {
    setImages((prev) => {
      const target = prev.find((img) => img.id === id)
      if (target) URL.revokeObjectURL(target.previewUrl)
      return prev.filter((img) => img.id !== id)
    })
  }

  function handleRetry(id: string) {
    setImages((prev) => {
      const target = prev.find((img) => img.id === id)
      if (target) uploadImage({ ...target, status: 'uploading' })
      return prev.map((img) =>
        img.id === id ? { ...img, status: 'uploading' } : img,
      )
    })
  }

  return (
    <div className="flex flex-col gap-3">
      {label && <label className="text-b-16 font-bold">{label}</label>}

      <div className="flex gap-4 flex-wrap">
        <input
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          multiple
          className="hidden"
        />

        <div
          onClick={handlePickClick}
          className="w-full h-32 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center cursor-pointer hover:bg-header/40"
        >
          <span className="text-gray-400">+</span>
        </div>

        {images.map((image) => (
          <div key={image.id} className="w-50 h-50 relative shadow-sm">
            <img
              src={image.previewUrl}
              alt="선택한 이미지"
              className="w-full h-full object-cover rounded-lg"
            />

            {image.status === 'uploading' && (
              <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center text-white text-sm">
                업로드 중...
              </div>
            )}

            {image.status === 'error' && (
              <div className="absolute inset-0 bg-black/60 rounded-lg flex flex-col items-center justify-center gap-2 text-white text-sm">
                업로드 실패
                <button
                  type="button"
                  onClick={() => handleRetry(image.id)}
                  className="px-3 py-1 bg-white text-black rounded text-xs"
                >
                  재시도
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={() => handleRemove(image.id)}
              className="absolute top-1 right-1 bg-black/60 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
