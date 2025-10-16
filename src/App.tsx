/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect, useReducer } from "react";
// import axios from "axios";
import "./App.css";
import { AppRoutes } from "./routes/AppRoutes";
// interface IInitialState {
//   loading: boolean;
//   data: any[];
//   error: string;
// }
// const initialState: IInitialState = {
//   loading: true,
//   data: [],
//   error: "",
// };
// type Action =
//   | { type: "FETCH_PENDING" }
//   | { type: "FETCH_SUCCESS"; payload: any }
//   | { type: "FETCH_ERROR"; payload?: any };
// const reducer = (state: IInitialState, action: Action): IInitialState => {
//   switch (action.type) {
//     // loading
//     case "FETCH_PENDING":
//       return {
//         ...initialState,
//         loading: true,
//         data: [],
//         error: "",
//       };
//     // fetch data success
//     case "FETCH_SUCCESS":
//       return {
//         ...initialState,
//         loading: false,
//         data: action.payload,
//         error: "",
//       };
//     // error
//     case "FETCH_ERROR":
//       return {
//         ...initialState,
//         loading: false,
//         data: [],
//         error: JSON.stringify(action.payload) ?? "something error",
//       };
//     default:
//       return state;
//   }
// };
function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  // useEffect(() => {
  //   const authApiGet = async () => {
  //     try {
  //       dispatch({ type: "FETCH_PENDING" });
  //       const res = await axios.get(
  //         "https://jsonplaceholder.typicode.com/posts"
  //       );
  //       // dispatch({ type: "FETCH_SUCCESS", payload: res.data });

  //       console.log("data", res.data);
  //       if (res.status === 200) {
  //         dispatch({ type: "FETCH_SUCCESS", payload: res.data });
  //       } else {
  //         // error not 200 or 500
  //         dispatch({ type: "FETCH_ERROR" });
  //         console.log("error not 200");
  //       }
  //     } catch (error) {
  //       // error 500 -server error
  //       dispatch({ type: "FETCH_ERROR", payload: error });

  //       console.log("error", error);
  //     }
  //   };
  //   authApiGet();
  // }, []);
  return (
    <>
      <main>
        <section>
          <AppRoutes />
        </section>

        {/* <section>
            {state.loading && <p>....Loading</p>}
            {!state.loading && state.error && <p>{state.error}</p>}
            {!state.loading && state.data && (
              <ul>
                {state?.data?.map((item) => {
                  return <li key={item.id}>{item.title}</li>;
                })}
              </ul>
            )}
          </section> */}
      </main>
    </>
  );
}

export default App;
