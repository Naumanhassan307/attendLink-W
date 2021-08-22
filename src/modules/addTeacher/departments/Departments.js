import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Departments({ setTchDepart }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    department: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
    setTchDepart(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="department-native-simple">Country</InputLabel>
        <Select
          native
          value={state.department}
          onChange={handleChange}
          inputProps={{
            name: "department",
            id: "department-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          <option value="Afganistan">Afghanistan</option>
          <option value="Albania">Albania</option>
          <option value="Algeria">Algeria</option>
          <option value="American Samoa">American Samoa</option>
          <option value="Oman">Oman</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Palau Island">Palau Island</option>
          <option value="Palestine">Palestine</option>
          <option value="Zimbabwe">Zimbabwe</option>
        </Select>
      </FormControl>
    </div>
  );
}
