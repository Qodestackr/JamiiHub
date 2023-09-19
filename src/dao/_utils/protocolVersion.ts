import {
    Client,
} from "@aragon/sdk-client";
import { context } from "../../context/aragonContext";

// Instantiate the general purpose client from the Aragon OSx SDK context.
const client: Client = new Client(context);

const protocolVersion = await client.methods
    .getProtocolVersion(
        "0x1234567890123456789012345678901234567890",
    );
console.log(protocolVersion);