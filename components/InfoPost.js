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
      <div className="flex items-center space-x-3 text-white/60">
        <div className="uppercase">{category}</div>
        <span>&bull;</span>
        <div>{date}</div>
      </div>
      <h2 className="mt-4 text-2xl">{title}</h2>
      <p className="mt-4 w-10/12 text-white/60">{shortDescription}</p>
      <div className="mt-6 flex items-center">
        <div>
          <img src={authorAvatar} className="w-12" />
        </div>
        <div className="ml-3">
          <h3 className="text-xl text-white">{authorName}</h3>
          <div className="mt-1 text-sm text-white/60">{authorJob}</div>
        </div>
      </div>
    </>
  )
}
