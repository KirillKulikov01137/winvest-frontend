import * as stockActionCreators from './stock'
import * as stocksActionCreators from './stocks'
import * as userActionCreators from './user'
import * as loginActionCreators from './login'
import * as portfolioActionCreators from './portfolio'
import * as searchActionCreators from './search'


export default {
    ...stockActionCreators,
    ...stocksActionCreators,
    ...userActionCreators,
    ...loginActionCreators,
    ...portfolioActionCreators,
    ...searchActionCreators
}
