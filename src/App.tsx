import { useEffect, useState } from "react";
import { connectWallet } from "./components/wallet";
import { ShowInfo } from "./components/showInfo";

function App() {

  const defaultError = {
    code: "",
    message: ""
  }


  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [error, setError] = useState(defaultError);

  useEffect(() => {

    async function loadWallet() {
      try {
        const { address, balance } = await connectWallet();
        setAddress(address);
        setBalance(balance);
        setError({ code: "", message: "" })
      } catch (err: any) {
        setError({ code: err.code, message: err.message });
        setAddress(null)
        setBalance(null)
      }
    }
    loadWallet();
  }, [address]);

  if(error.code === "UNKNOWN_ERROR") return <p>Esperando confifrmación del usuario ....</p>

  if(error.code === "ACTION_REJECTED") return <p>El usuario ha negado la conexión</p>

  return (

    <>
      <div className="p-6">
        <h1 className="text-xl font-bold">Mi DApp con Ethers.js</h1>
        <ShowInfo address={address} balance={balance} error={error} />
      </div>
    </>
  );
}

export default App;
