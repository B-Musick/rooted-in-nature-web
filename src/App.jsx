import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import PlantsPage from './pages/PlantPage';
import KeysPage from './pages/KeysPage';

import PlantsListPage from './pages/PlantsListPage';
import NavigationBar from './components/NavigationBar';
import PlantsApiPage from './pages/PlantApiPage';
import PlantKey from './components/keys/PlantKey';
import PlantKeysList from './components/keys/PlantKeysList';
import PlantShowPage from './pages/PlantShowPage';

function App() {
  return (
    <div className='flex'>
      {/* Fragment */}
      <Router>
        <NavigationBar />

        <Routes>
          {/* Make sure only one route shown at a time */}
          {/* Content inswitch depends on the route */}
          <Route path="/">
            <Route index={true} path="" element={<HomePage />} />
          </Route>

          <Route path="/plants">
            <Route index={true} element={<PlantsPage />} />
            <Route index={false} path="list" element={<PlantsListPage />} />
            <Route index={false} path="api" element={<PlantsApiPage />} />
            <Route index={false} path=":plantId" element={<PlantShowPage />} />
          </Route>

          <Route path="/keys">
            <Route index={true} element={<KeysPage />} />
            <Route index={false} path="list" element={<PlantKeysList />} />
            <Route index={false} path=":keyId" element={<PlantKey />} />
          </Route>

          {/* One route for each page we want to render */}
          {/* Nest the component we want to show within div when on route */}
        </Routes>
      </Router>
    </div>
  )
}

export default App;
