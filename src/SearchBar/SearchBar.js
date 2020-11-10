import React from "react";
import styles from './SearchBar.module.css';

export function SearchBar() {
  return (
    <div>
      <div className="field has-addons">
        <p className="control">
          <button className="button is-static is-medium">Search</button>
        </p>
        <p className="control">
          <input className={`input is-medium ${styles['input-control']}`} type="text" placeholder="Restaurants, shops, stores..." />
        </p>
        <p className="control">
          <button className="button is-static is-medium">NEAR</button>
        </p>
        <p className="control">
          <input className={`input is-medium ${styles['input-control']}`} type="text" placeholder="Where" />
        </p>
      </div>
    </div>
  );
}