import React from 'react';
import * as RB from 'react-bootstrap';
import './Monthly-Result.component.css';

export const MonthlyResults = props => (
  <div className="cards">
    <h4>Monthly Vulnerability Scan</h4>
    <h6>{props.scan.datCompleted}</h6>
    <div className="row row-cards">
      <div className="col-md-2 offset-md-1 text-center card-box">
        <RB.Card bg="danger" text="white">
          <RB.Card.Body>
            <RB.Card.Title className="title-card">{props.scan.severityCounts.critical}</RB.Card.Title>
            <RB.Card.Text>
              Critical
            </RB.Card.Text>
          </RB.Card.Body>
        </RB.Card>
      </div>
      <div className="col-md-2 text-center card-box">
        <RB.Card bg="warning" text="white">
          <RB.Card.Body>
            <RB.Card.Title className="title-card">{props.scan.severityCounts.high}</RB.Card.Title>
            <RB.Card.Text>
              High
            </RB.Card.Text>
          </RB.Card.Body>
        </RB.Card>
      </div>
      <div className="col-md-2 text-center card-box">
        <RB.Card bg="secondary" text="white">
          <RB.Card.Body>
            <RB.Card.Title className="title-card">{props.scan.severityCounts.medium}</RB.Card.Title>
            <RB.Card.Text>
              Medium
            </RB.Card.Text>
          </RB.Card.Body>
        </RB.Card>
      </div>
      <div className="col-md-2 text-center card-box">
        <RB.Card bg="success" text="white">
          <RB.Card.Body>
            <RB.Card.Title className="title-card">{props.scan.severityCounts.low}</RB.Card.Title>
            <RB.Card.Text>
              Low
            </RB.Card.Text>
          </RB.Card.Body>
        </RB.Card>
      </div>
      <div className="col-md-2 text-center card-box">
        <RB.Card bg="info" text="white">
          <RB.Card.Body>
            <RB.Card.Title className="title-card">{props.scan.severityCounts.information}</RB.Card.Title>
            <RB.Card.Text>
              Information
            </RB.Card.Text>
          </RB.Card.Body>
        </RB.Card>
      </div>
    </div>
  </div>
);

export default MonthlyResults;