import { Box, Button, Typography, styled } from '@mui/material';
import CartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../../login/LoginDialog';
import { useState , useContext} from 'react';

import AppProvider, { AppContext } from '../../context/AppContext';
import Profile from './Profile';


const LoginCont = styled(Box)`
    display: flex;
    align-items: center;
    margin-left: auto;
    gap: 40px;   
`;


const CartContainer = styled(Box)`
    display: flex;
    align-items: center;
    gap: 5px;
`;


const LoginButton = styled(Button)`
margin-left:auto;
    color: #2874f0;
    text-transform: none;
    background: white;
    padding: 5px 40px;
    border-radius: 5px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;

    &:hover {
        background: white;
    }
`;

const CustomButton = () => {
    const [open,setOpen]=useState(false);

    
    const openDialog=()=>{
        setOpen(true);
    }


    const {accountCont}=useContext(AppContext);


    return (
        <LoginCont>
            {
                accountCont?<Profile accountCont={accountCont} />:
            <LoginButton variant="contained" onClick={()=>{openDialog()}}>Login</LoginButton>
            }

            <Typography>Become a seller</Typography>
            <Typography>More</Typography>

            <CartContainer>
                <CartIcon />
                <Typography>Cart</Typography>
            </CartContainer>
            <LoginDialog open={open} setOpen={setOpen}/>
        </LoginCont>
    );
};

export default CustomButton;