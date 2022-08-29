import "../styles/globals.css";

import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";
import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import AppLayout from "@/layouts/AppLayout";
import Navbar2 from "@/components/Navbar";

import { wrapper } from "../redux/store"

function MyApp({ Component, pageProps }: AppProps) {
  const { chains, provider } = configureChains(
    [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
    [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  return (
    <div className="bg-primaryDark h-screen overflow-hidden">
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <AppLayout>
            <Navbar2 />
            <Component {...pageProps} />;
          </AppLayout>
        </RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
}

export default wrapper.withRedux(MyApp);
