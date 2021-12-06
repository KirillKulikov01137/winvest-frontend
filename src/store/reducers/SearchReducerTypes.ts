export interface SearchState {
    search: string
}

export enum SearchActionTypes {
    SET_SEARCH = 'SET_SEARCH'
}

interface SET_SEARCH_ACTION {
    type: SearchActionTypes.SET_SEARCH
    payload: string
}

export type SearchAction = SET_SEARCH_ACTION
