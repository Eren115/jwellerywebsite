import '../styles/styles.css';
import Navbar from "../components/Navbar";

export default function NextApp({ Component, pageProps }) {
  return (
    <main data-scroll-container>
      <Navbar />
      <Component {...pageProps} />
    </main>
  )
}


