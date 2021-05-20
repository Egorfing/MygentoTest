import React, { useRef } from 'react';
import { useState } from "react";
import ModalAgree from "../ModalAgree/ModalAgree";
import ModalSuccess from "../ModalSuccess/ModalSuccess";
import "./Form.css"

function Form(props) {
  const [modalActiveS, setModalActiveS] = useState(false)
  const [modalActiveA, setModalActiveA] = useState(false)
  const [name, setName] = useState('')
  const nameRef = useRef()
  const surnameRef = useRef()
  const emailRef = useRef()
  const fileRef = useRef()
  const urlRef = useRef()
  function gender() {
    document.querySelector(".spanGender").style.display = "none"
  }
  function fileHandler(e) {
    e.preventDefault()
    if (e.target.files[0]) {
      let fileName = e.target.files[0].name
      document.querySelector(".plus").style.display = "none"
      document.querySelector(".plus1").style.display = "none"
      document.querySelector(".fileAdd span").innerText = fileName
      let label = document.querySelector(".fileAdd")
      label.classList.add('pdfName')
      label.classList.remove('fileAdd')
    } else {
      document.querySelector(".plus").style.display = "initial"
      document.querySelector(".plus1").style.display = "initial"
      document.querySelector(".pdfName span").innerText = "Загрузить резюме"
      let label = document.querySelector(".pdfName")
      label.classList.remove('pdfName')
      label.classList.add('fileAdd')
    }


    const name = nameRef.current.value
    setName(name)
    const surname = surnameRef.current.value
    const email = emailRef.current.value
    const file = fileRef.current.value
    const url = urlRef.current.value
    const check = document.getElementById("check").checked
    if (name && surname && email && file && url && check) {
      document.querySelector("button").disabled = false
    } else {
      document.querySelector("button").disabled = true
    }
  }

  function disablRemove() {
    const name = nameRef.current.value
    if (name) {
      setName(name)
    }
    const surname = surnameRef.current.value
    const email = emailRef.current.value
    const file = fileRef.current.value
    const url = urlRef.current.value
    const check = document.getElementById("check").checked
    if (name && surname && email && file && url && check) {
      document.querySelector("button").disabled = false
    } else {
      document.querySelector("button").disabled = true
    }
  }
  function formHandler(e) {
    e.preventDefault()
    nameRef.current.value = ""
    surnameRef.current.value = ""
    emailRef.current.value = ""
    
    document.querySelector(".plus").style.display = "initial"
    document.querySelector(".plus1").style.display = "initial"
    document.querySelector(".pdfName span").innerText = "Загрузить резюме"
    let label = document.querySelector(".pdfName")
    label.classList.remove('pdfName')
    label.classList.add('fileAdd')

    urlRef.current.value = ""
    document.getElementById("check").checked = false
    document.getElementById("men").checked = false
    document.getElementById("women").checked = false
    setModalActiveA(true)
  }
  return (
    <div>
      <h1>Анкета соискателя</h1>
      <form onSubmit={e => formHandler(e)} >
        <h3>Личные данные</h3>
        <div className="formMain">
          <div className="form">
            <label htmlFor="name" className="form-label">Имя*</label>
            <input onChange={disablRemove} ref={nameRef} type="text" className="input" id="name" placeholder="Имя" required />
          </div>
          <div className="form">
            <label htmlFor="surname" className="form-label">Фамилия*</label>
            <input onChange={disablRemove} ref={surnameRef} type="text" className="input" id="surname" placeholder="Фамилия" required />
          </div>
          <div className="form">
            <label htmlFor="email" className="form-label">Электронная почта*</label>
            <input onChange={disablRemove} ref={emailRef} type="email" className="input" id="email" placeholder="Электронная почта" required />
          </div>
          <label className="fileAdd" htmlFor="file">
            <input ref={fileRef} onChange={e => fileHandler(e)} type="file" className="form-control" id="file" accept="application/pdf" name="file" required />
            <img className="plus" src="./Vector.svg" alt="plus" />
            <img className="plus1" src="./Vector1.svg" alt="plus1" />
            <span>Загрузить резюме</span>
          </label>
        </div>
        <div className="form">
          <h3>Пол*</h3><span className="spanGender red">укажите пол</span><br />
          <div className="flexRow">
            <input onChange={gender} type="radio" className="form-control" id="men" name="gender" value="Мужской" required />
            <label htmlFor="men" className="form-label">Мужской</label>
            <input onChange={gender} type="radio" className="form-control" id="women" name="gender" value="Женский" />
            <label htmlFor="women" className="form-label">Женский</label>
          </div>

        </div>
        <div className="form">
          <h3>Github</h3>
          <label htmlFor="url" >Вставьте ссылку на Github</label>
          <input onChange={disablRemove} ref={urlRef} type="url" className="input" id="url" placeholder="Вставьте ссылку на Github" required />
        </div>
        <div>
          <input onChange={disablRemove} id="check" type="checkbox" required />
          <span>* Я согласен с <span onClick={()=>setModalActiveS(true)} className="link">политикой конфиденциальности</span></span>
        </div>
        <button disabled>Отправить</button>
      </form>
      <ModalAgree name={name} active={modalActiveA} setActive={setModalActiveA} />
      <ModalSuccess active={modalActiveS} setActive={setModalActiveS} />
    </div >
  );
}

export default Form;
