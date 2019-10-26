import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// //card
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

import Axios from 'axios';
//item
import ListProduct from '../Components/ListProducts';




// export default function Buy() {
class ItemsPage extends React.Component {
    state = {
        data : [],
        // spacing: 2
    };

    componentDidMount () {
      Axios.get ('http://localhost:5000/product')
      .then (response => this.setState({data : response.data.result}))
      .catch (error => console.log(error));
    }

    render () {
        const classes = makeStyles(theme => ({
            root: {
              flexGrow: 1,
            },
            paper: {
              padding: theme.spacing(2),
              textAlign: 'center',
              color: theme.palette.text.secondary,
              direction: "row",
            },
            
            control: {
              padding: theme.spacing(2),
            },
            card: {
              maxWidth: 345,
  
        
            },
            media: {
              height: 140,
            },
            prod: {
                maxWidth: 200,
                direction: "row", 
                justify:"right",
            }
          }));

//   const [spacing, setSpacing] = React.useState(2);

//   const handleChange = event => {
//     // setSpacing(Number(event.target.value));
//         this.setState({spacing:Number(event.target.value)})
//   };
    // const product = this.state.data;
    // console.log(product);
    // product.map (x=>{
    //     console.log(x.name)
    // })
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper} >
          <Grid container className={classes.root} spacing={2}>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={3}>
                  {this.state.data.map(value => ( 
                    <Grid key={value} item xs={12} md={6} lg={3}  >
                      <ListProduct name={value.name} image={value.image} discription={value.discription} category={value.category} price={value.price}/>
                    </Grid>
                  ))}
                 </Grid>
               </Grid>
             </Grid>
          </Paper>
        </Grid>
        {/* order */}
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}> <h3>Cart</h3>
            <img src="https://image.flaticon.com/icons/png/512/102/102661.png" height="300" />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
    }
}

export default ItemsPage;