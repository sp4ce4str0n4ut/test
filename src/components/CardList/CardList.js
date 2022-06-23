import React, {useState, useEffect, useMemo} from 'react';
import useEventListener from '../../hooks';
import Card from '../Card/Card';

import styles from './CardList.module.scss';

const DELETE_KEYS = ['46', 'Delete'];

const CardList = (props) => {
    const [selectedFilter, setSelectedFilter] = useState("Show All");
    const [width, setWidth] = useState(window.innerWidth);
    const [isClicked, setIsClicked] = useState({});
    const [isDeleted, setIsDeleted] = useState({});

    const handleClick = (i) => {
      setIsClicked(() => {
      const clicked = {...isClicked};
      
      clicked[i] = !clicked[i];

      return clicked;
      });
    }

    const handleDelete = ({key}) => {
      if (DELETE_KEYS.includes(String(key))) {
        setIsDeleted(() => {

          return isClicked;
        })
      }
    }

    useEventListener("keydown", handleDelete);

    const updateSize = () =>
    setWidth(window.innerWidth);

    useEffect(() => {
        window.onresize = updateSize;

        props.filterCards([selectedFilter, props.cards]);
    }, [selectedFilter, props.cards]);

    const handleFilterChange = event => {
        setSelectedFilter(event.target.value);
    }

    const handleFilterOnSize = () => {

    return width < 1040 ? (
      <div className={styles.dropdown}>
        <select onChange={handleFilterChange}>
        {props.filters.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
        </select>
        <div className={styles.dropdown_arrow}></div>
      </div>
    ) : (
      <div className={styles.filter}>
        {props.filters.map((item) => (
          <button onClick={handleFilterChange} className={styles.filter_btn} key={item} value={item}>
            {item}
          </button>
        ))}
      </div>
    );
    }

    return (
      <>
        {handleFilterOnSize()}
        <div className={styles.card_list}>
          {props.filtered.map((item, index) => (
            <div key={index} onClick={() => handleClick(item.id)}>
              <Card
                id={item.id}
                filter={item.filter}
                title={item.title}
                isClicked={isClicked[item.id]}
                isDeleted={isDeleted[item.id]}
                selectedFilter={selectedFilter}
                filterCards={props.filterCards}
                cards={props.cards}
              />
            </div>
          ))}
        </div>
      </>
    );
}

export default CardList;
