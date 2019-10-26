import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';

//dropdown
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import Axios from 'axios';


const classes = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
// export default function AddProduct() {
class UpdateProduct extends React.Component {
    state = {
        id : '',
        name: '',
        discription: '',
        image: '',
        category_id: '',
        price: '',
        quantity: '',
        open: false,
        data: [],
        // cat:[]
      };
      
    //   componentDidMount() {
    //     Axios.get ('http://localhost:5000/category')
    //     // .then (response => console.log(response.data.result))
    //     .then (response => this.setState({cat : response.data.result})) 
    //     .catch (error => console.log(error)); 
    // }
    
render (){
//   const [open, setOpen] = React.useState(false);
// console.log(this.state.cat)
    
  const handleClickOpen = () => {
    this.setState({open: true})
  };

  const handleClose = () => {
    this.setState({open: false})
  };
  return (
    <div>
      <Button variant="outlined" color="primary" 
      onClick={
          handleClickOpen
        }>

      <EditIcon />
      </Button>
      <Dialog open={this.state.open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update Product</DialogTitle>
        <DialogContent>
          <TextField 
            onChange={ e => this.setState({name : e.target.value})}
            autoFocus
            margin="dense"
            id="name"
            defaultValue={this.props.name} 
            label="Name"
            type="text"
            fullWidth
          />
          <TextField
            onChange={ e => this.setState({discription : e.target.value})}
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            defaultValue={this.props.discription}
            type="text"
            fullWidth
          />
          <TextField
            onChange={ e => this.setState({image : e.target.value})}
            autoFocus
            margin="dense"
            id="name"
            defaultValue={this.props.image}
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
            defaultValue={this.props.category}
            type="text"
            fullWidth

          />
          {/* <FormControl className={classes.formControl}>
            <InputLabel htmlFor="demo-controlled-open-select">Category</InputLabel>
              <Select
                // open={false}
                // onClose={this.handleClosed}
                // onOpen={this.handleOpen}
                defaultValue={this.state.cat.category_id}
                // onChange={this.handleChange}
                // inputProps={{
                //   name: 'category_id',
                //   id: 'demo-controlled-open-select',
                // }}
              > 
              {this.state.cat.map((item,index) => (
                <MenuItem key={index} value={item.id} > {item.category} </MenuItem>
              ))}
                

              </Select>
            </FormControl> */}

          <TextField
            onChange={ e => this.setState({price : e.target.value})}
            autoFocus
            margin="dense"
            id="name"
            label="Price"
            defaultValue={this.props.price}
            type="number"
            fullWidth
          />
          <TextField
            onChange={ e => this.setState({quantity : e.target.value})}
            autoFocus
            margin="dense"
            id="name"
            label="Quantity"
            defaultValue={this.props.quantity}
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
                Axios.put (`http://localhost:5000/product/${this.props.id}`, this.state)
                .then (response=> {this.props.onUpdateProductSuccess()}
                )
                // .then (response=> {this.props.onUpdateProductSuccess()})
                .catch (error => console.log (error));
            }} 
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}}

export default UpdateProduct;
