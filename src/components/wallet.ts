import { ethers } from "ethers";

export async function connectWallet() {
  
  if (typeof window.ethereum === "undefined") {
    throw new Error("MetaMask no está instalado");
  }

  // Pide conexión a MetaMask 
  const provider = new ethers.BrowserProvider(window.ethereum);
  const accounts = await provider.send("eth_requestAccounts", []);
  const address = accounts[0];

  // Obtiene balance
  const balance = await provider.getBalance(address);
  const balanceInEth = ethers.formatEther(balance);

  return { address, balance: balanceInEth };
}
