import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";

import { Integrations } from "@sentry/tracing";
import * as Sentry from "@sentry/react";
import { BrowserRouter } from "react-router-dom";

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { polygon, polygonMumbai } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { WagmiConfig, createClient, configureChains, mainnet } from 'wagmi'

import { publicProvider } from 'wagmi/providers/public'

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [
    new Sentry.BrowserTracing({
      tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    }),
    new Sentry.Replay(),
  ],
  // Perf Monitoring
  tracesSampleRate: 0.6,
  // Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

// const { chains, provider, webSocketProvider } = configureChains(
//   [polygonMumbai, polygon,],
//   [
//     // Make sure to get your own API Key from Alchemy itself and store it within your .env file: https://dashboard.alchemy.com/
//     alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_GOERLI_KEY || '' }),
//     publicProvider()
//   ]
// );

// TODO
// const { connectors } = getDefaultWallets({
//   appName: import.meta.env.VITE_DAO_APP_NAME || "",
//   projectId: import.meta.env.VITE_DAO_PROJECT_ID || "",
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
