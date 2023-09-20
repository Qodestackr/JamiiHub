export type WebhookRequest = {
    "data": {
        "status":
        | "swap_initiated" // user has created a swap order
        | "swap_expired" // swap order has expired
        | "swap_buyer_rejected"  // user has rejected a swap order
        | "swap_buyer_confirmed" // user has confirmed a swap order
        | "swap_seller_rejected" // market maker has rejected a swap order
        | "swap_seller_confirmed" // market maker has confirmed a swap order
        | "pending"
        | "complete"
        | "failed",
        "date": string, // date when event has happened
        "orderId": string, // order id in their system
        "phoneNumber": string, // customer phone number
        "localCurrencyAmount": number, // amount of local currency user paid
        "localCurrencyIsoCode": string, // ISO code of local currency user paid, e.g. KES, NGN etc.
        "countryIsoCode": string, // ISO code of country user paid from, e.g. KE, NG etc.
        "provider": // payment provider user paid with
        | "carrier"
        | "mpesa"
        | "mobile_money"
        | "bank_transfer"
        "amount": number, // amount of USDC user received
        "network": // network user received USDC on
        | "POLYGON"
        | "ETHEREUM"
        | "AVALANCHE"
        | "CELO"
        "address": string, // address user received USDC on
        "orderParams": string // Content of a orderParams query parameter provided to a pay widget URL. It might be useful for matching a merchant system user to an order user.
        "hash": string, // transaction hash
    },
    "hash": string, // SHA256 encrypted request.data string to validate a webhook request
};