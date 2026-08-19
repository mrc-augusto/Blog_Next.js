import { Layout } from "@/components/layout";
import "@/styles/globals.css";
import {Inter, PT_Sans_Caption} from 'next/font/google'

import type { AppProps } from "next/app";

const inter = Inter({
  subsets: ['latin'],
  weight:['400', '500'],
  variable: '--font-body-family'
})

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight:['700'],
  variable: '--font-heading-family'
})



export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout className={`${inter.variable} ${ptSansCaption.variable}`}>
      <Component {...pageProps} />
    </Layout>
  )   
}
