import { useDispatch } from 'react-redux'
import {bindActionCreators} from 'redux';
import * as StocksActionCreators from '../store/action-creators/stocks'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(StocksActionCreators, dispatch)
}

