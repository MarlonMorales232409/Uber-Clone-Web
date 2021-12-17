import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "!mapbox-gl";
import Map from "./Components/Map";
import Link from "next/link";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src=" https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>Marlon Morales</Name>
            <UserImage src="https://lh3.googleusercontent.com/a-/AOh14Gj7rcYEbZp-A5R4uG5LrNBBPUg5NJouVq_bRZhGNg=s288-p-no" />
          </Profile>
        </Header>

        <ActionBottons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionBottons>
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen
`;

const ActionItems = tw.div`
  flex-1 p-4
`;

const Header = tw.div`
flex justify-between items-center`;

const UberLogo = tw.img`
  h-28
`;

const Profile = tw.div`
  flex items-center
`;

const Name = tw.div`
  mr-4 w-18 text-small
`;

const UserImage = tw.img`
  h-12 w-12 rounded-full
  border border-gray-200 p-px
`;

const ActionBottons = tw.div`
  flex
`;

const ActionButton = tw.div`
  flex bg-gray-200 flex-1 m-1 h-32 items-center 
  flex-col justify-center rounded-lg transform hover:scale-105
  transition text-xl cursor-pointer
`;

const ActionButtonImage = tw.img`
  h-3/5
`;

const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl p-4 flex items-center
  mt-8 
`;
