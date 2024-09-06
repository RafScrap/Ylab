import React, {useState} from "react";
import styles from './styles/LoginForm.module.css';
import { get } from "./fetch";

function LoginForm({setVisibleLogin}) {

  const [colorP, setColorP] = useState("black");

  const loginRef = React.useRef();
  const passwordRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    const login = loginRef.current.value;
    const password = passwordRef.current.value;

    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if (EMAIL_REGEXP.test(login)) {
      get({login: login, password: password}).then((answer) => {
        if (answer.data) setVisibleLogin(false);
        else alert(`Неверная почта или пароль!`);
      })
    }
    else {
      alert(`Неправильный формат электронной почты!`);
    }
  };

  return (
      <form onSubmit={handleSubmit} className={styles.form}>
        <h3 className={styles.h3}>Вход</h3>
        <input type="text" ref={loginRef} className={styles.item} placeholder="Почта"/>
        <input type="password" ref={passwordRef} className={styles.item} placeholder="Пароль"/>
        <input type="submit" value="Войти" className={styles.button}/>
      </form>
  );
}

export default LoginForm;
