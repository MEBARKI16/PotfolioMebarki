import React from 'react';

const ButtonProject = ({ onClick, isActif, children }) => {
    const active = isActif ? "border-[#00bf8f]" : "border-slate-600 hover:border-white"
    return (
        <button onClick={onClick} className={`rounded-full border-2 px-6 py-3 cursor-pointer text-xl ${active}`}>{children}</button>
    )
}

export default ButtonProject;