let invoices = [
    {
        name: 'Santa',
        number: 1995,
        amount: '$10,000',
        due: '12/05/1995',
    },
    {
        name: 'Santa',
        number: 1995,
        amount: '$10,000',
        due: '12/05/1995',
    },
    {
        name: 'Santa',
        number: 1995,
        amount: '$10,000',
        due: '12/05/1995',
    },
    {
        name: 'Santa',
        number: 1995,
        amount: '$10,000',
        due: '12/05/1995',
    },

]

export function getInvoices() {
    return invoices
}

export function getInvoice(number) {
    return invoices.find(
        (invoice) => invoice.number === number
    )
}