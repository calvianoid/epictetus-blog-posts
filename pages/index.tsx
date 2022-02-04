import Head from 'next/head'
import Navbar from '../components/Navbar'
import FeaturedPost from '../components/FeaturedPost'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-gray-900 to-gray-600 text-white">
      <Navbar />
      <div className="container mx-auto">
        <FeaturedPost />
      </div>
    </div>
  )
}
