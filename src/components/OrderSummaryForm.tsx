import React, { useState } from "react";
import {
  Form,
  Input,
  InputOnChangeData,
  Label,
  Grid,
  Divider,
  Segment,
  Header
} from "semantic-ui-react";
import { OrderItemI } from "../interfaces/OrderI";

type TProps = {
  orderItems: OrderItemI[];
  initialData: { [key: string]: any };
};

const OrderSummaryForm: React.FC<TProps> = ({ orderItems, initialData }) => {
  console.log("OrderSummaryForm");
  const [formData, setFormData] = useState(initialData);
  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => {
    const quantity = parseInt(data.value) || 0;
    const price = parseInt(data.price);
    const formDataTotal = parseInt(formData["total"]);
    const currentValue = formData[data.name] * price;
    const total = formDataTotal - currentValue + quantity * price;

    setFormData({ ...formData, [data.name]: quantity, total });
  };

  const renderInput = () => {
    return orderItems.map(item => {
      const price = item.price_discount > 0 ? item.price_discount : item.price;
      const total = parseInt(formData[item.id]) * price;
      return (
        <Form.Field key={item.id}>
          <label>
            {item.name}
            <Label
              content={`${price} $`}
              color="teal"
              tag
              horizontal
              style={{ marginLeft: "20px" }}
            />
          </label>
          <Divider />
          <Grid verticalAlign="middle">
            <Grid.Row columns={3}>
              <Grid.Column>
                <Input
                  name={item.id}
                  value={formData[item.id]}
                  price={price}
                  onChange={onChange}
                />
              </Grid.Column>
              <Grid.Column textAlign="center">
                <Label content={`${total} $`} />
              </Grid.Column>
              <Grid.Column>
                <Form.Button basic icon="remove" color="red" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form.Field>
      );
    });
  };

  if (orderItems.length > 0) {
    return (
      <Form>
        {renderInput()}
        <Segment attached textAlign="center">
          <Header as="h2">
            Total
            <Header.Subheader>{formData["total"]} $</Header.Subheader>
          </Header>
        </Segment>
        <Segment attached size="mini" textAlign="center">
          <Form.Button size="big" color="green" content="Complete" />
        </Segment>
      </Form>
    );
  }

  return null;
};

export default OrderSummaryForm;
