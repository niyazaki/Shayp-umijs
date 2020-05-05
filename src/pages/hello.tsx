import React, { Component } from 'react';
import { Route } from 'react-router-dom';

const Name = ({ match }) => (
  <div>
    <h3> Hello {match.params.name}</h3>
  </div>
);
export default () => {
  return (
    <div>
      <Route path="/hello/:name" component={Name} />
    </div>
  );
};
