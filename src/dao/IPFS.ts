import { DaoMetadata } from "@aragon/sdk-client";
import { client } from "../context/aragonContext";

// The Metadata object containing the details of the DAO.
const metadata: DaoMetadata = {
    name: `JamiiHub DAO`,
    description: `**JamiiHub** is a proposed digital platform that brings together individuals and organizations for East Africa`,
    avatar: "",
    links: [{
        name: "Web site",
        url: "https://...",
    }],
};

// Pin the metadata in IPFS.
const metadataUri = await client.methods.pinMetadata(metadata);
console.log(metadataUri);