export default function PostMetaTitle({ category, date, title, center }) {
  return (
    <>
      <div className="flex items-center space-x-3 text-white/60">
        <div className="uppercase">{category}</div>
        <span>&bull;</span>
        <div>{date}</div>
      </div>
      <h2 className={`mt-4 text-2xl ${center ? 'text-center' : ''}`}>
        {title}
      </h2>
    </>
  )
}
