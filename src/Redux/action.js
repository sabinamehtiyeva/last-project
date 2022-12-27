export const setInputChange = value => {
   return {
      type: "VALUE_CHANGE", value
   }
}

export const setLoginModal = value => {
   return {
      type: "LOGIN_MODAL", value
   }
}

export const setLoginStatus = value => {
   return {
      type: "LOGIN_STATUS", value
   }
}

export const setSearch = (name, limit=50) => {
   return (dispatch) => {
      const getData = async () => {
         const response = fetch(`https://g.tenor.com/v1/search?q=${name}&key=O2F76B8G7S1C&limit=${limit}`)
         const data = (await response).json()
         return data
      }
      getData().then(data => dispatch({type: 'SEARCH', data: data.results}))
      .catch(err => console.log(err))
   }
}

export const setSuggestions = name => {
   return (dispatch) => {
      const getData = async () => {
         const response = fetch(`https://g.tenor.com/v1/search_suggestions?q=${name}&key=O2F76B8G7S1C`)
         const data = (await response).json()
         return data
      }
      getData().then(data => dispatch({type: 'SEARCH_SUGGESTIONS', data: data.results}))
      .catch(err => console.log(err))
   }
}

export const autocomplete = name => {
   return (dispatch) => {
      const getData = async () => {
         const response = fetch(`https://g.tenor.com/v1/autocomplete?q=${name}&key=O2F76B8G7S1C&limit=6`)
         const data = (await response).json()
         return data
      }
      getData().then(data => dispatch({type: 'AUTOCOMPLETE', data: data.results}))
      .catch(err => console.log(err))
   }
}

// en sonda baxarsan

// export const setGifItem = id => {
//    return (dispatch) => {
//       const getData = async () => {
//          const response = fetch(`https://g.tenor.com/v1/gifs?ids=${id}&key=O2F76B8G7S1C`)
//          const data = (await response).json()
//          return data
//       }
//       getData().then(data => dispatch({type: 'GIF_ITEM_CLICK', data: data.results}))
//       .catch(err => console.log(err))
//    }
// }

