import React, { useState, useCallback } from "react";
import { Input, InputOnChangeData, Button } from "semantic-ui-react";
import { toast } from "react-toastify";
import { addOrderItem } from "../actions";
import { useDispatch } from "react-redux";

type TProps = {
  productId: string;
};

const ProductQuantityInput: React.FC<TProps> = ({ productId }) => {
  const [quantity, setQuantity] = useState("1");
  const [btnLoading, setBtnLoading] = useState(false);
  const dispatch = useDispatch();

  const addProductCb = useCallback((errorMsg?: string) => {
    setBtnLoading(false);
    if (errorMsg) {
      toast.error(errorMsg, { containerId: "global" });
    } else {
      setQuantity("1");
    }
  }, []);

  const addProduct = useCallback(() => {
    dispatch(addOrderItem(productId, parseInt(quantity), addProductCb));
    setBtnLoading(true);
  }, [dispatch, productId, quantity, addProductCb]);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => {
    setQuantity(data.value);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Input
        placeholder="Search..."
        type="number"
        value={quantity}
        onChange={onChange}
        style={{ marginRight: "15px" }}
      />
      <Button
        positive
        icon="checkmark"
        labelPosition="right"
        content="Add"
        onClick={addProduct}
        loading={btnLoading}
      />
    </div>
  );
};

export default ProductQuantityInput;
