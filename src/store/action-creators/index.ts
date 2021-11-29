import * as stockActionCreators from './stock'
import * as stocksActionCreators from './stocks'
import * as userActionCreators from './user'


export default {
    ...stockActionCreators,
    ...stocksActionCreators,
    ...userActionCreators
}
