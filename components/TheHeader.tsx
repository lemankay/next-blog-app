import Link from "next/link"

const TheHeader = () => {
  return (
    <section className="header">
        <div  className="wrapper" >
         <div className="header-section">
          <div className="logo"><h2>Your Logo</h2></div>
            <div className="nav" >
                    <header>
                      <!-- Google tag (gtag.js) -->
                          <script async src="https://www.googletagmanager.com/gtag/js?id=G-HN8G5B01H4"></script>
                          <script>
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                          
                            gtag('config', 'G-HN8G5B01H4');
                          </script>
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
