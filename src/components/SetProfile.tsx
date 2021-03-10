import styles from "../styles/components/SetProfile.module.css";
import { AiFillGithub } from "react-icons/ai";
import { FormEvent, useContext, useState } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

export function SetProfile() {
  const { closeProfileSelect } = useContext(ChallengesContext);

  const [profileName, setProfileName] = useState("");

  function hadleSubmit(event: FormEvent) {
    event.preventDefault();
    closeProfileSelect(profileName);
  }

  return (
    <div className={styles.SetProfileContainer}>
      <div className={styles.container}>
        <img src="/logo-full.svg" />
        <strong>Bem Vindo</strong>
        <p>
          <AiFillGithub /> Faça Login com seu GitHub para começar
        </p>
        <form onSubmit={hadleSubmit}>
          <label htmlFor="profileName"></label>
          <input
            id={styles.name}
            value={profileName}
            onChange={(event) => setProfileName(event.target.value)}
          />
          <input id={styles.button} type="submit" value="->" />
        </form>
      </div>
    </div>
  );
}
