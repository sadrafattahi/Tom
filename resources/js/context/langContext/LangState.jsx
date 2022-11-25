import LangContext from './LangContext'
import LangReducer from './LangReducer'
import { dictionaryList } from '../../lang/dictionary'
import { displayLang } from '../../lang/dictionary'
import { useReducer } from 'react'


const LangState = ({ children }) => {
    const initialState = {
        lang: displayLang.en
    }
    const [state, dispatch] = useReducer(LangReducer, initialState)
    const dictionary = dictionaryList[state.lang.sign]

    const Change_User_Lang = () => {
        dispatch({ type: 'CHANGE_USER_LANG' })
    }

    return (
        <LangContext.Provider
            value={{
                userLanguage: state,
                dictionary: dictionary,
                Change_User_Lang
            }}>
            {children}
        </LangContext.Provider>
    )
}

export default LangState