import './VegetableCard.scss';
import React, { FC } from 'react';
import { Vegetable } from '../../../types';

const VegetableCard: FC<Vegetable> = ({
  id, title, description, backgroundColor, available,
}) => (available ? (
  <div className="vegetable-card" style={{ backgroundColor }}>
    <div className="vegetable-card__top">
      <span>{title}</span>
      <span>{id}</span>
    </div>
    <div className="vegetable-card__bottom">
      <span>{description}</span>
    </div>
  </div>
) : (<div>Not Available</div>));

export default VegetableCard;
