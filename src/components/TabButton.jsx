import React from 'react';

const TabButton = ({ active, selectTab, children, id }) => {
    const buttomClass = active ? "text-white border-b border-[#00bf8f]" : "text-[#ADB7BE]";
    return (
        <button onClick={() => selectTab(id)}>
            <p className={`mr-3 font-semibold hover:text-white cursor-pointer ${buttomClass}`}>
                {children}
            </p>
        </button>
    )
}

export default TabButton;