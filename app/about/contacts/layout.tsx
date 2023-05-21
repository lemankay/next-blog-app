import Link from "next/link"


export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <div>
    <h1>Contacts us</h1>
    <ul>
        <li>
            <Link href="/about/contacts/phone">Phone</Link>
        </li>
        <li>
            <Link href="/about/contacts/adress">Adress</Link>
        </li>
    </ul>
    {children}
  </div>
  )
}
