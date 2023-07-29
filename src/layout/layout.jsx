import React from 'react';
import { Header } from './header';
import { Footer } from './footer';
export const Layout = ({children}) => {
  return (
    <>
    <div style={{display:"flex",justifyContent:"space-between",flexDirection:"column"}}>
    <header>
        <Header />
    </header>
    <main>{children}</main>
    </div>
    <footer>
        <Footer/>
    </footer>
    </>
  )
}
