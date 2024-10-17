
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import { addItem } from '../features/cartSlice';
import { useDispatch } from 'react-redux';
export default function Products() {

  const [allData, setAllData] = useState([])
    useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then((data)=>{
         setAllData(data)
         console.log(data)
    })
  }, [allData])
  const dispatch =useDispatch()
  const getFirstTenWords = (text) => {
    return text.split(' ').slice(0, 10).join(' ') + '...';
  };
  const getFirstFiveWords = (text) => {
    return text.split(' ').slice(0, 4).join(' ') + '...';
  };

  return (<>
<Grid container spacing={2}>

    {allData.map((products)=>(
      <>
       <Grid item xs={12} sm={6} md={4} lg={3}>

      <Card sx={{ maxWidth: 345, height:"350px", margin:" 20px auto"}}>
      <Link to={`/singleprod/${products.id}`} style={{textDecoration:"none"}} >
      <Box>
      <CardMedia
        sx={{ height: 140}}
        image={products.image}
        // title="green iguana"
      />

  
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" underline="none">
          {getFirstFiveWords(products.title)}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} underline="none">
      {/* {products.description} */}
      {getFirstTenWords(products.description)}
        </Typography>
      </CardContent>
      </Box>
      </Link>
      <CardActions>
       
       
        <Button size="small" variant='contained' onClick={()=>{dispatch(addItem(products))}}>Add To Cart</Button>
        <Button size="small" variant='contained'>Buy Now</Button>
      </CardActions>
    </Card>
    </Grid>
    </>
  ))}
  </Grid>
   
   </>)
}

