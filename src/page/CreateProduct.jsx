import axios from 'axios';
import { useState } from 'react'
import InputField from '../components/InputField';

const CreateProduct = () => {

    const [ image, setImage ] = useState('')
    const [ values, setValues ] = useState()
    const [ isLoading, setIsLoading ] = useState(false)

    const handleChange = (event) => {
        const files = event.target.files[0]
        console.log(files)
        const saveFile = URL.createObjectURL(files)

        setImage(saveFile)
    }
    const handleChangeInput = (event) => {
        const {name,value} = event.target
        setValues({...values,[name]:value})
    }


    console.log(image)


    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData()

        const config = {
            "content-type": "multipart/form-data"
        }

        formData.append('image', image)
        formData.append('title', values.title)
        formData.append('description', values.description)
        setIsLoading(true)

        await axios.post('https://fakestoreapi.com/products', formData,config).then((res) => {
            console.log(res)
            setIsLoading(false)
        }).catch((err) => {
            console.log(err)
            setIsLoading(false)
        })
    }
  return (
      <div>
          <form className='w-full' onSubmit={ handleSubmit }>
          <label className='size-32 bg-yellow-300 rounded-md flex items-center justify-center'>
              <input type='file' className='hidden w-full h-full' onChange={handleChange}/>
              {image && <img src={image} className='size-full object-cover rounded-md'/>}
          </label>
                <InputField handleChange={handleChangeInput} name='title' type='text' label='Email Address'/>
                <InputField handleChange={handleChangeInput} name='description' type='text' label='Password' />
                
                <button className='border border-white w-full py-1 mt-2 text-white hover:text-black hover:bg-white'>{ isLoading?'Loading...':'Sign-in'}</button>
            </form>
    </div>
  )
}

export default CreateProduct