//goal is to create a state containing countries array
//make an action that allows to add a country to array
//make an action which allows us to delete a particular country from the array

import {countries} from "./countries"

const state ={
    countries: []
}

const reducer = function(prevState = state, action) {
    return {
        countries: countries(prevState.countries, action)
      }
}

export default reducer;
