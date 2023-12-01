const dbConnect = require("./mongodb");

const deleteData = async () => {
  const db = await dbConnect();
  // delete one row
  const result = await db.deleteOne({ name: "max 3" });

  // delete many row
  //   const result = await db.deleteMany({ name: "max 3" });

  if (result.acknowledged) {
    console.log("Data is deleted");
  }
};

deleteData();
