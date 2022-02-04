import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-t from-gray-900 to-gray-600 text-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
