
import useInputState from "../../Hooks/useInputState";


const HookForm = () => {
    // const [name,handleNameChange] =useInputState('rojoni')

    // way-2
     const nameState=useInputState('way-2')

    // const handleSubmit =e=>{
    //     console.log('form data', name)
    //     e.preventDefault()
        
    // }
    const handleSubmit =e=>{
        console.log('form data',nameState.value)
        e.preventDefault()
        
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
        <input {...nameState} type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="password" name="password" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
