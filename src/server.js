const express = require('express');

const main = () => {
    const app = express();
    const PORT = 3001;

    app.use(express.json());

    app.use(userRouter);

    app.listen(PORT, () => console.log("Server conectado"));
};

main();