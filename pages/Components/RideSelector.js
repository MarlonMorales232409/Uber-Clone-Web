import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { carList } from "../../Assets/carList";
import Link from "next/link";

const RideSelector = ({ pickupCoordinates, dropoffCoordinates }) => {
  const [duration, setDuration] = useState(0);

  const getDirections = (pickupCoordinates, dropoffCoordinates) => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1Ijoib3VnYW1pc2hpcm91IiwiYSI6ImNreDVwYjN0ODA2dzEycG9ndjQ5NjNsdWEifQ.RyPgPaN3XXLSAtrlMiNEsA",
        })
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDuration(data.routes[0].duration);
      });
  };

  useEffect(() => {
    if (pickupCoordinates && dropoffCoordinates) {
      getDirections(pickupCoordinates, dropoffCoordinates);
    }
  }, [pickupCoordinates, dropoffCoordinates]);

  return (
    <Wrapper>
      <Link href="/search" passHref>
        <BackButtonContainer>
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </BackButtonContainer>
      </Link>
      <Title>Choose a ride, or swipe up for more</Title>
      <CardList>
        {carList.map((car, index) => (
          <Car key={index}>
            <CardImage src={car.imgUrl}></CardImage>
            <CardDetails>
              <Service>{car.service}</Service>
              <Time>5 min away</Time>
            </CardDetails>
            <CardPrice>
              ${((duration / 100) * car.multiplier).toFixed(2)}
            </CardPrice>
          </Car>
        ))}
      </CardList>
    </Wrapper>
  );
};

export default RideSelector;

const Wrapper = tw.div`
flex-1 h-1/2 overflow-y-scroll flex flex-col 
`;

const Title = tw.div`
  text-gray-500 text-center text-xs py-2 border-b
`;

const CardList = tw.div`
  overflow-y-scroll cursor-pointer
`;

const Car = tw.div`
  flex p-4 items-center 
`;

const CardImage = tw.img`
  h-14 mr-4
`;

const CardDetails = tw.div`
  flex-1
`;

const Service = tw.div`
  font-medium
`;

const Time = tw.div`
  text-xs text-blue-500
`;

const CardPrice = tw.div`
  text-sm
`;

const BackButtonContainer = tw.div`
  fixed z-index-50 top-3 left-3  cursor-pointer
  
`;

const BackButton = tw.img`
bg-white rounded-full
`;
