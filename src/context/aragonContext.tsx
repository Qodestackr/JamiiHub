import { Wallet } from "@ethersproject/wallet";
import { Context, ContextParams } from "@aragon/sdk-client";
import { SupportedNetwork } from "@aragon/sdk-client-common";

//  TODO: Use Infura or Alechmy.
export const IPFS_API_KEY: string = import.meta.env.VITE_IPFS_API_KEY || ""

export const contextParams: ContextParams = {
    network: "maticmum" || SupportedNetwork.POLYGON,
    signer: Wallet.createRandom(),
    daoFactoryAddress: "0x1234381072385710239847120734123847123",
    ensRegistryAddress: "0x1234381072385710239847120734123847123",
    web3Providers: ["https://rpc.ankr.com/eth_goerli"],
    ipfsNodes: [
        {
            url: "https://test.ipfs.aragon.network/api/v0",
            headers: { "X-API-KEY": IPFS_API_KEY },
        },
    ],
    graphqlNodes: [
        {
            url: "https://subgraph.satsuma-prod.com/aragon/core-goerli/api",
        },
    ],
};

export const context: Context = new Context(contextParams);