import Layout from '../components/Layout'
import CardPost from '../components/CardPost'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { useState } from 'react'
import mockPosts from '../ulits/posts.json'

export default function Posts() {
  const [posts, setPosts] = useState(mockPosts)

  return (
    <Layout>
      <Container>
        <SectionHeader>UI Design</SectionHeader>
        {!posts.length ? (
          <div className="py-20 text-center">
            <h2 className="text-6xl">No result 😥</h2>
            <p className="mx-auto mt-4 w-full text-xl text-white/60 md:w-6/12">
              We couldn’t find any posts with the keyword `yahahahayuk`. Please
              try another keyword.
            </p>
          </div>
        ) : (
          <div className="-mx-4 flex flex-wrap pt-6">
            {posts.map((post) => (
              <div key={post.id} className="w-full px-4 py-6 md:w-4/12">
                <CardPost {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </Layout>
  )
}
