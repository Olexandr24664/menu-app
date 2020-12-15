import React, { useState, useCallback } from "react";
import {
  Modal,
  Button,
  Input,
  InputOnChangeData,
  Label
} from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { ProductI } from "../interfaces";
import { addOrderItem } from "../actions/orderActions";

type TProp = {
  product: ProductI;
  open: boolean;
  onClose: any;
};

const ModalQuantityAdd: React.FC<TProp> = React.memo(function ModalQuantityAdd({
  product,
  open,
  onClose
}) {
  const [quantity, setQuantity] = useState("1");
  const [btnLoading, setBtnLoading] = useState(false);

  const dispatch = useDispatch();

  const addProductCb = useCallback(
    (errorMsg?: string) => {
      setBtnLoading(false);
      if (errorMsg) {
        toast.error(errorMsg, { containerId: "modalQuantityAdd" });
      } else {
        toast.success(
          `Danie ${product.name} było dodane do zamówienia, ilość ${quantity}`,
          { containerId: "modalQuantityAdd" }
        );
        onClose();
      }
    },
    [onClose, product.name, quantity]
  );

  const addProduct = useCallback(() => {
    dispatch(addOrderItem(product.id, parseInt(quantity), addProductCb));
    setBtnLoading(true);
  }, [dispatch, product.id, quantity, addProductCb]);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => {
    setQuantity(data.value);
  };

  return (
    <Modal size="tiny" open={open} onClose={onClose}>
      <ToastContainer
        enableMultiContainer
        autoClose={2000}
        containerId={"modalQuantityAdd"}
      />
      <Modal.Header>{product.name}</Modal.Header>
      <Modal.Content>
        <p>Amount</p>
        <Input
          style={{ width: "100%" }}
          placeholder="Search..."
          type="number"
          value={quantity}
          onChange={onChange}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button
          positive
          icon="checkmark"
          labelPosition="right"
          content="Add"
          onClick={addProduct}
          loading={btnLoading}
        />
      </Modal.Actions>
    </Modal>
  );
});

export default ModalQuantityAdd;
