import {
    Client,
    DaoListItem,
    DaoQueryParams,
    DaoSortBy,
} from "@aragon/sdk-client";
import { SortDirection } from "@aragon/sdk-client-common";
import { context } from "../context/aragonContext";

// Instantiate the general purpose client from the Aragon OSx SDK context.
const client: Client = new Client(context);

const queryParams: DaoQueryParams = {
    skip: 0, // optional
    limit: 10, // optional,
    direction: SortDirection.ASC, // optional
    sortBy: DaoSortBy.CREATED_AT, //optional, alternatively "SUBDOMAIN" (and "POPULARITY" coming soon)
};

// Get a list of DAOs from the Aragon DAO registry.
const daos: DaoListItem[] = await client.methods.getDaos(queryParams);
console.log(daos);