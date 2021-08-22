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

export default function Gender({ setTchGender }) {
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
    setTchGender(event.target.value)
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="gender-native-simple">City</InputLabel>
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
          <option value="Ahmed Nager Chatha">Ahmed Nager Chatha</option>
          <option value="Ahmadpur East">Ahmadpur East</option>
          <option value="Ali Khan Abad">Ali Khan Abad</option>
          <option value="Alipur">Alipur</option>
          <option value="Arifwala">Arifwala</option>
          <option value="Attock">Attock</option>
          <option value="Bhera">Bhera</option>
          <option value="Bhalwal">Bhalwal</option>
          <option value="Bahawalnagar">Bahawalnagar</option>
          <option value="Bahawalpur">Bahawalpur</option>
          <option value="Bhakkar">Bhakkar</option>
          <option value="Burewala">Burewala</option>
        </Select>
      </FormControl>
    </div>
  );
}
