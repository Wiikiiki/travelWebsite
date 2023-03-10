import { ThunkAction } from "redux-thunk";
import { RootState } from "../stroe";
import axios from "axios";

export const FETCH_RECOMMEND_PRODUCTS_START = "FETCH_RECOMMEND_PRODUCTS_START"; // 获取开始
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS = // 获取成功
  "FETCH_RECOMMEND_PRODUCTS_SUCCESS";
export const FETCH_RECOMMEND_PRODUCTS_FAIL = "FETCH_RECOMMEND_PRODUCTS_FAIL"; // 获取失败

interface FetchRecommendProductStartAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_START;
}

interface FetchRecommendProductSuccessAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS;
  payload: any;
}

interface FetchRecommendProductFailAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_FAIL;
  payload: any;
}

export type RecommendProductAction =
  | FetchRecommendProductStartAction
  | FetchRecommendProductSuccessAction
  | FetchRecommendProductFailAction;

export const fetchRecommendProductStartActionCreator =
  (): FetchRecommendProductStartAction => {
    return {
      type: FETCH_RECOMMEND_PRODUCTS_START,
    };
  };

export const fetchRecommendProductSuccessActionCreator = (
  data
): FetchRecommendProductSuccessAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    payload: data,
  };
};

export const fetchRecommendProductFailActionCreator = (
  error
): FetchRecommendProductFailAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_FAIL,
    payload: error,
  };
};

export const giveMeDataActionCreator =
  (): ThunkAction<void, RootState, undefined, RecommendProductAction> =>
  async (dispatch, getState) => {
    dispatch(fetchRecommendProductStartActionCreator());
    try {
      const { data } = await axios.get(
        "http://123.56.149.216:8080/api/productCollections"
      );
      dispatch(fetchRecommendProductSuccessActionCreator(data));
    } catch (error) {
      dispatch(
        fetchRecommendProductFailActionCreator(
          error instanceof Error ? error.message : "error"
        )
      );
    }
  };
