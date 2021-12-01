import * as stockActionCreators from './stock'
import * as stocksActionCreators from './stocks'
import * as userActionCreators from './user'
import * as loginActionCreators from './login'


export default {
    ...stockActionCreators,
    ...stocksActionCreators,
    ...userActionCreators,
    ...loginActionCreators
}
