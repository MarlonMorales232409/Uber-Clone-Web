import tw from "tailwind-styled-components";
import { carList } from "../../Assets/carList";
import Link from "next/link";

const RideSelector = () => {
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
            <CardPrice>${24 * car.multiplier}.00</CardPrice>
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
