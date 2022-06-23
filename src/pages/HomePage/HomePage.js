import React, { useEffect, useState } from 'react';
import CardList from '../../components/CardList/index';

import styles from './HomePage.module.scss';

const HomePage = (props) => {
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const subscribe = async () => {
        try {
          setIsLoading(true);
  
          await props.fetchFiltersData();
          await props.fetchCardsData(page);
        } catch (error) {
          throw new Error(error);
        } finally {
          setIsLoading(false);
        }
      }
  
      useEffect(() => {
          subscribe();
      }, [page]);

    return (
        <div className={styles.section}>
            <CardList />
            <button className={styles.section_btn} onClick={() => setPage(page + 1)}>LOAD MORE</button>
        </div>
    );
}

export default HomePage;
