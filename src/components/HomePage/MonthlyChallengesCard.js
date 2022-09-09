import React, {useState, useEffect} from "react";
import {Box, Typography} from "@mui/material";
import {CardBox, ListItem} from "../../styles/theme/styledComponents";
import challengeImg from "../../styles/images/cardsImg/challenge.png";
import character from '../../styles/images/cardsImg/greyCharacter.png'
import {theme} from "../../styles/theme/theme";
import {ReactComponent as ListMark} from "../../styles/images/listMark.svg";
import {ReactComponent as Close} from "../../styles/images/navImg/closeBtn.svg";
import {TextField} from "@mui/material";
import GoalList from "./GoalList";


const styles = theme => ({
  textFieldColor:{
      color:'#31476E'
  }
});


const MonthlyChallengesCard = () => {
  const [teacherChallenge, setTeacherChallenge] = useState('')

  useEffect(() => {
    setTeacherChallenge(window.sessionStorage.getItem("teacherChallenge"));
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("teacherChallenge", teacherChallenge);
  }, [teacherChallenge]);

  const onChallengeHandler = (e) => {
    if (e.key === "Enter") {
      setTeacherChallenge(e.target.value)
    }
  }

  return (
    <CardBox
      sx={{
        alignContent:'center',
        paddingY: "14px",
        paddingX: {xs: "20px", "3xl": "32px"},
        width: "500px",
        display: "flex",
        flexDirection: "column",
        boxShadow: theme.shadows[2],
        height: "550px"
      }}
    >
      <Box
        sx={{
          paddingTop: "10px",
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        <img
        src={challengeImg}
        style={{width: "50px", height: "50px", position: "relative", right:'20px', bottom: '10px'}}
        alt={"challenge"}
      />
        <Typography variant={"h5"} component={"span"}>
          Monthly Challenges
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          mb: "5px",
        }}
      >
        {[1, 2].map((v, i) => {
          return (
            <ListItem key={i}>
              <ListMark/>
            </ListItem>
          );
        })}
        {teacherChallenge
          ? <ListItem>
            <ListMark/>
            <Typography variant={"h2"} component={"span"}>
              {teacherChallenge}
            </Typography>
            <Close onClick={() => setTeacherChallenge('')}
                   style={{
                     cursor: "pointer",
                     marginLeft: "auto",
                     width: "15px",
                     height: "15px",
                     fill: theme.palette.fontColor.main,
                   }}
            />
          </ListItem>
          : <TextField
            id="standard"
            label="Teacher Challenge"
            variant="standard"
            color={'fontColor'} //need to change the text input field to #31476E
            focused={true}
            placeholder="Enter your own custom challenge!"
            onKeyUp={(e) => onChallengeHandler(e)}
          
          />
        }
      </Box>
      <img src={character} alt={"character"} style={{width: "200px", marginLeft: "250px", marginTop: "20px"}}/>
    </CardBox>
  );
};

export default MonthlyChallengesCard;
