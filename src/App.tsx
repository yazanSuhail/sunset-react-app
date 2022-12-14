import React from "react";
import styled from "styled-components";
import { getLocalTime } from "./local-time";

const SunsetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #fff;
`;

const SunsetImage = styled.img`
  width: 500px;
  height: 300px;
`;

const Countdown = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #333;
`;

class Sunset extends React.Component {
  state = {
    localTime: getLocalTime()
  };

  render() {
    const sunset = this.state.localTime.sunset();

    return (
      <SunsetContainer>
        <SunsetImage src={sunset.imageUrl} alt="sunset" />
        <Countdown>{sunset.countdown()}</Countdown>
      </SunsetContainer>
    );
  }
}

export default Sunset;
