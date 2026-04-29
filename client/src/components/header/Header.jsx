import { AppBar, Toolbar,Box, styled ,Typography} from '@mui/material';
import { yellow } from '@mui/material/colors';
import Search from './Seach';
import CustomButton from './CustomButton';
const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height:55px
`;

const Component =styled(Box)`
    margin-left: 12%;
    line-height:0;
`;



const SubHeading = styled(Typography)`
font-size:10px;
font-style: italic
`;



const subImage=styled('img')({
    width:15
});

const Header = () => {

    const logoURL='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png'
    const subURL='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <div>
            <StyledHeader position="static">
                <Toolbar style={{minHeight:'55px', display: 'flex', alignItems: 'center', gap: '20px'}}>
                    <Component>
                        <img src={logoURL} alt="logo" style={{ width:75 }} />
                        <Box style={{display:'flex'}}>
                            <SubHeading >
                                Explore&nbsp;
                                <Box component="span" style={{color:'#c3ff00'}}>

                                Plus&nbsp;
                            <img src={subURL} alt="" style={{width:10}} />
                            
                            
                                </Box>
                            </SubHeading>
                        </Box>
                    </Component>


                    <Search />

                    <Box>

                    <CustomButton/>
                    </Box>

                    
                </Toolbar>
            </StyledHeader>
        </div>
    );
};

export default Header;