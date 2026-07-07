import type { ReactNode } from "react"
import { Header } from "../header"
import { Footer } from "../footer"



type LayoutProps = {
  children: ReactNode
  className?: string
}

export function Layout({children, className}: LayoutProps){

  return(
    <div className={`${className} font-sans relative flex min-h-screen flex-col dark bg-gray-800`}>
      <Header/>
      <main className='flex-1 flex flex-col mb-12 pt-16'>
        {children}
      </main>
      <Footer/>
    </div>
  )
}