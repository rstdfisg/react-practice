import React from "react";
import {
  BarChart, Bar, Cell, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';




export type fakedataType = {
  x: number,
  y: number,
  z: number,
}


type ChartProps = {
  data: Array<fakedataType>
}


const Chart = ({ data }: ChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={150} height={40} data={data}>
        <Bar dataKey="x" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  )
}


export default Chart;