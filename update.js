const dbConnect = require("./mongodb");

const updateData = async () => {
  const db = await dbConnect();

  const result = await db.updateOne(
    { name: "note 55" },
    { $set: { name: "note 5", price: 330 } }
  );

  //   if (result.acknowledged) {
  console.log("Data is updated");
  //   }
};

updateData();
