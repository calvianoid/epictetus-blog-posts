import Link from 'next/link'
import InfoPost from '../components/InfoPost'

export default function FeaturedPost() {
  return (
    <article>
      <div className="-mx-6 flex flex-wrap items-center">
        <div className="mb-4 w-full px-6 md:mb-0 md:w-7/12 lg:w-8/12">
          <Link href="/detail">
            <a>
              <img
                src="./featured-thumbnail.png"
                alt="featured-thumbnail"
                className="w-full rounded-xl"
              />
            </a>
          </Link>
        </div>
        <div className="w-full px-4 md:w-5/12 lg:w-4/12">
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
      <hr className="mt-10 border-white/10 md:hidden" />
    </article>
  )
}
