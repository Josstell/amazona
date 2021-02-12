import React from "react"

const Footer = () => {
  return (
    <footer className="row center">
      <h2>Todos los derechos reservados</h2>
      <style jsx>{`
        footer {
          display: flex;
          background-color: #203040;
          color: #ffffff;
        }

        .row {
          display: flex;
          flex: wrap;
          text-align: space-between;
          align-items: center;
        }
        .row.center {
          justify-content: center;
        }
      `}</style>
    </footer>
  )
}

export default Footer
