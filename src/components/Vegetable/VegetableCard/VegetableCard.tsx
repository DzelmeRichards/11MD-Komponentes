import './VegetableCard.scss';
import React, { FC } from 'react';
import { Vegetable } from '../../../types';

const VegetableCard: FC<Vegetable> = ({
  id, title, description, backgroundColor, available, clickHandler,
}) => (available ? (
  <div className="vegetable-card" style={{ backgroundColor }}>
    <div className="vegetable-card__top">
      <span>{title}</span>
      <span>{id}</span>
    </div>
    <div className="vegetable-card__middle">
      <span>{description}</span>
    </div>
    <div className="vegetable-card__bottom">
      <button className="vegetable-card__button" onClick={clickHandler}>Show More</button>
    </div>
  </div>
) : (<div>Not Available</div>));

export default VegetableCard;
