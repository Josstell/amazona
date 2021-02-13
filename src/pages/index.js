import Head from "next/head"
import Link from "next/link"

import data from "../data/data"

export default function Home() {
  return (
    <>
      <Head>
        <title>Mariachon</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link href="/">
              <a className="brand">Mariachon</a>
            </Link>
          </div>
          <div>
            <Link href="/cart">
              <a>Cart</a>
            </Link>
            <Link href="/signin">
              <a>Sign In</a>
            </Link>
          </div>
        </header>
        <main>
          <div>
            <div className="row center">
              {data.products.map(product => (
                <div key={product._id} className="card">
                  <Link href={`product/${product._id}`}>
                    <a>
                      <img
                        className="medium"
                        src={product.image}
                        alt={product.name}
                      />
                    </a>
                  </Link>
                  <div className="card-body">
                    <Link href={`product/${product._id}`}>
                      <a>
                        <h2>{product.name}</h2>
                      </a>
                    </Link>
                    <div className="rating">
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                    </div>
                    <div className="price">$ {product.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>

      <style jsx>{`
        /* Layout */
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
        header {
          grid-area: header;
          background-color: #203040;
        }
        main {
          grid-area: main;
          padding: 1rem;
        }
        footer {
          grid-area: footer;
          background-color: #203040;
          color: #ffffff;
        }
        /* Common */
        h1 {
          font-size: 1.8rem;
          padding: 1rem 0;
        }
        h2 {
          font-size: 1.6rem;
          padding: 1rem 0;
        }

        a {
          text-decoration: none;
        }
        a:hover {
          color: #ff8000;
        }
        /* Header */
        header a {
          color: #ffffff;
          padding: 1rem;
        }
        a.brand {
          color: #ffffff;
          font-size: 3rem;
          font-weight: bold;
        }
        .row {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
        }
        .row.center {
          justify-content: center;
        }
        /* Image */
        img {
          border-radius: 0.5rem;
        }
        img.medium {
          max-width: 29rem;
          width: 100%;
        }

        /* Card */
        .card {
          border: 0.1rem #c0c0c0 solid;
          background-color: #f8f8f8;
          border-radius: 0.5rem;
          margin: 1rem;
        }
        .card-body {
          padding: 1rem;
        }
        .card-body > * {
          margin-bottom: 0.5rem;
        }
        .price {
          font-size: 2rem;
        }
        /* Rating */
        .rating span {
          color: #f0c040;
          margin: 0.1rem;
        }
      `}</style>
    </>
  )
}
