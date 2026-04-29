import {Box ,styled, Typography} from '@mui/material';
import {navData} from '../constants/data';


const Component = styled(Box)`
    display:flex;
    
    margin:15px 130px   0 130px;
    justify-content:space-between;
`;

const Container =styled(Box)`
    padding: 12px 8px;
    text-align:center;
`;



const Text = styled(Typography)`
    font-size:14px;
    font-weight:600;
    font-family:inherit;
    
`;




const ImgComp=styled('img')`
    width:64px;
    height:64px;
    object-fit:contain;
`;




const NavBar=()=>{
    return(
        <Component>
            {   
                navData.map(data=>(
                    <Container>
                        <ImgComp src={data.url} alt="nav"  />
                        <Text>{data.text}</Text>
                    </Container>
                ))
            }
        </Component>
    )
}


export default NavBar