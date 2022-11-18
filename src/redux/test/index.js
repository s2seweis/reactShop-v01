import React, {useEffect, useState} from 'react';
import { useStateValue } from '../StateProvider';
import './ProductInfo.css';
import Select from 'react-select';


function ProductInfo(props) {
  const [Product, setProduct] = useState({})
  const [{basket},dispatch]=useStateValue()

  const [size, setSize] = React.useState();
  const [material, setMaterial] = React.useState();
  const [price, setPrice] = React.useState();
  console.log(props.detail.variants)

  const materialOptions = props.detail.variants
    .map((p) => p.material)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((material) => ({ label: material, value: material }))
  console.log(materialOptions)

  const sizeOptions = props.detail.variants
    .map((p) => p.size)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((size) => ({ label: size, value: size }));
  console.log(sizeOptions)
  
  const priceOptions = props.detail.variants
    .filter((p) => size && p.size === size.value && material && p.material=== material.value)
    .map((p) => p.price)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((price) => ({ label: price, value: price }));
  console.log(priceOptions.length)

    useEffect(()=>{
        setProduct(props.detail)
      }, [props.detail])
    
return (
   <div className='prod__info'>
        
    <h1>{Product.title}</h1>
    <h5 className='prod__desc'>Description</h5>
    <p className='prod__text'>{Product.desc}</p>

    <p className='prod__price'>
            <small>$</small>
            if (priceOptions.length===1){
              priceOptions.value
            } else {Product.price} 
    </p>
    <br />
      <p className='prod__desc'>Material</p>
      <div style={{boxShadow: '0 5px 5px #939596',cursor:'pointer',borderRadius: '10px!'}}>
      <Select value={material} onChange={setMaterial} options={materialOptions} />
      </div>

      <p className='prod__desc'>Size</p>
      <div style={{boxShadow: '0 5px 5px #939596',cursor:'pointer',borderRadius: '10px!'}}>
      <Select value={size} onChange={setSize} options={sizeOptions} />
      
    </div>
    <br />
    <br />
    <div className='button__cart'>    
      <button className='prod__button'
          onClick={addToBasket}
        >
            Add to basket
    </button>
    </div>

</div>

)
}

export default ProductInfo