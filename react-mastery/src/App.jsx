import { useState } from 'react'
import  ProductCard  from './components/ProductCard.jsx';
import Counter from './components/Counter.jsx';
import Tabs from './components/Tabs.jsx';


function App(){
  return(
    
    <div className="min-h-screen bg-gray-100 flex items-center justify-center gap-6 p-8" >
     
     <ProductCard 
     name="Wireless Earphone"
     price={299}
     category="Electronics"
     inStock={true}
     
     />
    
     <ProductCard
        name="Running Shoes"
        price={499}
        category="Sports"
        inStock={false}
      />
      <ProductCard
        name="Coffee Mug"
        price={29}
        category="Kitchen"
        inStock={true}
      />
      <ProductCard
  name="Yoga Mat"
  price={899}
  category="Fitness"
  inStock={true}
/>
 <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Counter (useState)</h2>
        <Counter />
      </section>
 <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Tabs (useState for UI)</h2>
        <Tabs />
      </section>
    </div>
  )
}

export default App