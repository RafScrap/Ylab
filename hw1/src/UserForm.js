import React, {useEffect} from "react";
import styles from './styles/UserForm.module.css';

function UserFrom({setVisibleLogin}) { 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setVisibleLogin(true);
  };

  return (
    <div className={styles.form}>
    <form onSubmit={handleSubmit}>
      <h3>Вы успешно вошли!</h3>
      <input type="submit" value="Выйти" className={styles.button}/>
    </form>
    </div>
  );
}

export default UserFrom;
