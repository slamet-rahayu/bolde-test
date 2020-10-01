import React from 'react';
import { makeStyles } from '@material-ui/core';

export default ()=>{
    const useStyles = makeStyles({
        container:{
         minHeight:"80px",
         backgroundColor:"#3f51b5",
         display:"flex",
         justifyContent:"center",
         alignItems:"center"
        }
    })

    const classes = useStyles()

    return(
        <div className={classes.container}>
         <h4>Copyright &copy; 2020 - Slamet Rahayu</h4>
        </div>
    )
}