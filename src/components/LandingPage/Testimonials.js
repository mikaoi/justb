import React from 'react';
import review1 from '../../styles/images/langingImg/review1.png';
import review2 from '../../styles/images/langingImg/review2.png';
import review3 from '../../styles/images/langingImg/review3.png';
import {Box, Typography} from "@mui/material";
import {theme} from "../../styles/theme/theme";


const Testimonials = () => {
  const reviews = [
    {
      photo: review1,
      comment: "“I trust the videos, they help my students find the right energy level to learn the best!”",
      reviewer: "Principle Hankerson, Hahn  Elementary"
    },
    {
      photo: review2,
      comment: "“Every kid should do justb, it makes you feel calm in your body and mind!“",
      reviewer: "Over 500 Students"
    },
    {
      photo: review3,
      comment: "“I researched ALOT of online movement programs. justb is the best in the business!”",
      reviewer: "Steve"
    }];

  return (
    <Box sx={{display: "flex", flexDirection: "column", gap: "80px", padding: "100px 200px"}}>
      <Typography variant={"h3"} fontSize={"24px"} textAlign={"center"}>What is the justb community saying?</Typography>
      <Box sx={{width: "100%", display: "flex", justifyContent: "space-between"}}>
        {reviews.map((value, i) => {
          return <Box key={i} sx={{maxWidth: "200px", display: "flex", flexDirection: "column", gap: "10px"}}>
            <img src={value.photo} alt={"App"} width={"100%"}/>
            <Typography variant={"h3"}
                        sx={{textAlign: "center", color: theme.palette.fontColor.main}}>{value.comment}</Typography>
         <Typography variant={"h3"}
                        sx={{textAlign: "center", color: theme.palette.fontColor.main}}>- {value.reviewer}</Typography>
          </Box>
        })}
      </Box>
    </Box>
  );
};

export default Testimonials;