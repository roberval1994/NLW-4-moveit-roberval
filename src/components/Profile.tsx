import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level, profileName } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src={`http://github.com/${profileName}.png`} alt="Roberval Filho"></img>
      <div>
        <strong>{profileName}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
