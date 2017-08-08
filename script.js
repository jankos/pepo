'use strict';
import './node_modules/font-awesome/css/font-awesome.css';
import './style.less';

import data from './data/sabiedriskas_tualetes_23_02_16.csv';

import React from 'react';
import ReactDOM from 'react-dom';
import Pepo from './scripts/Pepo';

console.log(data);

ReactDOM.render(<Pepo />, document.getElementById('pepo'));
