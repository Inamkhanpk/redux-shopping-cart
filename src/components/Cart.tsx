import React from "react"

import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
  Avatar,
  Typography,
  Grid
} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import { useSelector } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import { ProductItem } from "../global"
import { store, remove } from "../store"

const useStyles = makeStyles((theme) => ({
  para: {
    
    [theme.breakpoints.down("md")]: {
      fontSize:"1.2rem",
      margin:'auto'
    },

  
  }
}));



const Cart = () => {
  const classes = useStyles();
  const products = useSelector((state: ProductItem[]) => state)

  return (
    <>
    

      <Grid container   justify="center">
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Shopping Basket
      </Typography>
      </Grid>

      <Grid container >
          <Typography  variant="h5" className={classes.para}>
        You have {products.filter(product => product.added).length} items in your basket
      </Typography>
      </Grid>


      
      <List >
        {products
          .filter(product => product.added)
          .map((product: ProductItem) => (
            <React.Fragment key={product.id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Product" src={product.imageUrl} />
                </ListItemAvatar>
                <ListItemText
                  primary={product.title}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        
                        color="textPrimary"
                      >
                        &pound;{(product.price / 100).toFixed(2)}
                      </Typography>
                      {` — ${product.description}`}
                    </React.Fragment>
                  }
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => store.dispatch(remove({ id: product.id }))}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}


        <ListItem >
          <Grid container justify="flex-end">
          <Typography variant="h3"  >
            &pound;
            {(
              products
                .filter(product => product.added)
                .reduce((acc, current) => (acc += current.price), 0) / 100
            ).toFixed(2)}
          </Typography>
          </Grid>
        </ListItem>

      </List>
      

      

    </>
  )
}

export default Cart