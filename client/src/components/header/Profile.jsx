import { Box, Menu, MenuItem, Typography, styled } from "@mui/material";
import { AppContext } from "../../context/AppContext";
import { useContext, useState } from "react";
import Power from '@mui/icons-material/PowerSettingsNew';

const Component=styled(Menu)`
    margin-top:5px;
`;
const Profile = () => {

    const { accountCont } = useContext(AppContext);

    const [open, setOpen] = useState(null);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

    return (
        <>
            <Box onClick={handleClick}>
                <Typography style={{ marginTop: 2 }}>
                    {accountCont}
                </Typography>
                 </Box>

                <Component
                    anchorEl={open}
                    open={Boolean(open)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                    <Power color="primary" fontSize="small" />
                        <Typography>logOut</Typography>
                    </MenuItem>
                </Component>
           
        </>
    );
};

export default Profile;