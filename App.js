// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import InsertData from './components/InsertData';
import ViewAllData from './components/ViewAllData';
import GetRank from './components/GetRank';
import UpdateScore from './components/UpdateScore';
import DeleteRecord from './components/DeleteRecord';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/insert">Insert Data</Link></li>
            <li><Link to="/view-all">View All Data</Link></li>
            <li><Link to="/get-rank">Get Rank</Link></li>
            <li><Link to="/update-score">Update Score</Link></li>
            <li><Link to="/delete-record">Delete Record</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/insert" component={InsertData} />
          <Route path="/view-all" component={ViewAllData} />
          <Route path="/get-rank" component={GetRank} />
          <Route path="/update-score" component={UpdateScore} />
          <Route path="/delete-record" component={DeleteRecord} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
