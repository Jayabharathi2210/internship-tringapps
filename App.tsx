import './App.css';

function App() {

  return (
    <div className = "container">
          <form>
      <fieldset >
      <legend>Message Form</legend>
        <table>
        <tr>
          <td>Your Name </td><td><input type='text' placeholder='First Name' required></input> </td><td><input type='text' placeholder='Last Name' required></input></td>
        </tr><br></br>
        <tr>
          <td>Your Email </td><td><input type='email' placeholder='eg: abc@def.com' required></input></td>
        </tr><br></br>
        <tr>
          <td>Phone </td><td><input type='number' placeholder='eg: +00 000 00000' required></input></td>
        </tr><br></br>
        <tr>
          <td>Address </td><td><input type='text' placeholder='Street' required></input> </td><td><input type='text' placeholder='City' required></input></td><br></br><td><input type='text' placeholder='State'required></input></td>
        </tr><br></br>
        <tr>
          <td>Country</td><td><select>
            <option>Select Your Country</option> <option>Australia</option> <option>Belgium</option> 
            <option>India</option> <option>Korea</option> <option>Russia</option> <option>Switzerland</option> <option>Tanzania</option>
            </select></td>
        </tr><br></br>
        <tr>
          <td>Gender </td>
          <td>Male<input type="radio"></input></td>
          <td>Female<input type="radio"></input></td><br></br>
          <td>Others<input type="radio"></input></td>
        </tr><br></br>
        <tr>
          <td>Message</td><td><textarea rows={3} cols={30} placeholder='Type your message'></textarea></td>
        </tr>
      </table>
      </fieldset>
    </form>
    </div>
  )
}

export default App;