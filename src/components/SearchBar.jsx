import styled from 'styled-components';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';

const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`
const InputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid lightgray;
    padding: 5px;
`
const SearchIconWrapper = styled.div``
const SearchResult = styled.div`
    position: absolute;
    z-index: 10;
    top: 45px;
    margin-top: 5px;
    /* height: 200px; */
    max-height: 200px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`
const SearchResultItem = styled.p`
    width: 95%;
    display: flex;
    align-items: center;
    color: black;
    padding: 20px 10px;
    &:hover {
        background-color: #f0ecec;
    }
    margin: 0;
`
const InputField = styled.input`
    height: 20px;
    border: none;
    width: 300px;
    &:focus {
        outline: none;
    }
`
function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    setSearchQuery(query.toLowerCase());
    
    try {
        setIsLoading(true);
        const {data} =  await axios.get(`https://fakestoreapi.com/products`);
        const results = data.filter(item => item.title.toLowerCase().includes(searchQuery) 
                                            || item.description.toLowerCase().includes(searchQuery))
        setIsLoading(false);
        if(query === '') {
            setSearchResults([]);
        } else {
            setSearchResults(results);
        }
        
    } catch(error) {
        console.log(error);
    }
  }
  return (
    <SearchContainer>
        <InputWrapper>
            <InputField placeholder="Search" onChange={(e) => handleSearch(e.target.value)}/>
            <SearchIconWrapper>
                <SearchOutlinedIcon />
            </SearchIconWrapper>
            
        </InputWrapper>
        <SearchResult>
            {isLoading ? <CircularProgress /> : 
            searchResults.length !== 0 && searchResults.map((result => (
                <Link to={`/products/${result.id}`} key={result.id} target="_blank"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <SearchResultItem>
                        {result.title}
                    </SearchResultItem> 
                </Link>
            
            )))}
        </SearchResult>
    </SearchContainer>
  )
}

export default SearchBar