import React from "react"

const Header = props => {
  console.log(props)
  return (
    <header className="row">
      <div>
        <a className="header-logo" href="/">
          Mariachon
        </a>
      </div>
      <div>
        <a className="header-menu" href="/">
          Cart
        </a>
        <a className="header-menu" href="/">
          Sign In
        </a>
      </div>
      <style jsx>{`
        header {
          grid-area: header;
          background-color: #203040;
        }
        .row {
          display: flex;
          flex-wrap: wrap; /* responsive*/
          justify-content: space-between;
          align-items: center;
        }
        .header-menu {
          color: #ffffff;
          padding: 1rem;
        }
        .header-menu:hover {
          color: #ff8000;
          cursor: pointer;
        }
        .header-logo {
          color: #ffffff;
          font-size: 3rem;
          font-weight: bold;
        }
      `}</style>
    </header>
  )
}

export default Header
