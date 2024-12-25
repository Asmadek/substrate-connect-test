import { useEffect } from "react";
import { ScProvider } from "@polkadot/rpc-provider/substrate-connect"
import * as Sc from "@substrate/connect";
import { ApiPromise } from "@polkadot/api"
import "./App.css";

function App() {
  useEffect(() => {
    (async () => {
      const provider = new ScProvider(Sc, Sc.WellKnownChain.polkadot);
      await provider.connect();

      console.log("is provider connected:", provider.isConnected);

      const api = await ApiPromise.create({ provider })

      console.log("api connected:", api.isConnected);
      console.log("api ready:", api.isReady);
      console.log("api readyorerror:", api.isReadyOrError);
    })();
  }, []);

  return <></>;
}

export default App;
