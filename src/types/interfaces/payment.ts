export type Payment = {
    id: string
    name: string
    position: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}