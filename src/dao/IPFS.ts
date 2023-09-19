import { Client, DaoMetadata } from "@aragon/sdk-client";
import { context } from "../context/aragonContext";

// Instantiate the general purpose client from the Aragon OSx SDK context.
const client: Client = new Client(context);

// The Metadata object containing the details of the DAO.
const metadata: DaoMetadata = {
    name: "My DAO",
    description: "This is a description",
    avatar: "",
    links: [{
        name: "Web site",
        url: "https://...",
    }],
};

// Pin the metadata in IPFS.
const metadataUri = await client.methods.pinMetadata(metadata);
console.log(metadataUri);