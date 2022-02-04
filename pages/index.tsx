import Head from 'next/head'
import FeaturedPost from '../components/FeaturedPost'
import Layout from '../components/Layout'
import CardPost from '../components/CardPost'
import Container from '../components/Container'
import { useState } from 'react'
import mockPosts from '../ulits/posts.json'

export default function Home() {
  const [posts, setPosts] = useState(mockPosts)

  return (
    <Layout>
      <Head>
        <title>Home &mdash; Epictetus</title>
      </Head>
      <Container>
        <FeaturedPost />
        <div className="-mx-4 flex flex-wrap pt-6">
          {posts.map((post) => (
            <div key={post.id} className="w-full px-4 py-6 md:w-4/12">
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  )
}
