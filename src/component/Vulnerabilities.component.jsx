import React from 'react';
import './Vulnerabilities.component.css';

export const Vulnerabilities = (props) => (
  <div>
    <div className="divider-large"></div>
    <div className="body-container">
      <h5 className="title-vulnera">Vulnerabilities Found</h5>
      {props.high.map(item => {
        return (
          <div>
            <h6>{item.name} <span className="badge badge-warning">{item.severity}</span></h6>
            <p><b>Description:</b> {item.description}</p>
            <p><b>Solution:</b> {item.solution}</p>
            <p><b>Assets:</b> {item.affectedAssetsNames}</p>
            <div className="divider-small"></div>
          </div>
        )
      })}
      {props.medium.map(item => {
        return (
          <div>
            <h6>{item.name} <span className="badge badge-secondary">{item.severity}</span></h6>
            <p><b>Description:</b> {item.description}</p>
            <p><b>Solution:</b> {item.solution}</p>
            <p><b>Assets:</b> {item.affectedAssetsNames}</p>
            <div className="divider-small"></div>
          </div>
        )
      })}
      {props.low.map(item => {
        return (
          <div>
            <h6>{item.name} <span className="badge badge-success">{item.severity}</span></h6>
            <p><b>Description:</b> {item.description}</p>
            <p><b>Solution:</b> {item.solution}</p>
            <p><b>Assets:</b> {item.affectedAssetsNames}</p>
            <div className="divider-small"></div>
          </div>
        )
      })}
      {props.info.map(item => {
        return (
          <div>
            <h6>{item.name} <span className="badge badge-info">{item.severity}</span></h6>
            <p><b>Description:</b> {item.description}</p>
            <p><b>Solution:</b> {item.solution}</p>
            <p><b>Assets:</b> {item.affectedAssetsNames}</p>
            <div className="divider-small"></div>
          </div>
        )
      })}
    </div>
  </div>
);

export default Vulnerabilities;
