import * as stockActionCreators from './stock'
import * as stocksActionCreators from './stocks'


export default {
    ...stockActionCreators,
    ...stocksActionCreators
}
