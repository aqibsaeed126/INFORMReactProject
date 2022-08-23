import { useEffect, useMemo, useRef, useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import {debounce} from 'lodash';

type SearchBarPropsType = {
  sortChange: (value: string ) => void,
  filterTextChange: (value: string ) => void,
  clearSearch: () => void,
}

function SearchBar(props: SearchBarPropsType) {
  const [sortBy, setSortBy] = useState('name');
  const [nameSearch, setNameSearch] = useState('');

  useEffect(() => {
    return () => {
      debounceNameChangeHandler.cancel();
    };
  }, []);
  
  let sortRef = useRef<HTMLSelectElement>(null);

  let onChangeSortHandler = (e: any) => {
    let value = (e.target && e.target.value) || (e.currentTarget && e.currentTarget.value);
    setSortBy(value);
    props.sortChange(value);
  }

  let onChangeNameHandler = (value: string) => {
    if (value) value = value.toLocaleLowerCase(); 
    props.filterTextChange(value);
  }

  let debounceNameChangeHandler = useMemo(() => {
    return debounce(onChangeNameHandler, 500);
  }, []);

  let searchHandler = (e: any) => {
    let value = e.target.value;
    setNameSearch(value);
    debounceNameChangeHandler(value);
  }

  let onSearchReset = () => {

    setNameSearch('');
    setSortBy('name');
    props.clearSearch();
  }

  return (
    
    <div>
        
        <Box sx={{ width: 500, height: 55, border: '1px solid gainsboro', padding: 2 }}>
          <Stack spacing={2} direction="row">
            <TextField 
              label="Search"
              variant="outlined"
              value={nameSearch}
              onChange={searchHandler}
            />
            <Select
              labelId="demo-simple-select-label"
              id="sortBy"
              ref={sortRef}
              label="SortBy"
              value={sortBy}
              onChange={onChangeSortHandler}
            >
              <MenuItem value='name'>Name</MenuItem>
              <MenuItem value='brewery_type'>Type</MenuItem>
            </Select>

            <Button onClick={onSearchReset} variant="contained">Search / Reset</Button>
          </Stack>
        </Box>
    </div>
  )
}

export default SearchBar