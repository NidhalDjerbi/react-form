const Contact = require('../models/contact');

exports.save = function (req, res) {

   let contact = new Contact(req.body);

   contact.save()
       .then((contact) => {

           res.send({
               status: 'success'
           });
       })
       .catch(error => {

            res.status(500);
            res.send(error);
       });
}