import * as React from 'react';
import * as ReactDOM from 'react-dom';
// Main entry for styles
import './styles/style.less';

import { Home } from './components/home/home';

ReactDOM.render(<Home appName='React Git Searcher'/>, document.getElementById('app'));