import {Button, Grid, TextField} from "@material-ui/core";
import HotelApiCalls from "../service/hotelApiCalls";
import {useState} from "react";
import {Hotel} from "../interfaces/Hotel";

const defaultValues: Hotel = {
  city: 0,
  name: "",
  address: "",
  zip: 0,
}

function HotelForm() {

  const [formValues, setFormValues] = useState(defaultValues);

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log(formValues);
    HotelApiCalls.addHotel(formValues).then(r => console.log("Success")).catch(err => console.log(err));
  }

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return(
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" direction="column">
        <Grid item>
          <TextField
            id="name"
            name="name"
            label="Hotel Name"
            type="text"
            onChange={handleInputChange}/>
        </Grid>
        <Grid item>
          <TextField
            id="address"
            name="address"
            label="Address"
            type="text"
            onChange={handleInputChange}/>
        </Grid>
        <Grid item>
          <TextField
            id="zip"
            name="zip"
            label="Zip"
            type="number"
            onChange={handleInputChange}/>
        </Grid>
        <Grid item>
          <TextField
            id="city"
            name="city"
            label="City"
            type="number"
            onChange={handleInputChange}/>
        </Grid>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  )
}

export default HotelForm;