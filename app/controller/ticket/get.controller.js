var Ticket = require("../../models/ticket.model");
const { Sequelize } = require("sequelize");

const get_ticket = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;

  try {
    const tickets = await Ticket.findAll({
        offset: (page - 1) * pageSize,
        limit: pageSize,
      });
  
      res.json({ tickets });
  
    // res.status(200).json({
    //   success: true,
    //   data: {
    //     id: newUser.id,
    //     name: newUser.name,
    //   },
    //   msg: `${newUser.name} has been successfully created.`,
    // });
  } catch (err) {
    // const errObj = {};
    // err.errors.map((er) => {
    //   errObj[er.path] = er.message;
    // });
    // res.status(422).json({ error: errObj });

    console.error('Error generating and saving tickets:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = { get_ticket };