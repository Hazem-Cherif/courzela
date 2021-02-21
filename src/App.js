import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import Header from "./Template/Header";
import Footer from "./Template/Footer";
import NavBar from "./Template/NavBar";
function App() {
  return (
    <>
   <Header></Header>
   <NavBar></NavBar>
   <Footer></Footer>
   </>
  );
}
const AppFrame = styled.div`
text-align: center;
display: flex;
flex-direction: column;
`;
export default App;
