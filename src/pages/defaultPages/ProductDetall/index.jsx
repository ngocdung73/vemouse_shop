import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Fa from "react-icons/fa";

import { getProductDetailAction, getCategoryListAction } from '../../../redux/actions'

const ProductDetailPage = ({ match }) => {
  const id = match.params?.id;

  const { productDetail } = useSelector(
    (state) => state.productReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) dispatch(getProductDetailAction({ id }))
  }, [id])

  const [quantily, setQuantily] = useState(1)
  console.log("quantily", quantily)

  const changeQuantily = (e)=>{
    const fieldValue = parseInt(e.target.value || 1);
      setQuantily(
        fieldValue
      )
  }

  const { categoryList } = useSelector((state) => state.categoryReducer);

  useEffect(() => {
    if (id) dispatch(getProductDetailAction({ id }));
    dispatch(getCategoryListAction());
  }, [id]);

  const renderCategoryOptions = useMemo(() => {
    return categoryList.data?.map((category) => {
      if(category.id === productDetail.data.categoryId){
        return (
          <span key={category.id} value={category.id}>
            {category.name}
          </span>
        );
      }
    });
  }, [categoryList.data]);

  return (
    <div>
      <h4>Product Detail Page</h4>
      <div className="product-main">
        <div className="product-detail-left">
          <div className="large-image"><img src={productDetail.data.image} alt={productDetail.data.name} /></div>
          <div className="thumb-image"></div>
        </div>

        <div className="product-detail-right">
          <div className="product-name">{productDetail.data.name}</div>
          <div className="product-price">{productDetail.data.price?.toLocaleString()}đ</div>
          <div className="product-description">{productDetail.data.description}</div>
          <div className="product-quantily">
            <label htmlFor="">Số lượng</label>
            <div className="input-number">
              <input type="text" name="quantily" onChange={(e) => changeQuantily(e)} value={quantily} />
              <div className="btn-num">
                <button>
                  <Fa.FaPlus
                    style={{ fontSize: 14, fontWeight: 900, color: "#252525", cursor: "pointer" }}
                    onClick={() => setQuantily(quantily + 1)}
                  />
                </button><br />
                <button>
                  <Fa.FaMinus
                    style={{ fontSize: 14, fontWeight: 900, color: "#252525", cursor: "pointer" }}
                    onClick={() => {
                      if (quantily > 1) {
                        return setQuantily(quantily - 1)
                      }
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="add-cart">
            <button type="submit"><span>Thêm vào giỏ hàng</span></button>
          </div>
          <div className="tagslist">
            <label htmlFor="">Tags: {renderCategoryOptions}</label>
          </div>
        </div>
      </div>

      <div className="product-tab">
        <div className="tab-title"></div>
        <div className="tab-content">{productDetail.data.information?.toLocaleString()}</div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
