import Link from "next/link"

const TheHeader = () => {
  return (
    <section className="header">
        <div  className="wrapper" >
         <div className="header-section">
          <div className="logo"><h2>Your Logo</h2></div>
            <div className="nav" >
                    <header>
                        <Link href='/'>Home</Link>
                        <Link href='/blog'>Blog</Link>
                        <Link href='/about'>About</Link>
                    </header>
            </div>
         </div>
        </div>
  </section>



  )
}
export {TheHeader}