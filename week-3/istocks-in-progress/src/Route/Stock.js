import { useParams } from "react-router-dom"

export default function Stock() {
    let params = useParams()
    return <p>Stock: {params.stock.symbol}</p>
}