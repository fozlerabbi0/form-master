
import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimoleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {

  // const handleSingUpSubmit = data => {
  //   console.log('sing up date',data);
    
  // }


  // const handleUpdateProofile = data => {
  //   console.log('update profile', data);
    
  // }


  return (
    <>
     
      <h1>Form Master</h1>
      
      <Grandpa></Grandpa>


      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm 
      formTitle={'sign up'} 
        handleSubmit={handleSingUpSubmit}>
          <div>
            <h2>Sing Up</h2>
            <p>Please sing up right now</p>
          </div>
        </ReusableForm>
      <ReusableForm 
       formTitle={'Profile update'} 
       handleSubmit={handleUpdateProofile} 
        submitBtnText='update'>
          <div>
            <h2>Update Profile</h2>
            <p>Always keep your profile updated</p>
          </div>
        </ReusableForm> */}

      
    </>
  )
}

export default App
