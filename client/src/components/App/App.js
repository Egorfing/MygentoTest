import { useState } from "react";
import Form from "../Form/Form";
import ModalAgree from "../ModalAgree/ModalAgree";
import ModalSuccess from "../ModalSuccess/ModalSuccess";
import "./App.css"

function App() {

  const [modalActiveS, setModalActiveS] = useState(false)
  const [modalActiveA, setModalActiveA] = useState(false)
  return (
    <div className="main">
     <Form/>
     <ModalAgree active={modalActiveA} setActive={setModalActiveA}/>
     <ModalSuccess active={modalActiveS} setActive={setModalActiveS}/>
    </div>
  );
}

export default App;
