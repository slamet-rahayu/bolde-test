import React, {useState} from 'react';
import { makeStyles, MenuItem, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default ()=>{

    const [category, setCategory] = useState('')
    const [open, setOpen] = useState(false)

    const useStyles = makeStyles({
        container:{
         margin:"40px",
         minHeight:"65vh"
        },
        input:{
         width:"50%",
        },
        inputGroup:{
            margin:"20px 0"
        }
    })

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    const classes = useStyles()

    return(
     <div className={classes.container}>
      <form>
      <div className={classes.inputGroup}>
       <TextField id="outlined-basic" label="Nama Produk" variant="outlined" className={classes.input} />
      </div>
      <div className={classes.inputGroup}>
       <TextField id="outlined-basic" label="Harga" variant="outlined" className={classes.input} />
      </div>      
      <div className={classes.inputGroup}>
       <TextField 
        value={category} 
        onChange={e=>setCategory(e.target.value)}
        select 
        id="outlined-basic" 
        label="Kategori" 
        variant="outlined" 
        className={classes.input}>
        <MenuItem value="Elektronik">Elektronik</MenuItem>
        <MenuItem value="Komputer dan aksesoris">Komputer dan aksesoris</MenuItem>
       </TextField>
      </div>      
      <div className={classes.inputGroup}>
       <TextField id="outlined-basic" label="Harga" variant="outlined" className={classes.input} />
      </div>       
      <div className={classes.inputGroup}>
       <TextField id="outlined-basic" label="Stok" variant="outlined" className={classes.input} />
      </div>
      <div className={classes.inputGroup}>
       <TextField id="outlined-basic" label="Deskripsi Produk" variant="outlined" className={classes.input} />
      </div>
      </form>
      <Button onClick={handleClickOpen} variant="contained" color="primary">Simpan</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Berhasil</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Produk Berhasil Disimpan
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>window.location.href="/"} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
     </div>
    )
}