import Header from '../Header/Header';
import HomePage from '../../pages/HomePage/index';

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
