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

export default function Gender() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gender: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
          
        <InputLabel htmlFor="gender-native-simple">Gender</InputLabel>
        <Select
          native
          value={state.gender}
          onChange={handleChange}
          inputProps={{
            name: "gender",
            id: "gender-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </Select>
      </FormControl>
    </div>
  );
}
