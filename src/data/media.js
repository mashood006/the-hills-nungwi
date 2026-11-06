export const IMDB_MULLER = 'https://www.imdb.com/name/nm4092329/'
export const IMDB_BROLO = 'https://www.imdb.com/name/nm5421826/'

export const MEDIA_VIDEOS = [
  {
    id: 'hills-film',
    youtubeId: 'iZl-CoRuCnQ',
    title: 'The Hills, Nungwi',
    category: 'Film',
    duration: 'Watch',
    description:
      'An introduction to The Hills — branded residences on Zanzibar’s northern tip, shaped by light, shore and lasting design.',
    thumb: 'https://img.youtube.com/vi/iZl-CoRuCnQ/maxresdefault.jpg',
    showCredit: true,
  },
]

export function youtubeEmbedUrl(id, { autoplay = false } = {}) {
  const params = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
    playsinline: '1',
  })
  if (autoplay) params.set('autoplay', '1')
  return `https://www.youtube.com/embed/${id}?${params.toString()}`
}
