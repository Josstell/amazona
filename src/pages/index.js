import Head from "next/head"
import Header from "@components/Header"
import Main from "@components/Main"
import Footer from "@components/Footer"

export default function Home() {
  return (
    <div className="grid-container">
      <Header />
      <Main />
      <Footer />
      <style jsx>{`
        .grid-container {
          display: grid;
          grid-template-areas:
            "header"
            "main"
            "footer";
          grid-template-columns: 1fr;
          grid-template-rows: 5rem 1fr 5rem;
          height: 100%;
        }
      `}</style>
    </div>
  )
}
