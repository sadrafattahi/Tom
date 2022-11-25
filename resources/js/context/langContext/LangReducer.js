import { displayLang } from "@/lang/dictionary";
export default (state, action) => {
    switch (action.type) {
        case 'CHANGE_USER_LANG':
            return {
                lang: state.lang.sign === 'en' ? displayLang.fa : displayLang.en
            }
            break;

        default:
            return state
            break;
    }
}