
import { InputBase,Box,styled } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
const ComponentSearch = styled(Box)`
    background: #ffffff;
    flex:1;
    margin-left: 2vw;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;  /* 👈 key line */
`;




const InputSearchBase=styled(InputBase)`
    margin-left:10px;
    font-size:14px;
    color:grey;
    flex:1;

`;

const SearchIconComp=styled(SearchIcon)`
    color:blue;
    
`;





const Search =()=>{
    return (
        <ComponentSearch >

            <InputSearchBase placeholder="Search......"/>
        <Box>
            <SearchIconComp/>
        </Box>
        </ComponentSearch>
    )

}

export default Search