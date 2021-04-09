import styled from '@emotion/styled';
import React from 'react';
import { Button } from '@bom-support-console/components';

const StyledApp = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;

export function App() {
  return (
    <StyledApp>
      <main>
        <h1>Hello world!</h1>
        <Button color="secondary">Test</Button>
      </main>
    </StyledApp>
  );
}

export default App;
