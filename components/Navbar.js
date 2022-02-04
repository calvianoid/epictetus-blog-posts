import { useState } from 'react'
import Container from './Container'
export default function Navbar() {
  const [dropdown, setdropdown] = useState(false)
  const dropdownList = [
    { text: 'Internet', href: '#' },
    { text: 'Books', href: '#' },
    { text: 'Open Source', href: '#' },
  ]
  return (
    <nav className="py-10">
      <Container>
        <div className="flex items-center">
          <div className="flex w-2/12 items-center">
            <div className="mr-4 flex h-10 w-10 items-center justify-center rounded bg-gray-500 shadow-2xl">
              E
            </div>
            Epictetus
          </div>
          <div className="w-7/12">
            <ul className="flex items-center space-x-10">
              <li>
                <a className="hover:underline" href="#">
                  UI Design
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Front-End
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Back-End
                </a>
              </li>
              <li className="relative">
                <a
                  className="flex cursor-pointer items-center hover:underline"
                  onClick={() => {
                    setdropdown(!dropdown)
                  }}
                >
                  Lainnya
                  <svg
                    className="ml-2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                {dropdown && (
                  <ul className="absolute mt-1 mt-4 w-[200px] rounded bg-gray-800 shadow-xl">
                    {dropdownList.map(({ text, href }) => (
                      <li
                        key={text}
                        className="border-b border-white/5 last:border-0"
                      >
                        <a
                          href={href}
                          className="flex py-3 px-6 hover:bg-gray-700/60"
                        >
                          {text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className="w-3/12">
            <input
              className="w-full rounded-full bg-gray-700 py-3 px-6 pl-12 bg-search"
              placeholder="Search"
            />
          </div>
        </div>
      </Container>
    </nav>
  )
}
