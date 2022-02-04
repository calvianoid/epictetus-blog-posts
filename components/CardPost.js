import InfoPost from './InfoPost'

export default function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article>
      <img src={thumbnail} className="mb-4 w-full rounded" />
      <InfoPost {...infoPost} />
    </article>
  )
}
