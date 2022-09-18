import {Card, CardContent, Typography} from "@material-ui/core";
import {Hotel} from "../interfaces/Hotel";

function HotelComponent(hotel: Hotel) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {hotel.name}
        </Typography>
        <Typography variant="body2">
          {hotel.city} <br></br>
          {hotel.address} <br></br>
          {hotel.zip} <br></br>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default HotelComponent;