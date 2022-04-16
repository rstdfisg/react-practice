import React from 'react';

import Chart from './test';
import { fakedataType } from './test'

export default {
    title: 'chart',
    component: Chart,
};


const data: Array<fakedataType> = [
    { x: 123, y: 123, z: 123 },
    { x: 13, y: 163, z: 32 },
    { x: 19, y: 12, z: 47 },
    { x: 181, y: 37, z: 66 },
]

export const Primary = () => <Chart data={data}></Chart>;