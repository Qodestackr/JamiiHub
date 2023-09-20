import { client } from "../../context/aragonContext";

const protocolVersion = await client.methods
    .getProtocolVersion(
        "0x1234567890123456789012345678901234567890",
    );
console.log(protocolVersion);