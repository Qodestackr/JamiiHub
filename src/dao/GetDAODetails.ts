import { Client, DaoDetails } from "@aragon/sdk-client";
import { context } from "../context/aragonContext";

// Instantiate the general purpose client from the Aragon OSx SDK context.
const client: Client = new Client(context);

// Address or ENS of the DAO whose metadata you want to retrieve.
const daoAddressOrEns: string = "0x1234567890123456789012345678901234567890"; // test.dao.eth

// Get a DAO's details.
const dao: DaoDetails | null = await client.methods.getDao(daoAddressOrEns);
console.log(dao);