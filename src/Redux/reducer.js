const initialState = {
   inputValue: '',
   loginModal: false,
   loginStatus: !localStorage.loginStatus ? 
   localStorage.setItem('loginStatus', false) :
   localStorage.loginStatus,
   search: [],
   searchSuggestions: [],
   autocomplete: [],
}

export default function reducer(state = initialState, action) {
      switch (action.type) {
      case 'VALUE_CHANGE': {
         return {
            ...state,
            inputValue: action.value
         }
      }

      case 'LOGIN_MODAL': {
         return {
            ...state,
            loginModal: action.value
         }
      }

      case 'LOGIN_STATUS': {
         return {
            ...state,
            loginStatus: action.value
         }
      }

      case 'SEARCH': {
         return {
            ...state,
            search: action.data
         }
      }

      case 'SEARCH_SUGGESTIONS': {
         return {
            ...state,
            searchSuggestions: action.data
         }
      }

      case 'AUTOCOMPLETE': {
         return {
            ...state,
            autocomplete: action.data
         }
      }

      default: return state;
   }
}
