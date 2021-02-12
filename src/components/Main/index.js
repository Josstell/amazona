import React from "react"
import Card from "@components/Card"

const Main = () => {
  return (
    <main>
      <div>
        <div className="row center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <style jsx>{`
        main {
          display: grid;
          padding: 1rem;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;
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
    </main>
  )
}

export default Main
