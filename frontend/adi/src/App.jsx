
import './App.css'
import Delete from './component/Delete'
import Register from './component/Register'
import Updata from './component/Updata'
import View from './component/View'


function App() {
  

  return (
   <div style={{border:'5px solid red', padding:'20px' }}>
    <h1  style={{backgroundColor:'black' ,color:'white', width:'100%'}}>CRUD FUNCTION APP</h1>
    <Register/><br/>
   <Updata/><br/>
   <Delete/><br/>
    <View/>
   
  

   </div>
  )
}

export default App
