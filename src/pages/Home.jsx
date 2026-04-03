import { useState } from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import Grid from "../components/Grid";
import Footer from "../components/Footer";

export default function Home() {
  const [inputNo, setInputNo] = useState();
  const [ruleNo, setRuleNo] = useState();
  const [generated, setGenerated] = useState(false);

  return (
    <>
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
      <Footer />
    </>
  );
}
