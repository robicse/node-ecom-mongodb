const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  // insert one row
  //   const result = await db.insertOne({
  //     name: "note 5",
  //     brand: "vivo",
  //     price: 320,
  //     category: "mobile",
  //   });

  // insert multiple row
  const result = await db.insertMany([
    {
      name: "max 1",
      brand: "micromax",
      price: 120,
      category: "mobile",
    },
    {
      name: "max 2",
      brand: "micromax",
      price: 220,
      category: "mobile",
    },
    {
      name: "max 3",
      brand: "micromax",
      price: 320,
      category: "mobile",
    },
  ]);

  if (result.acknowledged) {
    console.log("Data is inserted");
  }
};

insert();
