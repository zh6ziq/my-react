import React, { Component } from "react";
import { Button, Grid } from "@material-ui/core";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid>
          <span style={{ padding: 10 }}>{this.formatCount()}</span>

          <Button
            color="primary"
            variant="contained"
            style={{ margin: 10 }}
            onClick={() => this.props.onAdd(this.props.counter)}
          >
            + Add
          </Button>
          <Button
            color="default"
            variant="contained"
            style={{ margin: 10 }}
            onClick={() => this.props.onMinus(this.props.counter)}
          >
            - Minus
          </Button>
          <Button
            color="secondary"
            variant="contained"
            style={{ margin: 10 }}
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            Delete
          </Button>
        </Grid>
      </React.Fragment>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "0" : value;
  }
}

export default Counter;
