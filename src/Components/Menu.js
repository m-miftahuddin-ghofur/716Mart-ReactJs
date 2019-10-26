import React, {Component} from 'react';
import '../App.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class ListProduct extends Component {
    render() {
        const classes = makeStyles({
            card: {
              maxWidth: 345,
            },
          });

        
        return (
            <div className='transaction'>
                <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="https://jualayamgeprekdisambi.files.wordpress.com/2018/08/images-9.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Ayam Geprek
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Buy
                    </Button>
                    <Button size="small" color="primary">
                    12.000
                    </Button>
                </CardActions>
            </Card>
            </div>
        )
    }
}

export default ListProduct;