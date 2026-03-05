import { useState } from 'react';
export default function SearchBar({search, setSearch}) {

    

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={handleChange}
            />
        </div>
    );

}