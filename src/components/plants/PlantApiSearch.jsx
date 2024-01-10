import { useState } from 'react';

import SearchBar from '../SearchBar';
import TrefleApiResults from './TrefleApiResults';

function PlantsApiSearch() {
    const [term, setTerm] = useState('');
    
    const handleSubmit = (searchTerm) => {
        setTerm(searchTerm);
    }

    return (
        <div>
            <div>Api Search</div>
            <SearchBar onSubmit={handleSubmit} />

            {term && <TrefleApiResults term={term}/> }
        </div>
    )
}

export default PlantsApiSearch;