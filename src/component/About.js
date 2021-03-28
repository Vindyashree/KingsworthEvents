import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import LogoImage from './LogoImage';
import bgImage from './images/backgroundImageForService.jpg'
import Logo from './images/logo.jpg'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(200),
      height: theme.spacing(1),
    },
    textAlign: 'center',
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div style = {{    height:"100%",}}>
    <div  style = {{padding:"50px",fontSize:"2vw",alignItems:"center",backgroundImage:`url(${bgImage})`,backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

   
  }}>
<Paper elevation={0} style={{backgroundColor: "#ffffff",
  border: "1px solid black",
  opacity: "0.6"}}>


<br></br>

<span style = {{padding:"10px",fontWeight:"bold",fontSize:"5vw"}}>About</span>
<br></br>
<span style={{fontFamily: "Papyrus",fontWeight:"bold"}}>
The Every events Starts with ah story
The dreams which you have , we do turn into reality, and conjure a wonderful collaborative magic to create celebrations that are both unmatched and unforgettable .
Don`t  spoil it by running around to make arrangements, you sit and enjoy the beautiful moments and leave the rest to us , we do make it more memorable and worthier.
The Promise ? we listen . To understand who you are, what you want to be ,and what who (what matters) most to you, we leave no stone unturned , no detail untended to no possibility unexpected.
That`s because the most beautiful event is also the smartest events , we do carry and we do take pains and risks along every step of the way to deliver the best and both intial concepting conversation and the design work that realize your vision are so intrinscally linked. and the layer in the flawless execution shows the essence of who we are and the results will be simply spectacular..!
For clients, we meet and exceed their highest expectations -bringing their dreams into execution and it make memorable in your lifetime and worthier.
we are kingsworth events , and the best events we have done is going to be yours ....!

</span>

</Paper>
    </div>
    </div>

  );
}