import Link from "next/link"


export default function TeamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <div>
    <h1>Team us</h1>
    <ul>
        <li>
            <Link href="/about/team/person">Team Person</Link>
        </li> 
        <li>
            <Link href="/about/team/personposition">Team Position</Link>
        </li>  
        <li>
            <Link href="/about/team/fonat">Team Fonat</Link>
        </li>   
        <li>
            <Link href="/about/team/cityteam">Team City</Link>
        </li>        
    </ul>
    {children}
  </div>
  )
}