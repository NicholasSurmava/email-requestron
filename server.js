const server = require("./src");
const PORT = 1234;

server.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
