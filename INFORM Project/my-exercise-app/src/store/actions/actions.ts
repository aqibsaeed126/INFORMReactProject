import { IAction, IBreweries } from "../../utils/interfaces"

export const setBreweriesList = (val: IBreweries[]): IAction => {
    return {
        type: 'SET_BREWERIES_LIST',
        value: val
    }
}

export const resetBreweriesList = (): IAction => {
    return {
        type: 'RESET_BREWERIES_LIST',
        value: []
    }
}

export const sortBreweriesList = (val: string): IAction => {
    return {
        type: 'SORT_BREWERIES_LIST',
        value: val
    }
}

export const filterBreweriesList = (val: string): IAction => {
    return {
        type: 'FILTER_BREWERIES_LIST',
        value: val
    }
}