import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ShoppingCartState {
  loading: boolean;
  error: string | null;
  items: any[];
}

const initialState: ShoppingCartState = {
  loading: true,
  error: null,
  items: [],
};

// 获取购物车信息
export const getShoppingCart = createAsyncThunk(
  "shoppingCart/getShoppingCart",
  async (jwt: string, thunkAPI) => {
    const { data } = await axios.get(
      `http://123.56.149.216:8080/api/shoppingCart`,
      {
        headers: {
          Authorization: `bearer ${jwt}`,
        },
      }
    );
    return data.shoppingCartItems;
  }
);

// 添加商品
export const addShoppingCartItem = createAsyncThunk(
  "shoppingCart/addShoppingCartItem",
  async (parameters: { jwt: string; touristRouteID: string }, thunkAPI) => {
    const { data } = await axios.post(
      `http://123.56.149.216:8080/api/shoppingCart/items`,
      {
        touristRouteID: parameters.touristRouteID,
      },
      {
        headers: {
          Authorization: `bearer ${parameters.jwt}`,
        },
      }
    );
    return data.shoppingCartItems;
  }
);

// 删除商品
// 怎么写 不知道 不确定 再看看
export const deleteShoppingCartItem = createAsyncThunk(
  "shoppingCart/deleteShoppingCartItem",
  async (parameters: { jwt: string; shoppingCartItemID: string }, thunkAPI) => {
    const { data } = await axios.delete(
      `http://123.56.149.216:8080/api/shoppingCart/items/{shoppingCartItemID}`,
      {
        headers: {
          Authorization: `bearer ${parameters.jwt}`,
        },
      }
    );
    return data.shoppingCartItems;
  }
);

// 清空购物车
export const clearShoppingCart = createAsyncThunk(
  "shoppingCart/clearShoppingCart",
  async (parameters: { jwt: string; itemIds: number[] }, thunkAPI) => {
    return await axios.delete(
      `http://123.56.149.216:8080/api/shoppingCart/items/(${parameters.itemIds.join(
        ","
      )})`,
      {
        headers: {
          Authorization: `bearer ${parameters.jwt}`,
        },
      }
    );
  }
);

// 结算
export const checkout = createAsyncThunk(
  "shoppingCart/checkout",
  async (jwt: string, thunkAPI) => {
    const { data } = await axios.post(
      `http://123.56.149.216:8080/api/shoppingCart/checkout`,
      null,
      {
        headers: {
          Authorization: `bearer ${jwt}`,
        },
      }
    );
    return data;
  }
);

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {},

  extraReducers: {
    // 获取购物车
    [getShoppingCart.pending.type]: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    [getShoppingCart.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.items = action.payload;
    },
    [getShoppingCart.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },

    // 添加商品
    [addShoppingCartItem.pending.type]: (state) => {
      state.loading = true;
    },
    [addShoppingCartItem.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addShoppingCartItem.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },

    // 删除商品
    // 啥啊！怎么写！！！
    [deleteShoppingCartItem.pending.type]: (state) => {
      state.loading = true;
    },
    [deleteShoppingCartItem.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.items = action.payload;
    },
    [deleteShoppingCartItem.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },

    // 清空购物车
    [clearShoppingCart.pending.type]: (state) => {
      state.loading = true;
    },
    [clearShoppingCart.fulfilled.type]: (state) => {
      state.loading = false;
      state.error = null;
      state.items = [];
    },
    [clearShoppingCart.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },

    // 结算
    [checkout.pending.type]: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    [checkout.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.items = [];
    },
    [checkout.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
