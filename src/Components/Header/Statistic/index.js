import React, { Component } from "react";
import { ResponsivePie } from "@nivo/pie";
import "./index.css";

export default class Chart extends Component {
  render() {
    let { users } = this.props;
    let data = [
      {
        id: `Male:${chartGender(users).male}%`,
        label: "male",
        value: chartGender(users).male,
        color: "#009cff"
      },
      {
        id: `Female:${chartGender(users).female}%`,
        label: "Female",
        value: chartGender(users).female,
        color: "#5b5b6b"
      }
    ];

    function chartGender(arr) {
      let male = 0;
      arr.forEach(e => {
        if (e.gender === "male") {
          male++;
        }
      });
      return {
        male: parseFloat(((male * 100) / arr.length).toFixed(1)),
        female: 100 - parseFloat(((male * 100) / arr.length).toFixed(1))
      };
    }

    return (
      <div className="chart">
        <span style={{ paddingTop: "20px", color: "white" }}>Gender users</span>
        <ResponsivePie
          data={data}
          colorBy={e => e.color}
          enableSlicesLabels={false}
          borderWidth={1}
          borderColor="#ffffff"
          radialLabelsTextColor="#ffffff"
          margin={{
            top: 40,
            right: 80,
            bottom: 80,
            left: 80
          }}
        />
      </div>
    );
  }
}
