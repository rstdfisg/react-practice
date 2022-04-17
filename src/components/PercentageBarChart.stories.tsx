import React from 'react';

import PercentageBarChart from './PercentageBarChart';
import { fakedata } from './fakedata'



export default {
    title: 'chart',
    component: PercentageBarChart,
};

export const Primary = () => <PercentageBarChart data={fakedata}></PercentageBarChart>;
