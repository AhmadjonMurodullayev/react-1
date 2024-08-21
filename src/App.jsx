import React, { Component } from "react";
import imag from "./assets/react.svg";

export default class App extends Component {
  state = {
    count: 0,
    counter: [0],
    users: [
      {
        id: "1",
        firstname: "John",
        lastname: "Smith",
        age: "45",
        dept_number: "100",
        city: "Chicago",
        state: "IL",
        salary: "$1000",
      },
      {
        id: "2",
        firstname: "Jane",
        lastname: "Doe",
        age: "25",
        dept_number: "100",
        city: "Phoenix",
        state: "AZ",
        salary: "$5000",
      },
      {
        id: "3",
        firstname: "Mary",
        lastname: "Smith",
        age: "17",
        dept_number: "200",
        city: "New York",
        state: "NY",
        salary: "$3000",
      },
      {
        id: "4",
        firstname: "George",
        lastname: "Edwards",
        age: "50",
        dept_number: "300",
        city: "Los Angeles",
        state: "CA",
        salary: "$7000",
      },
      {
        id: "5",
        firstname: "Emily",
        lastname: "Johnson",
        age: "16",
        dept_number: "150",
        city: "Houston",
        state: "TX",
        salary: "$2500",
      },
      {
        id: "6",
        firstname: "Michael",
        lastname: "Brown",
        age: "22",
        dept_number: "120",
        city: "Seattle",
        state: "WA",
        salary: "$4000",
      },
      {
        id: "7",
        firstname: "Anna",
        lastname: "Davis",
        age: "30",
        dept_number: "180",
        city: "Miami",
        state: "FL",
        salary: "$3500",
      },
      {
        id: "8",
        firstname: "Chris",
        lastname: "Wilson",
        age: "15",
        dept_number: "140",
        city: "Dallas",
        state: "TX",
        salary: "$2000",
      },
      {
        id: "9",
        firstname: "Sophia",
        lastname: "Taylor",
        age: "18",
        dept_number: "160",
        city: "San Francisco",
        state: "CA",
        salary: "$5000",
      },
      {
        id: "10",
        firstname: "Ethan",
        lastname: "Moore",
        age: "17",
        dept_number: "190",
        city: "Boston",
        state: "MA",
        salary: "$2700",
      },
    ],
    }

  addCounter = () => {
    this.setState((prevState) => ({
      counter: [...prevState.counter, 0],
    }));
  };
  Pilusbtn=()=>{
    this.setState({
      count: this.state.count + 1
    })
  }
  Minusbtn=()=>{
    this.setState({
       count: this.state.count - 1
    })
  }


  Step = () => {
    this.setState((item) => ({
      step: !item.step,
    }));
  };
  ageFilters = () => {
    this.setState((items) => {
        const users = items.users.filter(item => item.age > 18);
        return { users: users };
    });
}


  render() {
    const { counter, step,users } = this.state;
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-6 offset-3">
             <button className="btn btn-success my-3" onClick={this.addCounter}>Add count</button>
             {
              counter.map((item,index) =>{
                return <div key={index}>
                      <button onClick={this.Pilusbtn} className="btn btn-primary mx-1">+</button>
                      <span>{item}</span>
                      <button onClick={this.Minusbtn} className="btn btn-danger my-2 mx-1">-</button>
                </div>
              })
             }
          </div>
        </div>
        <div className="text-center my-5">
          <h1>{step ? "Login" : "Welcome"}</h1>
          <button
            className="btn btn-primary"
            onClick={this.Step}
          >
            btn
          </button>
        </div>
        <div className="">
       <button onClick={this.ageFilters} className="btn btn-success">Armiyaga qabul qilish</button>
       <table className="table table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>FirstName</th>
              <th>LastNmae</th>
              <th>Age</th>
              <th>Dept_number</th>
              <th>City</th>
              <th>State</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item,index)=>{
              return(
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.age}</td>
                <td>{item.dept_number}</td>
                <td>{item.city}</td>
                <td>{item.state}</td>
                <td>{item.salary}</td>
              </tr>
              )
            })}
          </tbody>
       </table>
        </div>
      </div>
    );
  }
}
