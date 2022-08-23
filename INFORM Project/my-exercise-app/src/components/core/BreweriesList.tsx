import List from '@mui/material/List';

import { connect } from 'react-redux';

import BreweriesItem from './BreweriesItem';

import { IBreweries, IBreweriesState } from '../../utils/interfaces';

interface StateProps {
  data?: IBreweries[]
}

type BreweriesListPropsType = StateProps;

function BreweriesList(props: BreweriesListPropsType) {
  return (
    <div>
      <h4>Found {props?.data?.length} search result</h4>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {
          props?.data?.map((item: IBreweries) => {
             return <BreweriesItem key={item.id} itemData={item}/>
          })
        }
      </List>
    </div>
  )
}

const mapStateToProps = (state: IBreweriesState): StateProps => {
  return {
    data: state.sortAndFilterBreweriesList || [],
  }
}

export default connect(mapStateToProps, null)(BreweriesList);