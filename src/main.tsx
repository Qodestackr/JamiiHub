import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";

import { Integrations } from "@sentry/tracing";
import * as Sentry from "@sentry/react";
import { BrowserRouter } from "react-router-dom";

// import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
// import { goerli } from 'wagmi/chains';
// import { alchemyProvider } from 'wagmi/providers/alchemy';

// // import { configureChains, mainnet } from 'wagmi'
// import { WagmiConfig, createClient, configureChains, mainnet } from 'wagmi'

// import { publicProvider } from 'wagmi/providers/public'

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY,
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", "https:yourserver.io/api/"],
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: import.meta.env.VITE_ENV === "DEV" ? 1.0 : 0.3, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

// const { chains, publicClient, webSocketPublicClient } = configureChains(
//   // Determine which chains you want for your app
//   [goerli],
//   [
//     // Make sure to get your own API Key from Alchemy itself and store it within your .env file: https://dashboard.alchemy.com/
//     alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_GOERLI_KEY || '' }),
//     publicProvider()
//   ]
// );

// const config = createConfig({
//   autoConnect: true,
//   publicClient,
//   webSocketPublicClient,
// })

// TODO
// const { connectors } = getDefaultWallets({
//   appName: 'JamiiHub DAO',
//   projectId: '',
//   chains: []
// });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Sentry.ErrorBoundary>
      <BrowserRouter>
        <App />
        {/* <WagmiConfig config={config}>
          <RainbowKitProvider chains={chains}>
            
          </RainbowKitProvider>
        </WagmiConfig> */}
      </BrowserRouter>
    </Sentry.ErrorBoundary>
  </React.StrictMode>
);
