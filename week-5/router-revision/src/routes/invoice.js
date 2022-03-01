import { useParams } from "react-router-dom"
import { getInvoice } from "../data"

export default function Invoice() {
    let params = useParams()
    let invoice = getInvoice(parseInt(params.invoiceID, 10))

    return (
     <div>
        <h2>Total Due: {invoice.amount}</h2>
        <p>
            {invoice.name}: {invoice.number}
        </p>
        <p>Due date: {invoice.due}</p>
    </div>
    )
}