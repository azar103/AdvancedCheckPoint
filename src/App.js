import React from 'react';

import './App.css';
import ProductTable from './ProductTable';

function App({data}) {
  return (
    <ProductTable
       products={data}
    />
  );
}



export default App;
