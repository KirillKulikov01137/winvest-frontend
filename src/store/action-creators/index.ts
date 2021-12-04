import * as stockActionCreators from './stock'
import * as stocksActionCreators from './stocks'
import * as userActionCreators from './user'
import * as loginActionCreators from './login'
import * as portfolioActionCreators from './portfolio'


export default {
    ...stockActionCreators,
    ...stocksActionCreators,
    ...userActionCreators,
    ...loginActionCreators,
    ...portfolioActionCreators
}
