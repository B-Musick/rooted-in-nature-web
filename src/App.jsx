import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import PlantsPage from './pages/PlantPage';
import PlantsList from './components/plants/PlantsList'
import TopNavbar from './components/TopNavbar';

function App() {
  return (
    <>
      {/* Fragment */}
      <Router>
        <TopNavbar />

        <Routes>
          {/* Make sure only one route shown at a time */}
          {/* Content inswitch depends on the route */}
          <Route path="/">
            <Route index={true} path="" element={<HomePage />} />
          </Route>

          <Route path="/plants">
            <Route index={true} element={<PlantsPage />} />
            <Route index={false} path="list" element={<PlantsList />} />
          </Route>
          {/* One route for each page we want to render */}
          {/* Nest the component we want to show within div when on route */}
        </Routes>
      </Router>
    </>
  )
}

export default App;
