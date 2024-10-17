import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const SingleProduct = () => {

  const [singleprod , setSingleProd] = useState([])
   const params = useParams()
  //  console.log(params)

   useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${params.id}`)
    .then((res)=>{ return res.json()}).then((data)=>{
      console.log(data)
     setSingleProd(data)
    })
   },[params])
 
  return (
  <>
   <Card sx={{ maxWidth: "100%", height:"700px", margin:" 20px auto", display:'flex'}}>
      <CardMedia
        sx={{ height: 440, width:440 , aspectRatio:3/2, objectFit:"content" }}
        image={singleprod.image}
        // title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h2" component="h2" sx={{marginTop:"10px"}}>
         {singleprod.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize:"15px", marginTop:"10px" }}>
   <span style={{fontWeight:"bold", color:"black"}}>Description:</span>   {singleprod.description}
      
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize:"15px", marginTop:"10px" }}>
        <span style={{fontWeight:"bold", color:"black"}}>Price:</span> {singleprod.price}
      
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize:"15px", marginTop:"10px" }}>
        <span style={{fontWeight:"bold", color:"black"}}>Rating:</span> {singleprod.rating && singleprod.rating.rate}
      
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize:"15px", marginTop:"10px" }}>
        <span style={{fontWeight:"bold", color:"black"}}>Category:</span>{singleprod.category}
      
        </Typography>
        <CardActions>
        <Button size="medium" variant='contained'>Add to Cart</Button>
        <Button size="medium" variant="contained">Buy Now</Button>
       
      
      
      </CardActions>
      </CardContent>
      
    </Card>
  </>
  )
}


