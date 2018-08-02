import {FETCH_POST, NEW_POST} from './types';

// export function fetchPosts(){
//     return function (dispatch) {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(res => res.json())
//             .then(data => dispatch({
//                     type: FETCH_POST,
//                     payload: posts
//                 }
//             ));
//     }
// }

// in ES6 syntax:
export const  fetchPosts = () => (dispatch) => {
        console.log("fetching...");
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => dispatch({
                    type: FETCH_POST,
                    payload: posts
                }
            ));
};


