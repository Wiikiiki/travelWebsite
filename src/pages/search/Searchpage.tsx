import React, { useEffect } from "react";
import styles from "./SearchPage.module.css";
import { Header, Footer, FilterArea, ProductList } from "../../components";
import { useParams, useLocation } from "react-router-dom";
import { Spin } from "antd";
import { searchProduct } from "../../redux/productSearch/slice";
import { useSelector, useAppDispatch } from "../../redux/hooks";
import { productList1 } from "../home/mockups";

type MatchParas = {
  keywords: string;
};

export const SearchPage: React.FC = () => {
  const { keywords } = useParams<MatchParas>();
  const loading = useSelector((state) => state.productSearch.loading);
  const error = useSelector((state) => state.productSearch.error);
  const pagination = useSelector((state) => state.productSearch.pagination);
  const ProductList = useSelector((state) => state.productSearch.data);

  const dispatch = useAppDispatch();
  const location = useLocation();

  const onPageChange = (nextPage, pageSize) => {
    if (keywords) {
      dispatch(searchProduct({ nextPage: 1, pageSize: 10, keywords }));
    
  }

  useEffect(() => {
    if (keywords) {
      dispatch(searchProduct({ nextPage: 1, pageSize: 10, keywords }));
    }
  }, [location]);

  return (
    <>
      <Header />
      <div className={styles["page-content"]}>
        {/* 搜索过滤器 */}
        <div className={styles["product-list-container"]}>
          <FilterArea />
        </div>
        {/* 搜索结果列表 */}
        <div className={styles["product-list-container"]}>
          <ProductList data={productList} paging={pagination} 
          onPageChange={onPageChange}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};
