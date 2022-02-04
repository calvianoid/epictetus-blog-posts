import Link from 'next/link'
import InfoPost from './InfoPost'

export default function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article>
      <Link href="/detail">
        <a>
          <img src={thumbnail} className="mb-4 w-full rounded" />
        </a>
      </Link>
      <InfoPost {...infoPost} />
    </article>
  )
}
