import { Wallet } from "@ethersproject/wallet";
import { Context, ContextParams } from "@aragon/sdk-client";
import { SupportedNetwork } from "@aragon/sdk-client-common";

//  TODO: Use Infura or Alechmy.
export const IPFS_API_KEY: string = import.meta.env.VITE_IPFS_API_KEY || ""

export const contextParams: ContextParams = {
    // Choose the network you want to use. You can use "goerli" (Ethereum) or "maticmum" (Mumbai) for testing, or "mainnet" (Ethereum) and "polygon" (Polygon) for mainnet.
    network: "maticmum" || SupportedNetwork.POLYGON,
    // This is the account that will be signing transactions for your app. You can use also use a specific account where you have funds, through passing it `new Wallet("your-wallets-private-key")` or pass it in dynamically when someone connects their wallet to your dApp.
    signer: Wallet.createRandom(),
    // Optional on "rinkeby", "arbitrum-rinkeby" or "mumbai"
    // Pass the address of the  `DaoFactory` contract you want to use. You can find it here based on your chain of choice: https://github.com/aragon/core/blob/develop/active_contracts.json
    // Optional. Leave it empty to use Aragon's DAO Factory contract and claim a dao.eth subdomain
    daoFactoryAddress: "0x1234381072385710239847120734123847123",
    /* @ optional. Pass the address of the ensRegistry for networks other than Mainnet or Goerli. */
    // It will default to the registry deployed by Aragon. https://github.com/aragon/osx/blob/develop/active_contracts.json
    ensRegistryAddress: "0x1234381072385710239847120734123847123",
    // Choose your Web3 provider: Cloudfare, Infura, Alchemy, etc.
    // Remember to change the list of providers if a different network is selected
    web3Providers: ["https://rpc.ankr.com/eth_goerli"],
    // Optional. By default, it will use Aragon's provided endpoints.
    // They will switch depending on the network (production, development)
    ipfsNodes: [
        {
            url: "https://test.ipfs.aragon.network/api/v0",
            headers: { "X-API-KEY": IPFS_API_KEY },
        },
    ],
    // Optional. By default it will use Aragon's provided endpoints.
    // They will switch depending on the network (production, development)
    graphqlNodes: [
        {
            url: "https://subgraph.satsuma-prod.com/aragon/core-goerli/api",
        },
    ],
};

// After defining the context parameters, you'll use them to instantiate the Aragon SDK context
export const context: Context = new Context(contextParams);