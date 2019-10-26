import React, {Component} from 'react';
import '../App.css';
import Axios from 'axios';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from  '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

//modal
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';

  //

class Product extends Component {
    state = {
        data : [],
        open: false,
        selectedRow: {},
        seacrhName: [],
    };

    

    componentDidMount () {
        Axios.get ('http://localhost:5000/product')
        .then (response => this.setState({data : response.data.result}))
        .catch (error => console.log(error));
    }

    render() { 
        const StyledTableCell = withStyles(theme => ({
            head: {
              backgroundColor: theme.palette.common.black,
              color: theme.palette.common.white,
            },
            body: {
              fontSize: 14,
            },
          }))(TableCell);

          const StyledTableRow = withStyles(theme => ({
            root: {
              '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.background.default,
              },
            },
          }))(TableRow);
          
          //
          const classes = makeStyles(theme => ({
            root: {
              width: '100%',
              marginTop: theme.spacing(3),
              overflowX: 'auto',
            },
            table: {
              minWidth: 100,
              maxWidth: 200,
            },
            textField: {
              marginLeft: theme.spacing(1),
              marginRight: theme.spacing(1),
            },
          }));
      
        return (
            <div >
              <Grid item xs={12} >
            <Paper className={classes.root}>
              <h1>Table Product</h1>
             
               
              <AddProduct onAddProductSuccess={ ()=> { 
                  Axios.get ('http://localhost:5000/product')
                  .then (response => this.setState({data : response.data.result}))
                  .catch (error => console.log(error));
                }} />
                <br></br>
                <form>
                <FormControl className={classes.formControl}>
                  <InputLabel >Sort By</InputLabel>
                  <Select
                    value=""
                    style={{ width: 300 }}
                    onChange=""
                  >
                    <MenuItem value={10}>Name</MenuItem>
                    <MenuItem value={20}>Category</MenuItem>
                    <MenuItem value={30}>New</MenuItem>
                  </Select>
                </FormControl>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                      id="filled-name"
                      label="Seacrh Name"
                      className={classes.textField}
                      // value=""
                      onChange= { e => {
                        e.preventDefault();
                        // let params ={name: this.state.data.seacrhName} 
                        Axios.get(`http://localhost:5000/product/search`,{params:{name:'fanta'}})
                        .then (response => console.log(this.state.seacrhName))
                        // .then (response => this.setState({data : response.data.result}))
                        .catch (error => console.log(error));
                      } }
                      margin="normal"
                      variant="filled"
                    />
                  </form>
                  </form>
                  
                  {/* </Grid> */}
              <h6></h6>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Nama Product</StyledTableCell>
                  <StyledTableCell align="right">Discription</StyledTableCell>
                  <StyledTableCell align="right">Image</StyledTableCell>
                  <StyledTableCell align="right">Category</StyledTableCell>
                  <StyledTableCell align="right">Price</StyledTableCell>
                  <StyledTableCell align="right">Quantity</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.data.map(item => (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell component="th" scope="row">
                    {item.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{item.discription}</StyledTableCell>
                    <StyledTableCell align="right">{item.image}</StyledTableCell>
                    <StyledTableCell align="right">{item.category}</StyledTableCell>
                    <StyledTableCell align="right">{item.price}</StyledTableCell>
                    <StyledTableCell align="right">{item.quantity}</StyledTableCell>
                    <StyledTableCell >
                      <Button color="primary" variant="outlined"
                        onClick= { e => {
                          e.preventDefault(); 
                          Axios.delete(`http://localhost:5000/product/${item.id}`)
                          .then (response =>  {
                              Axios.get ('http://localhost:5000/product')
                              .then (response => this.setState({data : response.data.result}))
                              .catch (error => console.log(error));
                          })
                          .catch (error => console.log (error));
                        } }
                      >
                      <DeleteIcon /> 
                      </Button >
                      <Button >
                        <UpdateProduct 
                          name={item.name} 
                          discription={item.discription} 
                          image={item.image}
                          category={item.category}
                          price={item.price}
                          quantity={item.quantity}
                          id={item.id}

                          onUpdateProductSuccess={ ()=> { 
                            Axios.get ('http://localhost:5000/product')
                            .then (response => this.setState({data : response.data.result}))
                            .catch (error => console.log(error));
                          }}
                        />
                       </Button>
                       </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          </Grid>
           </div>
        )
    }
}

export default Product;