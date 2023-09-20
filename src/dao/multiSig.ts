import {
    CreateDaoParams,
    DaoCreationSteps,
    MultisigClient,
    MultisigPluginInstallParams,
} from "@aragon/sdk-client";
import { GasFeeEstimation } from "@aragon/sdk-client-common";
import { client } from "../context/aragonContext";

// Addresses which will be allowed to vote in the Multisig plugin.
const members: string[] = [
    "0x1234567890123456789012345678901234567890",
    "0x2345678901234567890123456789012345678901",
    "0x3456789012345678901234567890123456789012",
    "0x4567890123456789012345678901234567890123",
];

const multisigPluginIntallParams: MultisigPluginInstallParams = {
    votingSettings: {
        minApprovals: 1,
        onlyListed: true,
    },
    members,
};

// Encodes the parameters of the Multisig plugin. These will get used in the installation plugin for the DAO.
const multisigPluginInstallItem = MultisigClient.encoding
    .getPluginInstallItem(multisigPluginIntallParams, "goerli");

// Pin metadata to IPFS, returns IPFS CID string.
const metadataUri: string = await client.methods.pinMetadata({
    name: `JamiiHub DAO`,
    description: `**JamiiHub** is a proposed digital platform that brings together individuals and organizations for East Africa`,
    avatar: "", // image url
    links: [{
        name: "Web site",
        url: "https://...",
    }],
});

const createParams: CreateDaoParams = {
    metadataUri,
    ensSubdomain: "jamiihub.dao.eth", // my-org.dao.eth
    plugins: [multisigPluginInstallItem],
};

// Estimate gas for the transaction.
const estimatedGas: GasFeeEstimation = await client.estimation.createDao(
    createParams,
);
console.log({ avg: estimatedGas.average, max: estimatedGas.max });

// Creates a DAO with a Multisig plugin installed.
const steps = client.methods.createDao(createParams);
for await (const step of steps) {
    try {
        switch (step.key) {
            case DaoCreationSteps.CREATING:
                console.log({ txHash: step.txHash });
                break;
            case DaoCreationSteps.DONE:
                console.log({
                    daoAddress: step.address,
                    pluginAddresses: step.pluginAddresses,
                });
                break;
        }
    } catch (err) {
        console.error(err);
    }
}