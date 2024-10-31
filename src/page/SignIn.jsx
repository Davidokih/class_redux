import axios from "axios";
import InputField from "../components/InputField";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addUser } from "../service/userReducer";

const SignIn = () => {

    const [ values, setValues ] = useState()
    const [ isLoading, setIsLoading ] = useState(false)
    const dispatch = useDispatch()
    const userToken = useSelector((state)=> state.userReducer?.user)

    const handleChange = (event) => {
        const {name,value} = event.target
        setValues({...values,[name]:value})
    }

    console.log(userToken)
    const handleSubmit = async(event) => {
        event.preventDefault()
        setIsLoading(true)
        try {
            const res = await axios.post('https://auth-user-1dcu.onrender.com/api/user/signin', values)
            
            console.log(res)
            dispatch(addUser(res.data.data))
            setIsLoading(false)   
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
        
    }
    return (
        <div className='w-[50%] text-[#333] flex flex-col justify-center items-start p-[50px] gap-[30px] mobile:w-full mobile:px-[20px] tablet:w-full tablet:py-[20px] border'>
            <div className=' text-[32px] font-medium mobile:text-[24px] tablet:text-[28px]'>Sign In</div>
            <form className='w-full' onSubmit={handleSubmit}>
                <InputField handleChange={handleChange} name='email' type='email' label='Email Address'/>
                <InputField handleChange={handleChange} name='password' type='text' label='Password' />
                
                <button className='border border-white w-full py-1 mt-2 text-white hover:text-black hover:bg-white'>{ isLoading?'Loading...':'Sign-in'}</button>
            </form>
        </div>
  )
}

export default SignIn