import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//request to server for data
const fetchTableData = async () => {
  const response = await fetch(
    "https://mocki.io/v1/443f00da-ed1c-4508-8e6c-d68f7ef27134"
  );
  const data = response.json();
  return data;
};

// set full data from server
export const getTableData = createAsyncThunk(
  "appReducer/getTableData",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetchTableData();
      dispatch(setTableData(response));
    } catch {
      return rejectWithValue("Auth request error!");
    }
  }
);

export const appReducer = createSlice({
  name: "appReducer",
  initialState: {
    tableData: null,
    pagesCount: 0,
    activeItems: [],
  },
  reducers: {
    //get full data
    setTableData: (state, action) => {
      state.tableData = action.payload.items;
      state.pagesCount = action.payload.items.length / 20;
      state.activeItems = state.tableData.filter((item, index) => {
        if (index > 0 && index <= 20) {
          return true;
        }
      });
    },
    //set showing data from full data
    setActiveItems: (state, action) => {
      let arr = state.tableData.filter((item, index) => {
        if (index > 20 * (action.payload - 1) && index <= action.payload * 20) {
          return true;
        }
      });
      state.activeItems = arr.filter((item) => {
        if (item) {
          return true;
        }
      });
    },
    //reset of table data with sorted data
    setSortingData: (state, action) => {
      state.activeItems = action.payload;
    },
  },
});

export const { setTableData, setActiveItems, setSortingData } =
  appReducer.actions;
export default appReducer.reducer;
