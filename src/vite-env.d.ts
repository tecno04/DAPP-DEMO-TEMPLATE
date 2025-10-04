import type { Eip1193Provider } from "ethers";
import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
    interface Window {
        ethereum?: Eip1193Provider | MetaMaskInpageProvider;
    }
}
