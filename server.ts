import app from "./kernel/app";
const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`⚡Server is running here 👉 http://localhost:${PORT}`));