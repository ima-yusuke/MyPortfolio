import Layout from '@/components/Layout'
import '@/styles/globals.scss'
import { useState } from 'react'
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  // Everytime when you click a hamburger icon, current page name will be saved. So you can go back to previous page from nav page easily
  const [page, setPage] = useState("/");

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <Layout page={page} setPage={setPage}><Component {...pageProps} page={page} setPage={setPage}/></Layout>
}
