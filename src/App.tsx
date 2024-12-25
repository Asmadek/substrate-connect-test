import { useEffect } from "react";
import { ScProvider } from "@polkadot/rpc-provider";
import * as Sc from "@substrate/connect";
import "./App.css";

function App() {
  useEffect(() => {
    (async () => {
      const provider = new ScProvider(Sc, Sc.WellKnownChain.polkadot);
      await provider.connect();

      console.log("is provider connected:", provider.isConnected);
    })();
  }, []);

  return <></>;
}

export default App;
