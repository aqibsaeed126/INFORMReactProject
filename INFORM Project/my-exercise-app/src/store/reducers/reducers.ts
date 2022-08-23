import { IAction, IBreweries, IBreweriesState } from "../../utils/interfaces";

const initialState: IBreweriesState = {
    breweriesList: [],
    sortAndFilterBreweriesList: [], 
    currentSortBy: 'name'
}

const reducer = (state = initialState, action: IAction): IBreweriesState => {
    const newState = {... state};

    if (action.type === 'SET_BREWERIES_LIST') {
        return {
            ...state,
            breweriesList: action.value,
            sortAndFilterBreweriesList: action.value,
        }
    }

    if (action.type === 'RESET_BREWERIES_LIST') {
        return {
            ...state,
            sortAndFilterBreweriesList: state.breweriesList,
            currentSortBy: 'name'
        }
    }

    else if (action.type === 'FILTER_BREWERIES_LIST') {
        return {
            ...state,
            sortAndFilterBreweriesList: state.breweriesList.filter((item: IBreweries)=> {
                let name: string = item.name.toLocaleLowerCase();
                return name.indexOf(action.value) > -1;
            })
        }
    }

    else if (action.type === 'SORT_BREWERIES_LIST') {
        return {
            ...state,
            sortAndFilterBreweriesList: state.sortAndFilterBreweriesList.slice().sort((a: IBreweries,b: IBreweries)=> {
                let br1 = action.value === 'name' ? a.name : a.brewery_type;
                let br2 = action.value === 'name' ? b.name : b.brewery_type;

                if (br1 < br2) return -1;
                if (br1 > br2) return 1;
                return 0;
            }),
            currentSortBy: action.value,
        }
    }

    return newState;
}

export default reducer;