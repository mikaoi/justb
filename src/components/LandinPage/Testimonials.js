import React from 'react';
import review1 from '../../styles/images/langingImg/review1.png';
import review2 from '../../styles/images/langingImg/review2.png';
import review3 from '../../styles/images/langingImg/review3.png';
import {Box} from "@mui/material";


const Testimonials = () => {
  const reviews = [review1, review2, review3];
  return (
    <Box sx={{display: "flex", justifyContent: "space-between", padding:"50px"}}>
      {reviews.map((review, i) => {
        return <Box key={i} sx={{width: "75%"}}>
          <img src={review} alt={review} width={"100%"}/>
        </Box>
      })}
    </Box>
  );
};

export default Testimonials;