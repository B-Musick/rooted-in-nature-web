import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
          <Route path="/" element={<PlantsPage />}>
            <Route path="plants" element={<PlantsPage />}>
            </Route>
          </Route>
          <Route path="plants/list" element={<PlantsList />} />


          {/* One route for each page we want to render */}
          {/* Nest the component we want to show within div when on route */}
        </Routes>
      </Router>
    </>
  )
}

export default App;
