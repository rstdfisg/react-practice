import React from "react";
import {
  BarChart, Bar, Cell, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

import { fakedataType } from './fakedata'

type ChartProps = {
  data: Array<fakedataType>
}

const PercentageBarChart = ({ data }: ChartProps) => {
  const convert: (data: Array<fakedataType>) => Array<fakedataType> = (data: Array<fakedataType>) => {

    let newdata = data
    for (let i = 0; i < newdata.length; i++) {
      let sum = 0
      let k: keyof fakedataType

      for (k in newdata[i]) {
        if (k !== "name") {
          console.log(newdata)
          sum += newdata[i][k]
        }
      }

      for (k in newdata[i]) {
        if (k !== "name") {
          newdata[i][k] /= sum
        }
      }
    }
    return newdata
  }

  const customtooptip = (value: number, name: string) => {
    // return [formatted value, formatted name]
    return [(100 * value).toFixed(1).toString() + "%", name]
  }

  const newdata = convert(data)


  const Pesudocolortable: Array<string> = [
    "#8884d8",
    "#E52592",
    "#aaffc8",
    "#F9AB00",
    "#1a73e8",
    "#7CB342",
  ]

  // draw 100% barchart
  return (
    <ResponsiveContainer width={1000} height={400}>
      <BarChart width={1000} height={400} data={newdata} layout="vertical"
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" hide={true} />
        <YAxis type="category" dataKey="name" />

        {Object.keys(newdata[0]).filter((s) => s !== "name").map((key, i) => {
          console.log(i)
          return <Bar dataKey={key} fill={Pesudocolortable[i]} stackId="a" isAnimationActive={false} />
        })}

        <Tooltip
          contentStyle={{ backgroundColor: "#000000DD", color: "#FFFFFF" }}
          formatter={customtooptip}
          cursor={{ fill: 'rgba(200, 200, 200, 0.5)' }}
        />
        <Legend />
      </BarChart >
    </ResponsiveContainer >
  )
}


export default PercentageBarChart;