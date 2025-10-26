import { useEffect, useReducer } from "react";
import { getStoriesApi } from "../../services/apis/storiesApi";
import type { Action, IInitialState } from "../../models/initialState.model";
import { Space, Spin, Table } from "antd";

const initialState: IInitialState = {
  loading: true,
  data: [],
  message: "",
};

const reducer = (state: IInitialState, action: Action): IInitialState => {
  switch (action.type) {
    case "FETCH_PENDING":
      return {
        ...initialState,
        loading: true,
        data: [],
        message: "",
      };
    case "FETCH_SUCCESS":
      return {
        ...initialState,
        loading: false,
        data: action.payload?.data,
        message: action.payload?.message ?? "fetch success",
      };
    case "FETCH_ERROR":
      return {
        ...initialState,
        loading: false,
        data: [],
        message: action.payload?.message ?? "something error",
      };
    default:
      return state;
  }
};
// Table

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Level",
    dataIndex: "level.arabic_name",
    key: "level",
  },
  {
    title: "Arabic Title",
    dataIndex: "arabic_title",
    key: "arabic_title",
  },
  {
    title: "English Title",
    dataIndex: "english_title",
    key: "english_title",
  },

  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <a>Update</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const StoryPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [loading, setLoading] = useState(false);
  // const [dataFetching, setDataFetching] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      // setLoading(true);
      try {
        dispatch({ type: "FETCH_PENDING" });
        const res = await getStoriesApi();
        if (res?.status) {
          console.log("story page", res?.data);
          dispatch({ type: "FETCH_SUCCESS", payload: res });
          // setDataFetching(res?.data);
        } else {
          dispatch({ type: "FETCH_ERROR", payload: res });
          console.log("error not 200");
        }
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: error });
        console.log("error", error);
      }
    };
    dataFetch();
  }, []);
  return (
    <section style={{ height: "100%" }}>
      {state.loading && (
        <div
          className="flex items-center justify-center"
          style={{ height: "100%" }}>
          <Spin size="large" />
        </div>
      )}
      {!state.loading && state.message && <p>{state.message}</p>}
      {!state.loading && state.data && (
        <div>
          <Table
            dataSource={state?.data}
            columns={columns}
          />
          {/* <ul>
              {state?.data?.map((item) => {
                return (
                  <li key={item?.id}>
                    {item?.arabic_title}-{item?.id}-{item?.english_title}
                  </li>
                );
              })}
            </ul> */}
        </div>
      )}
    </section>
  );
};

export default StoryPage;
