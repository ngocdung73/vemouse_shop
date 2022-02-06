import React, { useEffect, useMemo, useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Card, Input, Button, InputNumber, Checkbox, Select, Upload } from "antd";
import ImgCrop from 'antd-img-crop';

import { ROUTER } from "../../../constants/router";

import {
  getProductDetailAction,
  createProductAction,
  updateProductAction,
  getCategoryListAction,
} from "../../../redux/actions";

const ModifyProductPage = ( {match} ) => {
  const history = useHistory();
  const { params } = useRouteMatch();
  const id = match.params?.id;

  const [modifyProductForm] = Form.useForm();

  const { productDetail, actionLoading } = useSelector(
    (state) => state.productReducer
  );
  const { categoryList } = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();

  const initialValues = id
    ? {
      name: productDetail.data?.name,
      categoryId: productDetail.data?.categoryId,
      price: productDetail.data?.price,
      image: productDetail.data?.image,
      description: productDetail.data?.description,
      information: productDetail.data?.information,
      isNew: productDetail.data?.isNew,
    }
    : {
      name: "",
      price: 0,
      isNew: false,
    };

  useEffect(() => {
    if (id) dispatch(getProductDetailAction({ id }));
    dispatch(getCategoryListAction());
  }, [id]);


  useEffect(() => {
    modifyProductForm.resetFields();
  }, [productDetail.data]);

  const renderCategoryOptions = useMemo(() => {
    return categoryList.data?.map((category) => {
      return (
        <Select.Option key={category.id} value={category.id}>
          {category.name}
        </Select.Option>
      );
    });
  }, [categoryList.data]);

  const handleSubmitForm = (values) => {
    if (id) {
      dispatch(
        updateProductAction({
          id,
          data: {
            ...values,
            // image: "https://via.placeholder.com/800x600",  
          },
          callback: {
            goBackList: () => history.push(ROUTER.ADMIN.PRODUCT_LIST),
          },
        })
      );
    } else {
      dispatch(
        createProductAction({
          data: {
            ...values,
            // image: "https://via.placeholder.com/800x600",
          },
          callback: {
            goBackList: () => history.push(ROUTER.ADMIN.PRODUCT_LIST),
          },
        })
      );
    }
  };

  //Upload Image
  const [fileList, setFileList] = useState([]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  return (
    <div>
      <h3>{id ? "Cập nhật sản phẩm" : "Thêm sản phẩm"}</h3>
      <Card style={{ maxWidth: 700, width: "100%" }}>
        <Form
          form={modifyProductForm}
          name={id ? "update-product-form" : "create-product-form"}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          initialValues={initialValues}
          onFinish={(values) => handleSubmitForm(values)}
        >
          <Form.Item
            label="Tên sản phẩm"
            name="name"
            rules={[{ required: true, message: "Bạn chưa nhập tên" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="categoryId"
            label="Nhà sản xuất"
            rules={[{ required: true, message: "Bạn chưa chọn nhà sản xuất" }]}
          >
            <Select placeholder="Nhà sản xuất">
              {renderCategoryOptions}
            </Select>
          </Form.Item>

          <Form.Item
            label="Giá sản phẩm"
            name="price"
            rules={[{ required: true, message: "Bạn chưa nhập giá" }]}
          >
            <InputNumber
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
              style={{ width: "100%" }}
            />
          </Form.Item>
          <Form.Item
            label="Hình ảnh"
            name="image"
            rules={[{ required: true, message: "Bạn chưa thêm link hình ảnh" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mô tả sản phẩm"
            name="description"
            rules={[{ required: true, message: "Bạn chưa thêm thông tin mô tả" }]}
          >
            <Input.TextArea placeholder='Note Details' style={{ padding: 8 }} />
          </Form.Item>

          <Form.Item
            label="Thông tin sản phẩm"
            name="information"
            rules={[{ required: true, message: "Bạn chưa thêm thông tin sản phẩm" }]}
          >
            <Input.TextArea placeholder='Note Details' style={{height: "8.25em", padding: 8 }} />
          </Form.Item>

          {/* <Form.Item
            label="Hình ảnh"
            name="image"
          >
            <ImgCrop rotate>
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
              >
                {fileList.length < 5 && '+ Upload'}
              </Upload>
            </ImgCrop>
          </Form.Item> */}

          <Form.Item
            name="isNew"
            valuePropName="checked"
            wrapperCol={{ offset: 6, span: 18 }}
          >
            <Checkbox>Sản phẩm mới</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{ offset: 6, span: 18 }}
            style={{ marginBottom: 0 }}
          >
            <Button
              type="primary"
              htmlType="submit"
              loading={
                actionLoading.createProduct || actionLoading.updateProduct
              }
            >
              {id ? "Sửa" : "Thêm"}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default ModifyProductPage;
