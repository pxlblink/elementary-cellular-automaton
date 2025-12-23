import { useState } from "react";
import Grid from "./components/Grid";
import Header from "./components/Header";
import Input from "./components/Input";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";

function App() {
  const [inputNo, setInputNo] = useState();
  const [ruleNo, setRuleNo] = useState();
  const [generated, setGenerated] = useState(false);

  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
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
