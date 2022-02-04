import InfoPost from '../components/InfoPost'

export default function FeaturedPost() {
  return (
    <article>
      <div className="-mx-6 flex items-center">
        <div className="w-8/12 px-6">
          <img
            src="./featured-thumbnail.png"
            alt="featured-thumbnail"
            className="w-full rounded-xl"
          />
        </div>
        <div className="w-4/12 px-4">
          <InfoPost
            category="UI DESIGN"
            date="July 2, 2021"
            title="Understanding color theory: the color wheel and finding complementary colors"
            shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            authorAvatar="./author-1.png"
            authorName="Leslie Alexander"
            authorJob="UI Designer"
          />
        </div>
      </div>
    </article>
  )
}
