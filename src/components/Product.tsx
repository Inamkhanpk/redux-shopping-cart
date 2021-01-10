import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Grid from "@material-ui/core/Grid"
import CardMedia from "@material-ui/core/CardMedia"
import CardActions from "@material-ui/core/CardActions"
import CardActionArea from "@material-ui/core/CardActionArea"
import { useSelector } from "react-redux"
import { ProductItem } from "../global"
import { store, add } from "../store"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent:"space-between"

    
  },
  container:{
    overflow: "auto",
    margin: 0,
    width: "100%",
  },
  cards:{
    height: "100%",


    "&:hover": {
      cursor: "pointer",
    },
  },
 
  cardContent: {
    display: "flex",
    justifyContent: "space-between",

    [theme.breakpoints.only("md")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.only("xs")]: {
      flexDirection: "column",
    },
  },
  media:{
    height: 280,

    [theme.breakpoints.down("md")]: {
      height: 200,
    },
    [theme.breakpoints.down("xs")]: {
      height: 320,
    },
  },
  cartmargin:{
    margin:theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      margin:'auto'
    },
  }
}));



const Product = () => {
  const classes = useStyles();
  const history = useHistory();
  const products = useSelector((state: ProductItem[]) => state)
     

  function handleClick() {
    history.push("/cart");
  }
  return (<Grid container className={classes.root} >
    

    <Grid  item >
      <h1>T-Shirt Store</h1>
    </Grid>
    
    <Grid  item className={classes.cartmargin} >
    <Button onClick={handleClick} variant="contained" color="secondary">
      Cart Details
    <ShoppingCartIcon/>
      </Button>
    </Grid>

    <Grid container spacing={2} className={classes.container}>
     {products.map((product)=>(
        <Grid key={product.id} item xs={12} md={4}>
         <Card  className={classes.cards}>
         <CardActionArea>
           <CardMedia
           className={classes.media}
           image={product.imageUrl}
      
      />
      <CardContent  className={classes.cardContent}>
                <Typography variant="h6" component="h3" >
                  Price  {product.price}
                 </Typography>
                 </CardContent>
                 </CardActionArea>
      <CardActions>
      <Button   onClick={() => store.dispatch(add(product))} variant="contained" color="primary">
        ADD TO CART
      </Button>
      
      </CardActions>
      </Card>
       </Grid>
     ))}
     </Grid>


    </Grid>
  )
}

export default Product 