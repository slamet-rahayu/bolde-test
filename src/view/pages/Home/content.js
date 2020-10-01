import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Product from '../../../data/products';

export default ()=>{

    const useStyles = makeStyles({
        container:{
         margin:"40px"
        },
        card:{
         maxWidth: 240,
         marginBottom: "40px"
        },
    })

    const classes = useStyles()

    return(
        <div className={classes.container}>
         {Product.category.map((v,c)=>(
          <React.Fragment>
          <h1>{v.name}</h1>
          <h4>{v.description}</h4>
          <Grid container key={v.id}>
            {v.product.map((k,p)=>(
            <Grid item lg={3} key={k.id}>
             <Card className={classes.card}>
              <CardActionArea onClick={()=>window.location.href = `/product-detail?c=${c}&p=${p}`}>
                <CardMedia
                   component="img"
                    alt={k.name}
                    height="240"
                    image={k.picture}
                    title={k.name}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {k.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                     RP. {k.price}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                     {k.description}
                    </Typography>
                  </CardContent>
                  </CardActionArea>
                </Card>
            </Grid>
            ))}
          </Grid>
          </React.Fragment>
         ))}
        </div>
    )
}