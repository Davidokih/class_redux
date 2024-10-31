const InputField = ({handleChange,errors,name,label,type})=>{
    return(
        <div className="relative z-0 w-full mb-5 group">
            <input type={type}  onChange={handleChange}  name={name} id="email" className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none  focus:outline-none focus:ring-0 ${errors?.email? 'border-red-600': 'focus:border-[#34f6f2] border-gray-300'} peer`} placeholder=" " required />
            {errors?.email && <div className='text-red-600'>{errors?.email}</div>}  
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#34f6f2] peer-focus:dark:text-[#34f6f2] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{ label}</label>
        </div>
    )
}

export default InputField