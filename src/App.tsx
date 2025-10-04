import { useEffect, useState } from "react";
import { connectWallet } from "./components/wallet";
import { ShowInfo } from "./components/showInfo";
import CustomFullScreenLoading from "./components/LoadScreen";

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

  if(error.code === "UNKNOWN_ERROR") return <CustomFullScreenLoading />

  if(error.code === "ACTION_REJECTED") return <div className="flex items-center justify-center mt-10 text-2xl font-bold">El usuario ha negado la conexión</div>

  return (

    <>
      <div className="p-6 flex justify-center items-center">
        <h1 className="text-xl font-bold">Mi DApp con Ethers.js</h1>
        <ShowInfo address={address} balance={balance} />
      </div>
    </>
  );
}

export default App;
