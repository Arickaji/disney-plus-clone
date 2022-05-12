import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommended from "./Recommended";
import Viewer from "./Viewer";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import db from "../firebase";
import {setMovies} from "../features/movie/movieSlice";
import {selectUserName} from "../features/user/userSlice";
import Trending from "./Trending";

const Home = (props) =>{
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName);
    
    useEffect (()=>{
      let recommends = [];
      let newDisney = [];
      let originals = [];
      let trending = [];
      db.collection('movies').onSnapshot((snapshot)=>{
          snapshot.docs.forEach((doc)=>{
            
            switch(doc.data().type){
              case "recommend":
                recommends = [...recommends,{id:doc.id,...doc.data()}]
                break;
              
              case "new":
                newDisney = [...newDisney,{id:doc.id,...doc.data()}]
                break;
              
              case "original":
                originals = [...originals,{id:doc.id,...doc.data()}]
                break;
              
              case "trending":
                trending = [...trending,{id:doc.id,...doc.data()}]
                break;
              
              default:
                console.log("Out of the list");  
                break;
            }
          });

          dispatch(setMovies({
            recommends : recommends,
            newDisney : newDisney,
            originals : originals,
            trending : trending,
          }));

      });
      // eslint-disable-next-line react-hooks/exhaustive-deps 
    },[userName]);

    return (
      <Container>
          <ImgSlider />
          <Viewer/>
          <Recommended/>
          <NewDisney/>
          <Originals/>
          <Trending/>
      </Container>
    );
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;