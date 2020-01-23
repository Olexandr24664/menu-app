import React, { useState, useCallback, Suspense, lazy } from "react";
import { Card, Label, Image, Rating, Button, Icon } from "semantic-ui-react";
import { ProductI } from "../interfaces/ProductI";
import { useHistory } from "react-router-dom";
const ModalQuantityAdd = lazy(() => import("./ModalQuantityAdd"));

type PropsI = {
  product: ProductI;
};

const ProductListItem: React.FC<PropsI> = ({ product }) => {
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const goToProduct = useCallback(
    () => history.push(`/product/${product.id}`),
    [history, product.id]
  );

  return (
    <React.Fragment>
      <Card fluid>
        <Image
          wrapped
          ui={false}
          style={{ cursor: "pointer" }}
          onClick={goToProduct}
        >
          {product.price_discount > 0 ? (
            <Label as="span" color="red" ribbon>
              Discount
            </Label>
          ) : null}
          <img src={product.photo} alt={product.name} />
        </Image>
        <Card.Content>
          <Card.Header onClick={goToProduct} style={{ cursor: "pointer" }}>
            {product.name}
          </Card.Header>

          <Card.Meta>
            <Rating rating={product.rating} maxRating="5" disabled />
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <Label as="span" color="teal">
            {product.price_discount > 0 ? (
              <React.Fragment>
                <s>{product.price}$</s> - <b>{product.price_discount}$</b>
              </React.Fragment>
            ) : (
              <span>{product.price}$</span>
            )}
          </Label>
          <Button
            compact
            animated="vertical"
            floated="right"
            color="green"
            onClick={openModal}
          >
            <Button.Content hidden>Add</Button.Content>
            <Button.Content visible>
              <Icon name="shop" fitted />
            </Button.Content>
          </Button>
        </Card.Content>
      </Card>
      <Suspense fallback="Loading...">
        <ModalQuantityAdd
          open={modalOpen}
          product={product}
          onClose={closeModal}
        />
      </Suspense>
    </React.Fragment>
  );
};

export default ProductListItem;
