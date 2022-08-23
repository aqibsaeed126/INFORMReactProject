import { useEffect } from "react";

import BreweriesList from "../components/core/BreweriesList";
import SearchBar from "../components/core/SearchBar";

import { connect } from "react-redux";
import * as actionCreator  from '../store/actions/actions'

import { BREWERIES_GET_URL } from "../utils/consts"; 
import { IBreweries, IBreweriesState } from "../utils/interfaces";

interface StateProp {
  setBreweriesList: (value: IBreweries[] ) => void,
  filterBreweriesList: (value: string ) => void,
  sortBreweriesList: (value: string) => void,
  resetBreweriesList: () => void,
  currentSortBy: string
}

type BreweriesPagePropsType = StateProp;

function BreweriesPage(props: BreweriesPagePropsType) {

  useEffect(()=> {
      fetch(BREWERIES_GET_URL)
      .then((response) => {
        return response.json();
      })
      .then((data)=>{
        props.setBreweriesList(data);
      });
    }, []);

  let filterTextChangeHandler = (filterText: string) => {
    props.filterBreweriesList(filterText);
    props.sortBreweriesList(props.currentSortBy);
  }

  let sortChangeHandler = (sortBy: string) => {
    props.sortBreweriesList(sortBy);
  }

  let clearSearchHandler = () => {
    props.resetBreweriesList();
  }
      
  return (
    <div>
      <SearchBar filterTextChange={filterTextChangeHandler} sortChange={sortChangeHandler} clearSearch={clearSearchHandler} />
      <BreweriesList />
    </div>
  );
}

const mapStateToProps = (state: IBreweriesState) => {
  return {
    currentSortBy: state.currentSortBy,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setBreweriesList: (list: IBreweries[]) => dispatch(actionCreator.setBreweriesList(list)),
    sortBreweriesList: (sortBy: string ) => dispatch(actionCreator.sortBreweriesList(sortBy)),
    filterBreweriesList: (filterText: string) => dispatch(actionCreator.filterBreweriesList(filterText)),
    resetBreweriesList: () => dispatch(actionCreator.resetBreweriesList()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BreweriesPage);