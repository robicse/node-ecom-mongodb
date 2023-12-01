const dbConnect = require("./mongodb");

// dbConnect().then((resp) => {
//   resp
//     .find({name:'m 40'})
//     .toArray()
//     .then((data) => {
//       console.warn(data);
//     });
// });

const main = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.warn(data);
};

main();
