const RoomBasedModel = require("./RoomBasedModel");

exports.CreateMessage = async (req, res) => {
  try {
    const { sender_id, receiver_id, sender_message } = req.body;
    let room_id = sender_id < receiver_id ? `${sender_id}_${receiver_id}` : `${receiver_id}_${sender_id}`; 

    // Store the message as a new row (not in an array)
    const message = await RoomBasedModel.create({
      room_id,
      sender_id,
      receiver_id,
      message: sender_message,
    });

    return res.status(201).json({
      success: true,
      data: message,
      message: "Message added successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
