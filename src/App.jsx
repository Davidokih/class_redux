import Card from "./page/Card";
import CreateProduct from "./page/CreateProduct";
import SignIn from "./page/SignIn";


function App() {

  return (
    <>
      <div className='w-[100%] flex-col flex items-center justify-center'>
        <SignIn />
        <CreateProduct />
        <Card />
      </div>
    </>
  )
}

export default App
