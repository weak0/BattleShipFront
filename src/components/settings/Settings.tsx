import PlayerSettings from './PlayerSettings';
import ShipSettings from './ShipSettings';
import styles from './settings.module.css'

const Settings = ({ handleClose }: { handleClose: () => void }) => {

  return (
    <div className={styles.settingsContainer}>
      <h2>Settings</h2>
      <PlayerSettings />
      <ShipSettings />
      <button className={styles.buttonClose} onClick={handleClose}>Close</button>

    </div>
  )
}

export default Settings