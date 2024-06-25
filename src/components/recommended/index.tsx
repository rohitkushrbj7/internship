/* eslint-disable @next/next/no-img-element */
import { Box, Card, CardContent, Rating, Stack, Typography } from "@mui/material";
import React from "react";

const Recommended = () => {
  return (
    <>
      <Box sx={{display:"flex",flexDirection:"row"}}>
        <CardContent>
            <Card>
            <Box sx={{ width: "350px", height: "200px" }}>
              <img src="/images/img1.jpg" alt="img" />
            </Box>
          </Card>
          <Box>
            <Typography variant="h6" pt={2} fontWeight={"bold"}>Hotel Tulip Garden</Typography>
            <Typography variant="body1" pt={1}>Near IGI Airport, Airocity road, Delhi</Typography>
            <Box sx={{display:"flex",flexDirection:"row", pt:2,gap:2}}>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            <Typography>(650 reviews)</Typography>
            </Box>
            <Box sx={{display:"flex",flexDirection:"row", pt:2,gap:2}}>
            <Typography>₹ 500</Typography>
            <Typography variant="body1" sx={{textDecoration:"line-through", color:"#BABABA"}}>₹600</Typography>
            <Typography color={"#F99500"}>65% off</Typography>
            </Box>
          </Box>
            
          
        </CardContent>
        <CardContent>
            <Card>
            <Box sx={{ width: "350px", height: "200px" }}>
              <img src="/images/img1.jpg" alt="img" />
            </Box>
          </Card>
          <Box>
            <Typography variant="h6" pt={2} fontWeight={"bold"}>Hotel Tulip Garden</Typography>
            <Typography variant="body1" pt={1}>Near IGI Airport, Airocity road, Delhi</Typography>
            <Box sx={{display:"flex",flexDirection:"row", pt:2,gap:2}}>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            <Typography>(650 reviews)</Typography>
            </Box>
            <Box sx={{display:"flex",flexDirection:"row", pt:2,gap:2}}>
            <Typography>₹ 500</Typography>
            <Typography variant="body1" sx={{textDecoration:"line-through", color:"#BABABA"}}>₹600</Typography>
            <Typography color={"#F99500"}>65% off</Typography>
            </Box>
          </Box>
            
          
        </CardContent>
        <CardContent>
            <Card>
            <Box sx={{ width: "350px", height: "200px" }}>
              <img src="/images/img1.jpg" alt="img" />
            </Box>
          </Card>
          <Box>
            <Typography variant="h6" pt={2} fontWeight={"bold"}>Hotel Tulip Garden</Typography>
            <Typography variant="body1" pt={1}>Near IGI Airport, Airocity road, Delhi</Typography>
            <Box sx={{display:"flex",flexDirection:"row", pt:2,gap:2}}>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            <Typography>(650 reviews)</Typography>
            </Box>
            <Box sx={{display:"flex",flexDirection:"row", pt:2,gap:2}}>
            <Typography>₹ 500</Typography>
            <Typography variant="body1" sx={{textDecoration:"line-through", color:"#BABABA"}}>₹600</Typography>
            <Typography color={"#F99500"}>65% off</Typography>
            </Box>
          </Box>
            
          
        </CardContent>
      </Box>
    </>
  );
};

export default Recommended;
