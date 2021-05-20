import React from 'react';
import './ModalAgree.css'

function ModalAgree({ name, active, setActive }) {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className="infoAgree">
        <h2>Спасибо {name}!</h2>
        <p>Мы скоро свяжемся с вами</p>
        <button onClick={() => setActive(false)}>Понятно</button>
      </div>
    </div>
  );
}

export default ModalAgree;
