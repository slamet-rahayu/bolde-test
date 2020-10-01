import React from 'react';
import { makeStyles, Grid, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Product from '../../../data/products';
const queryParams = new URLSearchParams(window.location.search)
const Cat = queryParams.get('c');
const Prod = queryParams.get('p')

export default ()=>{

    const useStyles = makeStyles({
        container:{
         margin:"40px",
         minHeight:"65vh"
        },
        card:{
         maxWidth: 500,
         maxHeight: 500
        },
        rightGrid:{
         paddingLeft:"60px",
         display:"flex",
         flexDirection:"column",
         justifyContent:"space-between"
        },
        img:{
         width:"100%",
         height:"100%"
        }
    })

    const classes = useStyles()

    return(
        <div className={classes.container}>
         <Grid container>
          <Grid item lg={5}>
           <Card className={classes.card}>
            <img className={classes.img} alt={Product.category[Cat].product[Prod].name} src={Product.category[Cat].product[Prod].picture} />
           </Card>
          </Grid>
          <Grid item lg={7} className={classes.rightGrid}>
          <div style={{maxWidth:"500px",maxHeight:"440px"}}>
              <h1>{Product.category[Cat].product[Prod].name}</h1>
              <h4>Rp. {Product.category[Cat].product[Prod].price}</h4>
              <h6>{Product.category[Cat].product[Prod].description}</h6>
            </div>
            <div style={{marginBottom:"10px"}}>
              <Button variant="contained" color="primary" style={{marginRight:"20px"}}>Beli</Button>
              <Button variant="contained" color="primary">Tambah ke keranjang</Button>
            </div>
          </Grid>
         </Grid>
        </div>
    )
}