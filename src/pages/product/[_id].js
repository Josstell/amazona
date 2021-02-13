import React from "react"
import { useRouter } from "next/router"

const Product = () => {
  const router = useRouter()
  const { _id } = router.query
  return <div>{_id}</div>
}

export default Product
