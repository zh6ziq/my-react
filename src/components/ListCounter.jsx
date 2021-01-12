import React, { Component } from "react";
import Counter from "./Counter";
import { Button } from "@material-ui/core";

class ListCounter extends Component {
  state = {
    counters: [
      { id: 0, value: 1 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };

  handleAdd = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleMinus = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("Delete", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Button
          variant="outlined"
          style={{ color: "white" }}
          onClick={this.handleReset}
        >
          Reset
        </Button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onAdd={this.handleAdd}
            onMinus={this.handleMinus}
            onDelete={this.handleDelete}
            counter={counter}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default ListCounter;
