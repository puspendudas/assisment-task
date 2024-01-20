var Ticket = require("../../models/ticket.model");
const { Sequelize } = require("sequelize");
const { generateTickets } = require("../../functions/generateTicket");

const generate_ticket = async (req, res) => {
  const N = parseInt(req.params.n);
  const generatedTickets = generateTickets(N);

  try {
    for (const key in generatedTickets.tickets) {
        const numbers = generatedTickets.tickets[key];
        await Ticket.create({ numbers });
      }
  
      res.json(generatedTickets);
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

module.exports = { generate_ticket };
