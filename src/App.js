/** @format */

// In order to use the core materials, you need to install the core package first
// npm install @material-ui/core

// To you the material ui icons, you have to install the icons package
// npm install @material-ui/icons

import "./App.css";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import ButtonGroup from '@material-ui/core/ButtonGroup'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'


function App() {
  return (
    <div className="App">
      <h1>Xolani</h1>

      {/* Using Buttons ***********************************************************/}
      <Button
        startIcon={<SaveIcon />}
        size="large"
        disabled
        onClick={() => alert("Hey bro")}
        href="http://www.xolanimgube.co.za/"
        variant="contained"
        color="primary"
        style={{
          fontSize: "14px",
        }}
      >
        Hello World
      </Button>

      {/* Buttons with Icons ***********************************************8*/}
      <Button color="secondary" variant="contained" endIcon={<SaveIcon />}>
        Xolani
      </Button>

      {/* Button Groups ***************************************************/}
      <div>
        <ButtonGroup>
          <Button startIcon={<SaveIcon />} color="primary">
            Save
          </Button>
          <Button color="secondary" endIcon={<DeleteIcon />}>
            Discard
          </Button>
        </ButtonGroup>
      </div>

      {/*CheckBox and Labels ***************************************************/}

      <FormControlLabel
        control={
          <Checkbox
            icon={<SaveIcon />}
            inputProps={{
              "aria-label": "primary checkbox",
            }}
          ></Checkbox>
        }
        label="Testing Label"
      />

      {/* TextFields ********************************************************/}
      <div>
        <TextField 
          variant="filled"
          color="secondary"
          type="email"
          label="Input email here"
          placeholder="email@email.com"
        />

        <TextField 
          variant="outlined"
          type="date"
        />

      </div>
    </div>
  );
}

export default App;
