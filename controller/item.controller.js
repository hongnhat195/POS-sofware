import { ITEM, TYPE } from "../models";
const getListItem = async (req, res) => {
  try {
    const list = await ITEM.findAll({
      include: [
        {
          model: TYPE,
        },
      ],
    });
    // const list = await TYPE.findAll({});
    res.status(200).send(list);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export { getListItem };
