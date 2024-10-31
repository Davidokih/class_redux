import { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { addToCart } from '../service/userReducer';
// import { GlobalContext } from './GlobalState';

const Card = () => {
    const [ change, setChange ] = useState(false)
    const [ data, setData ] = useState()

    const dispatch = useDispatch()
    const handleChange = () => {
        setChange(!change)
    }

    const getProduct = async() => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            // console.log(response)
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProduct()
    },[])
    return (
        <div className='grid grid-cols-mediaGrid gap-3 w-full'>
            { data?.map((props,index) => (
                 <div key={index} className='flex justify-center flex-col items-center shadow-md' onMouseEnter={handleChange} onMouseLeave={handleChange}>
                 <div className='size-[200px]'>
                        <img className='size-full object-contain' src={ props.image} />
                 </div>
                 <div className='w-full px-2'><div className='text-small'>{ props.title.slice(0,20)}...</div>
                        <div className={ `flex text-sm ${change && 'text-primary'}` }>price: <div className='font-bold'>${ props.price }</div></div>
                        <button
                            onClick={()=>dispatch(addToCart(props))}
                        className='bg-slate-700 w-full py-2 mb-2 mt-2 text-white rounded'>Add Cart</button>
                 </div>
             </div>
            ))}
            {/* <button onClick={increment}>Click me</button> */}
        </div>
    )
}

export default Card