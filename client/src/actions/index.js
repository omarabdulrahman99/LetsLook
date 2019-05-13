import axios from 'axios';



export function fetchUser(){

	return async function dispatch(dispatch){
			const res = await axios.get("/api/current_user");
			console.log('haha')
			dispatch({ type: "fetch_user", payload: res.data });
	}

}