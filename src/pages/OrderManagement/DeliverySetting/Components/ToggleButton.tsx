import React from 'react';

const ToggleButton: React.FC = () => {
    return (
        <>
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-white peer-focus:outline-none
                                peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
                                rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full 
                                rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] 
                                after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all 
                                peer-checked:bg-green-600 dark:peer-checked:bg-green-600"></div>
        </>
    )
}

export default ToggleButton;