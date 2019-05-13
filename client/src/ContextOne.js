import React from "react";

let ContextOne = React.createContext();

let initialState= {
	user:null
}

let reducer = (state,action) => {

	switch(action.type){
		case "setuser":
			console.log(state.user)
			return {...state, user:action.payload}
	}

}


function ContextOneProvider(props){
	let [state,dispatch] = React.useReducer(reducer,initialState);
	let value = {state,dispatch};

	return (
		<ContextOne.Provider value={value}>{props.children}</ContextOne.Provider>
		)
}


let ContextOneConsumer = ContextOne.Consumer;

export {ContextOne,ContextOneProvider,ContextOneConsumer};