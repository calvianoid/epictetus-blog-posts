export default function ({ authorAvatar, authorName, authorJob }) {
  return (
    <div className="mt-5 flex items-center">
      <div>
        <img src={authorAvatar} className="w-12" />
      </div>
      <div className="ml-3">
        <h3 className="text-xl text-white">{authorName}</h3>
        <div className="mt-1 text-sm text-white/60">{authorJob}</div>
      </div>
    </div>
  )
}
