import { Client } from "@aragon/sdk-client";
import { DaoAction } from "@aragon/sdk-client-common";
import { context } from "../../context/aragonContext";

// Instantiates an Aragon OSx SDK client.
const client: Client = new Client(context);

const daoAddressOrEns: string = "0x123123123123123123123123123123123123";
const signatureValidator: string = "0x1234567890123456789012345678901234567890";

const action: DaoAction = client.encoding.setSignatureValidatorAction(
    daoAddressOrEns,
    signatureValidator,
);
console.log({ action });