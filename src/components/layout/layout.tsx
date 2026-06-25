import type { ReactNode } from "react"
import { Header } from "../header"
import { Footer } from "../footer"



type LayoutProps = {
  children: ReactNode
  className?: string
}

export function Layout({children, className}: LayoutProps){

  return(
    <div className={`${className} relative flex min-h-screen flex-col dark bg-gray-500`}>
      <Header/>
      <main className='flex-1 flex flex-col mb-12'>
        {children}
      </main>
      <Footer/>
    </div>
  )
}