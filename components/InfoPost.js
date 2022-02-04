import PostMetaTitle from './PostMetaTitle'
import PostAuthor from './PostAuthor'

export default function InfoPost({
  category,
  date,
  title,
  shortDescription,
  authorAvatar,
  authorName,
  authorJob,
}) {
  return (
    <>
      <PostMetaTitle category={category} date={date} title={title} />
      <p className="mt-4 w-10/12 text-white/60">{shortDescription}</p>
      <PostAuthor
        authorAvatar={authorAvatar}
        authorName={authorName}
        authorJob={authorJob}
      />
    </>
  )
}
