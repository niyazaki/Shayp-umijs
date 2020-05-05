import React, { Component } from 'react';
import styles from './index.less';
import { withRouter } from 'react-router-dom';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ' ',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    // alert("Thank you " + this.state.name);
    let pathing = '/hello/' + this.state.name;
    this.props.history.push(pathing);
    event.preventDefault();
  }
  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div
        style={{
          position: 'relative',
          width: '600px',
          height: '500px ',
        }}
      >
        <h1 className={styles.title}>Shayp UmiJs</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name :
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div
          style={{
            position: 'absolute',
            bottom: '5px',
          }}
        >
          <h3>
            <a href="about"> About </a>
          </h3>
        </div>
      </div>
    );
  }
}
export default withRouter(NameForm);
