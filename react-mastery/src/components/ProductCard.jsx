
 function  ProductCard({name,price,category,inStock }){
    return <div className="bg-white rounded-xl shadow-md p-6 w-72">
          <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
        {category}
      </span>
        <h2 className="text-xl font-bold text-gray-800 mt-3">{name}</h2>
        <p className="text-2xl font-bold text-blue-500 mt-2">${price}</p>
        <p className={`text-sm mt-1 ${inStock ? 'text-green-500' : 'text-red-500'}`}>{inStock?'In Stock':'Out of Stock'}</p>
        <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-all">Add to Cart</button>
    </div>
        
    
}

export default ProductCard



