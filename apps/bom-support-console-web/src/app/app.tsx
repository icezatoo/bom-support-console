import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Button } from '@bom-support-console/components';

const StyledApp = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;

const MainApp = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export function App() {
  const [color, setColor] = useState('primary');

  const handleChangeColor = () => {
    const colors = ['primary', 'secondary', 'default'];
    const randomColor = Math.floor(Math.random() * 3);
    setColor(colors[randomColor]);
  };

  return (
    <StyledApp>
      <MainApp>
        <h1>Hello world!</h1>
        <h2>Color is : {color}</h2>
        <Button color={color} onClick={handleChangeColor}>
          Test
        </Button>
      </MainApp>
    </StyledApp>
  );
}

export default App;
