import React from 'react';
import './gridtable.css';

export function GridTable(){
  return (
    <div className="grid-table">
      <div className="header">Header 1</div>
      <div className="header">Header 2</div>
      <div className="header">Header 3</div>
      <div className="cell">Row 1, Cell 1</div>
      <div className="cell">Row 1, Cell 2</div>
      <div className="cell">Row 1, Cell 3</div>
      <div className="cell">Row 2, Cell 1</div>
      <div className="cell">Row 2, Cell 2</div>
      <div className="cell">Row 2, Cell 3</div>
    </div>
  );
};

export default GridTable;