// Complete the Form Component and export it
import {name, email} from "./HomePage";

const Form = () => (
  <>
    <div>
      <form>
        {/* Create a h3, 2 inputs and 1 button here */}    
        <h3>Login Page</h3>
        <input type="text" value={name} required />  <br />
        <input type="text" value={email} required /> <br />
        <button style={{marginTop: 10}}>Login</button>
      </form>
    </div>
  </>
);

export default Form;
