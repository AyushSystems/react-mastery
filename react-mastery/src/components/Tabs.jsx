import { useState } from "react";

const tabContent = {
    home:{
        title:'Welcome Home',
        description:'This is the home tab.State controls which tab is active'
    },
    about:{
        title:'About Us',
        description:'This is the about tab. Same component, different content.'
    },
    contact:{
        title:'Contact Us',
        description:'This is the contact tab. useState makes this work.'
    }

}

function Tabs(){
    const [activetab,setActiveTab]=useState('home')
    return(
        <div className="bg-white rounded-xl shadow-md w-96">
            <div className="flex border-b">
                {Object.keys(tabContent).map(tab=>(
                    <button
                    key={tab}
                    onClick={()=>setActiveTab(tab)}
                    className={`flex-1 py-3 text-sm font-medium capitalize transition-all ${
              activetab === tab
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500 hover:text-gray-700'
            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {tabContent[activetab].title}
                </h3>
                <p className="text-gray-500">
                    {tabContent[activetab].description}
                </p>
            </div>
        </div>
    )

}

export default Tabs