import { AssetBalance, Client } from "@aragon/sdk-client";
import { context } from "../context/aragonContext";

// Instantiate the general purpose client from the Aragon OSx SDK context.
const client: Client = new Client(context);

// Address of the DAO whose asset balances you want to retrieve.
const daoAddressOrEns: string = "0x12345...";

// Get a DAO's asset balances.
const daoBalances: AssetBalance[] | null = await client.methods.getDaoBalances({
    daoAddressOrEns,
});
console.log(daoBalances);