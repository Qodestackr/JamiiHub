import { AssetBalance } from "@aragon/sdk-client";
import { client } from "../context/aragonContext";


// Address of the DAO whose asset balances you want to retrieve.
const daoAddressOrEns: string = "0x12345...";

// Get a DAO's asset balances.
const daoBalances: AssetBalance[] | null = await client.methods.getDaoBalances({
    daoAddressOrEns,
});
console.log(daoBalances);