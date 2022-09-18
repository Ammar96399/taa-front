import HotelApiCalls from "../service/hotelApiCalls";
import {Hotel} from "../interfaces/Hotel";
import HotelComponent from "./HotelComponent";
import {useEffect, useState} from "react";
import {Container} from "@material-ui/core";


function HotelsComponent() {
  // setting the initial loading state to false
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<Hotel[] | null>(null);

  useEffect(() => {
    HotelApiCalls.getHotels()
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      })
  }, [])


  return (
    <div>
      {
        loading ? (
          "Loading...."
        ) : error ? (
          "Error!"
        ) : data ? (
          <Container>
            {data.map((h) => <HotelComponent city={h.city} name={h.name} address={h.address} zip={h.zip}/>)}
          </Container>
        ) : ''}
    </div>)
}

export default HotelsComponent;