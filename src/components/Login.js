import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import NewHeader from "./blog/NewHeader";

const sections = [
    { title: 'Home', url: '/' }
];

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', 
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: null,
            password: null,
            values: []
        };
    }

    // componentDidMount(){
    //     // axios.get(`http://localhost:8080/kullanicilar`).then((result) => {
    //
    //     //       console.log(result);
    //     //       let newValues = {values: result.data};
    //     //       this.setState(newValues);
    //
    //     //   });
    // }
    // changePage(){
    //     var myLink ="/enter";
    //     window.location.pathname=myLink;
    // }
    //
    // onFormSubmit = event => {
    //     // event.preventDefault();
    //     // let ValueComponentsMap = this.state.values.map((ValueInfo, ValueIndex) => {
    //     //     if(ValueInfo.userName==this.state.userName && ValueInfo.password==this.state.password)
    //     //     {
    //     //         this.changePage();
    //     //     }
    //
    //
    //     // });
    // };

    render() {
        const { classes } = this.props;
        return (
            <Container component="main" maxWidth="xs">
                <NewHeader title="RevieWall" sections={sections} />
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Log in
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={event => this.onFormSubmit(event)}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Username or Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={this.state.userName}
                            onChange={e => this.setState({userName: e.target.value})}
                            
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={this.state.password}
                            onChange={e=>this.setState({password:e.target.value})}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Log in
                         </Button>
                        <Grid container>

                        </Grid>
                    </form>
                </div>
            </Container>
        );
    }
}

export default withStyles(styles)(Login);