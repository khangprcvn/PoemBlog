import React from 'react';
import '../assets/css/Poet.css';
import DataPoet from '../assets/data/poets_vn';

const Poet = () => (
  <div>
    {DataPoet.map(data => (
      <div className="card" key={data.name}>
        <div className="container">
          <h3>
            <b>{data.name}</b>
          </h3>
          <p><span></span>{data.famousPoem}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Poet;
