import { CUSTOMER, ORDERS, ORDER_ITEM, PAYMENT, ITEM } from "../models";

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await CUSTOMER.findOne({
      where: {
        username: username,
        password: password,
      },
    });
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const payment = async (req, res) => {
  const { info_payment, listCart, total } = req.body;
  try {
    const newOrder = await ORDERS.create({
      CUSTOMER_ID: info_payment.CUSTOMER_ID,
      TIME: new Date(),
      TOTAL: total,
      STATUS: "DONE",
    });
    const order_item = [];
    listCart.forEach(async (element) => {
      var item = await ORDER_ITEM.create({
        ORDER_ID: newOrder.ID,
        ITEM_ID: element.id,
        QUANTITY: element.count,
      });
      order_item.push(item);
    });
    const payment = await PAYMENT.create({
      ID: newOrder.ID,
      METHOD: "CARD",
      TIME: "",
    });
  } catch (error) {}
};
const check = async (req, res) => {
  try {
    const list = await ORDERS.findOne({
      where: {
        id: 1,
      },
      include: [
        {
          model: ORDER_ITEM,
          include: [
            {
              model: ITEM,
            },
          ],
        },
        {
          model: PAYMENT,
        },
        {
          model: CUSTOMER,
        },
      ],
    });
  } catch (error) {}
};
export { payment, login, check };
