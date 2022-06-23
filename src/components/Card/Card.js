import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import styles from './Card.module.scss';

const Card = (props) => {
  const [selectedFilter, setSelectedFilter] = useState(props.selectedFilter);

  useEffect(() => {

    props.filterCards([selectedFilter, props.cards]);
}, [selectedFilter]);

const handleFilterChange = event => {
  event.stopPropagation();

  setSelectedFilter(event.target.value);
}

const handleClass = () => {

  return classNames({
    [styles.card]: true,
    [styles.highlight]: props.isClicked,
    [styles.deleted]: props.isDeleted,
  });
}

  return (
    <div
      className={handleClass()}
      style={{ backgroundImage: `url("/assets/images/${props.id}.jpg")` }}
    >
      <div className={styles.card_wrap}>
        <button className={styles.card_filter} value={props.filter} onClick={handleFilterChange}>
          {props.filter}
        </button>
        <p className={styles.card_title}>{props.title}</p>
      </div>
    </div>
  );
}

export default Card;
