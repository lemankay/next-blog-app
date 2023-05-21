import Link from "next/link"


export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <div>
    <h1>Blog us</h1>
    <ul>
        <li>
            <Link href="/blog/video">Video</Link>
        </li>
        <li>
            <Link href="/blog/new">New post</Link>
        </li>
    </ul>
    {children}
  </div>
  )
}
