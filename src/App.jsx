import { useState } from "react";
import Grid from "./components/Grid";
import Header from "./components/Header";
import Input from "./components/Input";

function App() {
  const [inputNo, setInputNo] = useState();
  const [ruleNo, setRuleNo] = useState();
  const [generated, setGenerated] = useState(false);

  return (
    <div>
      <Header />
      <Input
        inputNo={inputNo}
        setInputNo={setInputNo}
        setRuleNo={setRuleNo}
        setGenerated={setGenerated}
      />
      {generated ? (
        <Grid ruleNo={ruleNo} columnSize={39} />
      ) : (
        <div className="flex justify-center my-10">
          <p>Fill the input and press generate</p>
        </div>
      )}
    </div>
  );
}

export default App;
