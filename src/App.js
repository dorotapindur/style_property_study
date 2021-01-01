import './App.css';
import styled from "styled-components";
import { css } from '@emotion/css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button type="danger">Click Me!</Button>
        <Button type="primary">Click Me!</Button>
        <Button>Click Me!</Button>
        <StyledButton>Click me too!</StyledButton>
        <DangerButton>Warning!</DangerButton>
        <EmotionButton />
      </header>
    </div>
  );
}

const StyledButton = styled.button`
  --normal-background: green;
  --active-background: lightgreen;
  --hover-background: darkgreen;
  font-size: 20px;
  color: white;
  background-color:var(--normal-background);
  border: none;
  border-radius: ${props => props.borderRadius || 5}px;
  padding: 10px;
  outline: none;
  margin: 5px;
    &:hover {
    background-color: var(--hover-background);
  }
  &:active {
    background-color: var(--active-background);
  }
`;

const DangerButton = styled(StyledButton)`
  --normal-background: red;
  --active-background: pink;
  --hover-background: darkred;
`;


function EmotionButton() {
  const emotionButtonStyle = css`
    background-color: violet;
    margin: 20px;
    color: orange;
  `;
  return <button className={emotionButtonStyle}>Emotion</button>
}
function Button(props) {
  const buttonStyle = {};
  if (props.type === "primary") {
    buttonStyle["--normal-background"] = "blue";
    buttonStyle["--active-background"] = "lightblue";
    buttonStyle["--hover-background"] = "darkblue";
  } else if (props.type === "danger") {
    buttonStyle["--normal-background"] = "red";
    buttonStyle["--active-background"] = "pink";
    buttonStyle["--hover-background"] = "darkred";
  }
  return(
    <StyledButton borderRadius={20} className="Button" style={buttonStyle}>{props.children}</StyledButton>
  )
}

export default App;
