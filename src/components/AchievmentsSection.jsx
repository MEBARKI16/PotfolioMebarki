import React from 'react';
const achievmentsList = [
    {
        metric: "Projects",
        value: "+20",
    },
    {
        metric: "Users",
        value: "+20",
    },
    {
        metric: "Awards",
        value: "+5",
    },
    {
        metric: "Years",
        value: "+2",
    },
]
const AchievmentsSection = () => {
    return (
        <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <div className="border-[#33353F] border rounded-md py-8 px-17 flex sm:flex-row gap-2 flex-col items-center justify-between">
                {achievmentsList.map((achievment, index) => (
                    <div key={index} className="flex flex-col items-center justify-center mx-4">
                        <h2 className="text-white text-2xl font-bold">{achievment.metric}</h2>
                        <p className="text-[#ADB7BE]">{achievment.value}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AchievmentsSection;