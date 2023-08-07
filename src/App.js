import logo from './logo.svg'
import './App.css';
import { ThemeProvider } from 'styled-components';
import ParentComponent from './components/ParentComponent';
import { StyleSheets } from './components/StyleSheets';
import StyledButton, { FancyButton, SubmitButton,AnimatedLogo } from './components/Button/Button';
import { DarkButton } from './components/Button/Button.styles';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
const theme={
  dark:{
    primary:'#000',
    text:'#fff'
  },
  light:{
    primary:'#fff',
    text:'#000'
  }
}


function App() {
  return (
    <div className="App">
      {/* <ParentComponent/> */}
      {/* <StyleSheets/> */}
      {/* <button>Button</button> */}
      {/* <img src={logo} className='App-logo' alt=''/> */}
      {/* <ThemeProvider theme={theme}>
      <StyledButton>Styled Button</StyledButton>
      <div>
        <br/>
      </div>
      <StyledButton variant='outline'>Styled Button</StyledButton>
      <div>
        <br/>
      </div>
      <FancyButton as='a'>Fancy Button</FancyButton>
      <div>
        <br/>
      </div>
      <SubmitButton>Submit Button</SubmitButton>
      <div>
        <br/>
      </div>
      <AnimatedLogo src={logo}/>
      <div>
        <br/>
      </div>
      <DarkButton>Dark Button</DarkButton>
      </ThemeProvider> */}
      {/* <PostList/> */}
      <PostForm/>
    </div>
   
  );
}

export default App;
