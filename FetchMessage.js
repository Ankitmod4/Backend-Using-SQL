const RoomBasedModel = require("./RoomBasedModel");

exports.FetchMessage = async (req, res) => {
  try {
    const { sender_id, receiver_id } = req.body;

    // Ensure consistent room ID format
    let room_id = sender_id < receiver_id ? `${sender_id}_${receiver_id}` : `${receiver_id}_${sender_id}`;

    // Fetch messages sorted by timestamp
    const messages = await RoomBasedModel.findAll({
      where: { room_id },
      order: [["createdAt", "ASC"]], // Ensures proper chat order
    });

    if (messages.length === 0) {
      return res.status(200).json({
        success: false,
        message: "No messages found",
        data: [],
      });
    }

    return res.status(200).json({
      success: true,
      data: messages,
      message: "Messages fetched successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
