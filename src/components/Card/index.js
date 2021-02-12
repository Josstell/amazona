import React from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

const Card = () => {
  return (
    <div className="card">
      <Link href="/">
        <img
          className="medium"
          src="https://img.ltwebstatic.com/images3_pi/2020/10/29/16039533686268dace571c3f6dbfd47a3a044405dd_thumbnail_900x.webp"
          alt=""
        />
      </Link>
      <div className="card-body">
        <Link href="/">
          <h2>Nike Slim Shirts</h2>
        </Link>
        <div className="rating">
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
        </div>
        <div className="price">$120</div>
      </div>
      <style jsx>{`
      .card {
          display:block;
          border: 0.1rem #c0c0c0c0 solid;
          background-color: #f8f8f8f8;
          border-radius: 0.5rem;
          margin: 1rem;
        }
        .card-body {
          padding: 1rem;
        }
        .card-body > * {
          margin-bottom: 0.5rem;
        }
        img {
          border-radius: 0.5rem;
        }
        img.medium {
          max-width: 29rem;
          width: 100%;
        }
        h2 {
          font-size: 1.6rem;
          padding: 1rem 0;
        }
        
        .price {
          font-size: 2rem;
        }
        .rating span{
            color: #f0c040;+
            margin: 0.1rem;
        }
      `}</style>
    </div>
  )
}

export default Card
