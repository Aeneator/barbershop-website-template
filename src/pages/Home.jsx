import styles from './Home.module.css';
import backgroundImage from '../assets/home-background.jpg';

export default function Home() {
  return (
    <div
      className={styles.homePage}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.homeContent}>
        <h1>Welcome to Home Page</h1>
        <p>Your tagline or description goes here</p>
      </div>
    </div>
  );
}
