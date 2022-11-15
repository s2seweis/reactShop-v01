export const productItems = [
  {
      id: 1,
      image: ["../Images/Prod1/Swiming_fish_W.png","../Images/Prod1/Ocean Fish2.png"],
      title: "Swim Fish",
      price:49.99,
      desc: "Simplicty, Naturality, and Humanity of Art",
      variants: [{material: "Stretched Canvas", size: "12x16 inches", price: 49},
                 {material: "Stretched Canvas", size: "15x20 inches",  price: 69},
                 {material: "Fine Art Print", size: "12x16 inches",  price:39},
                 {material: "Fine Art Print", size: "15x20 inches",  price: 59},
                ],
      
  },

  {
      id: 2,
      image: ["../Images/Prod2/Duckling_W.png","../Images/Prod2/Duckling 2.png"],
      title: "Bath Duckling",
      price:49.99,
      desc: "Simplicty, Naturality, and Humanity of Art",
      variants: [{material: "Stretched Canvas",size: "20x24 inches",  price: 69},
                 {material: "Stretched Canvas",size: "24x30 inches",  price: 79},
                 {material: "Fine Art Print", size: "20x24 inches",  price:59},
                 {material: "Fine Art Print", size: "24x30 inches",  price: 69},
                 ],
  }]

  import React, { useEffect, useState } from 'react';
// import { Col, Row } from 'antd';
import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';
import {productItems} from '../Data';
import { useParams } from 'react-router-dom';
import './DetailProductPage.css';


function DetailProductPage() {

    const { id }=useParams();
    const [details, setDetails]=useState([])
    
    useEffect(() => {
        setDetails(productItems.find(item => String(item.id) ===id ))
    
     }, [id]);
        
    return (
        <div className="postPage" style={{width:'100%', padding: '5rem 3rem'}}>

        <div className="detailInfo">
          <div className="detailLeft">
               <ProductImages detail={details} />
           </div>

           <div className="detailRight">
               <ProductInfo  detail={details} />
           </div>
        </div>
      </div>
  )
}

export default DetailProductPage

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