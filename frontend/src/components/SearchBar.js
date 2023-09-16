import React, {useState} from 'react';

const SearchBar = ({ search, filterSearch, filterCategory}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
        <div className='flex'>
          <div className="relative">
          <button
            id='dropdown-button'
            data-dropdown-toggle='dropdown'
            className='flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600'
            type='button'
            onMouseEnter={() => setIsHovered(true)}
            onClick={() => setIsHovered(false)}
            >
            All categories
          </button>
          {isHovered && (
            <div id='dropdown' className='z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'>
            <ul className='py-2 text-sm text-gray-700 dark:text-gray-200' aria-labelledby='dropdown-button'>
              <li>
                <button type='button' className='inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                onClick={() => filterCategory('')}
                >
                  Get All Categories
                </button>
              </li>
              <li>
                <button type='button' className='inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                onClick={() => filterCategory('sapphire')}
                >
                  Sapphire
                </button>
              </li>
              <li>
                <button type='button' className='inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                onClick={() => filterCategory('diamond')}
                >
                  Diamond
                </button>
              </li>
              <li>
                <button type='button' className='inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                onClick={() => filterCategory('gold')}
                >
                  Gold
                </button>
              </li>
            </ul>
          </div>
          )}
          </div>
          
          <div className='relative w-full'>
            <input
              type='search'
              id='search-dropdown'
              className='block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500'
              placeholder='Search Mockups, Logos, Design Templates...'
              value={search}
              onChange={filterSearch}
               />

          </div>
        </div>
    </div>
  );
};

export default SearchBar;
