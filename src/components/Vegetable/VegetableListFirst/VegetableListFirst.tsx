import './VegetableListFirst.scss';
import React, { FC } from 'react'; // functional componente
import { Vegetable } from '../../../types';
import VegetableCard from '../VegetableCard/VegetableCard';

type VegetableProps = {
    vegetables: Vegetable[]
  };

const VegetableListFirst: FC<VegetableProps> = ({ vegetables }) => (
  <div className="VegetableListFirst__container">

    {vegetables.map((vegetable) => (
      <div className="Vegetable-card__box">
        <VegetableCard
          available={vegetable.available}
          backgroundColor={vegetable.backgroundColor}
          id={vegetable.id}
          description={vegetable.description}
          title={vegetable.title}
          clickHandler={() => { console.log(`Card ID: ${vegetable.id}`); }}
        />

      </div>
    ))}

  </div>
);

export default VegetableListFirst;
