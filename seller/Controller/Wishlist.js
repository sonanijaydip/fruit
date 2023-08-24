const { list } = require("../Module/wishlist");

/* add cart */

module.exports.add_list = async (req, res) => {

 var list_data = await list.find({ "name": req.body.name });

 if (list_data.length == 0) {
  var data = await list.create(req.body);
  res.status(200).json({
   status: "Success",
   data
  })
 }
 else {
  var old_qty = "";
  old_qty = list_data[0].quantity;
  new_qty = parseInt(old_qty) + parseInt(req.body.quantity);

  var list_update = await list.findByIdAndUpdate(list_data[0].id, { "quantity": new_qty}, { new: true })

  res.status(200).json({
   status: "wishlist updated",
   list_update
  })
 }


}

/* update cart */

module.exports.update_list = async (req, res) => {
 try {
  var id = req.params.id;
  await list.findByIdAndUpdate(id, req.body);
  var update_data = await list.findByIdAndUpdate(id);

  res.status(200).json({
   status: "success",
   update_data
  })
 } catch (error) {
  res.status(200).json({
   error
  })
 }
}

/* delete cart */

module.exports.delete_list = async (req, res) => {
 try {
  var id = req.params.id;

  var delete_data = await list.findByIdAndDelete(id);

  res.status(200).json({
   status: "success",
   delete_data
  })
 } catch (error) {
  res.status(200).json({
   error
  })
 }
}

/* view cart */

module.exports.list_product = async (req, res) => {
 try {
  var list_data = await list.find({ "userId": req.params.userId });

  res.status(200).json({
   status: "success",
   list_data
  })
 } catch (error) {
  res.status(200).json({
   error
  })
 }
}

/* view all cart */

module.exports.all_list = async (req, res) => {
 try {
  var data = await list.find();
  res.status(200).json({
   status: "Success",
   data
  })

 } catch (error) {
  res.status(200).json({
   error
  })
 }
}