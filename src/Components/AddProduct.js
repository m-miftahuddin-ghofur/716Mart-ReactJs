import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Axios from 'axios';

// export default function AddProduct() {
class AddProduct extends React.Component {
    state = {
        name: '',
        discription: '',
        image: '',
        category_id: '',
        price: '',
        quantity: '',
        open: false,
       
    
      };
      
render (){
//   const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    this.setState({open: true})
  };

  const handleClose = () => {
    this.setState({open: false})
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Product
      </Button>
      <Dialog open={this.state.open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Product</DialogTitle>
        <DialogContent>
          <TextField 
            onChange={ e => this.setState({name : e.target.value})}
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
          />
          <TextField
            onChange={ e => this.setState({discription : e.target.value})}
            autoFocus
            margin="dense"
            id="name"
            label="Discription"
            type="text"
            fullWidth
          />
          <TextField
            onChange={ e => this.setState({image : e.target.value})}
            autoFocus
            margin="dense"
            id="name"
            label="Image"
            type="text"
            fullWidth
          />
          <TextField
            onChange={ e => this.setState({category_id : e.target.value})}
            autoFocus
            margin="dense"
            id="name"
            label="Category"
            type="text"
            fullWidth
          />
          <TextField
            onChange={ e => this.setState({price : e.target.value})}
            autoFocus
            margin="dense"
            id="name"
            label="Price"
            type="number"
            fullWidth
          />
          <TextField
            onChange={ e => this.setState({quantity : e.target.value})}
            autoFocus
            margin="dense"
            id="name"
            label="Quantity"
            type="number"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary"
            onClick={ e => {
                e.preventDefault();
                handleClose();
                Axios.post ('http://localhost:5000/product', this.state)
                .then (response=> {this.props.onAddProductSuccess()})
                .catch (error => console.log (error));
            }} 
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}}

export default AddProduct;
