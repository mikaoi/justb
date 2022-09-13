import React, {useState, useEffect} from "react";
import {Box, Typography} from "@mui/material";
import {CardBox, ListItem} from "../../styles/theme/styledComponents";
import challengeImg from "../../styles/images/cardsImg/challenge.png";
import character from '../../styles/images/cardsImg/greyCharacter.png'
import {theme} from "../../styles/theme/theme";
import {ReactComponent as ListMark} from "../../styles/images/listMark.svg";
import {ReactComponent as Close} from "../../styles/images/navImg/closeBtn.svg";
import {TextField} from "@mui/material";
import {v4 as uuidv4} from "uuid";
import GoalList from "./GoalList";

const MonthlyChallengesCard = () => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  useEffect(() => {
    function getFromLocalStorage() {
      let todos;
      const reference = localStorage.getItem('todos');
      if (reference?.length > 0) {
        todos = JSON.parse(reference);
        setTodos(todos);
      }
    }

    getFromLocalStorage();
  }, []);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);


  const onChallengeHandler = (e) => {
    if (e.key === "Enter") {
      setTodos([...todos, {todo: e.target.value, id: uuidv4()}])
      setTodo('')
    }
  }

  const onTodoDeleteHandler = (id) => {
    const objWithIdIndex = todos.findIndex((obj) => obj.id === id);
    todos.splice(objWithIdIndex, 1);
    setTodos([...todos])
  }
  return (
    <CardBox
      sx={{
        alignContent: 'center',
        paddingY: "14px",
        paddingX: "20px",
        width: {xs: "100%", xl: "50%"},
        display: "flex",
        flexDirection: "column",
        boxShadow: theme.shadows[2],
        minHeight: "410px",
      }}
    >
      <Box
        sx={{
          paddingTop: "5px",
          display: "flex",
          justifyContent: "center",
          marginBottom: 2,
          alignContent: 'center',
          textAlign: 'center'
        }}
      >
        <img
          src={challengeImg}
          style={{width: "45px", height: "45px", position: "relative", bottom: '10px'}}
          alt={"challenge"}
        />
        <Typography variant={"h5"} component={"span"} sx={{paddingLeft: "20px", alignContent: 'center', textAlign: 'center', marginRight: '50px'}}>
          Monthly Challenges
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
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
        {todos.length > 0 && <Box sx={{
          display: "flex",
          flexDirection: "column", maxHeight: "40px", overflowY: "scroll", gap: "20px"
        }}>
          {todos.map((item, i) => {
            return <div key={i}>
              {(item.todo !== null) &&
              <ListItem>
                <ListMark/>
                <Typography variant={"h2"} component={"span"}>
                  {item.todo}
                </Typography>
                <Close
                  onClick={() => onTodoDeleteHandler(item.id)}
                  style={{
                    cursor: "pointer",
                    marginLeft: "auto",
                    width: "15px",
                    height: "15px",
                    fill: theme.palette.secondary.main,
                  }}
                />
              </ListItem>
              }
            </div>
          })}
        </Box>}
        <TextField
          id="standard"
          label="Teacher Challenge"
          variant="standard"
          color={"fontColor"}
          focused={true}
          value={todo}
          placeholder="Enter your own custom challenge!"
          onChange={(e) => setTodo(e.target.value)}
          onKeyUp={(e) => onChallengeHandler(e)}
        />
      </Box>
      <Box sx={{position: "absolute", top: "calc(100% - 160px)", right: "10px"}}>
        <img src={character} alt={"character"} style={{width: "165px", marginLeft: "auto"}}/>
      </Box>
    </CardBox>
  );
};

export default MonthlyChallengesCard;