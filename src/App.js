// TODO : fix the IE11 pollyfils, there is some error here
// import 'core-js/modules/es7.array.includes';
// import 'core-js/modules/es6.array.fill';
// import 'core-js/modules/es6.string.includes';
// import 'core-js/modules/es6.string.trim';
// import 'core-js/modules/es7.object.values';

import React from 'react';
import './App.scss';
import { HashRouter as Router } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';

const App = () => {
    return (
        <Router>
            <AppHeader />
            <AppContent />
        </Router>
    );
};

export default App;
