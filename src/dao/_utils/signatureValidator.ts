import { DaoAction } from "@aragon/sdk-client-common";
import { client } from "../../context/aragonContext";

const daoAddressOrEns: string = "0x123123123123123123123123123123123123";
const signatureValidator: string = "0x1234567890123456789012345678901234567890";

const action: DaoAction = client.encoding.setSignatureValidatorAction(
    daoAddressOrEns,
    signatureValidator,
);
console.log({ action });