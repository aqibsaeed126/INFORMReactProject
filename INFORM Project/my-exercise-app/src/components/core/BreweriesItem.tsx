import { IBreweries } from '../../utils/interfaces';

import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import logo from '../../images/brewery-glass.jpg';
import phone from '../../images/phone.jpg';

type BreweriesItemPropsType = {
  itemData: IBreweries
} 

function BreweriesItem(props: BreweriesItemPropsType) {
  let item: IBreweries = props.itemData;
  return (
    <React.Fragment>
      <Stack direction="row" justifyContent="space-around" alignItems="center"> 
        <Box sx={{ width: 380, height: 80, padding: 2 }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={logo} />
            </ListItemAvatar>
            <ListItemText
              primary={item.name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'block' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {item.brewery_type}
                  </Typography>
                  {item.city + ', ' + item.state}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </Box>
        {item.phone === null && <Avatar alt="" src="" sx={{ width: 24, height: 24, visibility: "hidden" }}/> }
        {item.phone !== null && <Avatar alt="Remy Sharp" src={phone} sx={{ width: 24, height: 24 }}/> }
      </Stack> 
    </React.Fragment>
  )
}

export default BreweriesItem