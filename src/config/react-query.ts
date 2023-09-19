import { QueryClient } from "react-query";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

export const queryClient = new QueryClient();

export const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

/****
<QueryClientProvider
    client={queryClient}
    // persistOptions={{ persister }}> 
****/
