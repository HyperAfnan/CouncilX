const express = require("express")
const cors = require("cors")
const bp = require("body-parser")
require("dotenv").config()

const app = express();
app.use(cors())
app.use(bp.json())

const key2 = process.env.DEEPSEEK_KEY2

const PORT = 4000

app.get('/', (req, res) => {
   res.send("Server is running")
})

app.post('/chat', async (req, res) => {
   try {
      const { message } = req.body;
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
         method: 'POST',
         headers: {
            Authorization: `Bearer ${key2}`,
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            model: 'deepseek/deepseek-chat:free',
            messages: [
               { role: 'system', content: "you are a reliable indian law adviser, your name is counselX and made by team veteran" },
               { role: 'user', content: message }
            ]
         })
      });
      const data = await response.json();
      res.json({ reply: data.choices?.[0]?.message?.content });
   } catch (err) {
      console.error(`Error: ${err}`);
      res.status(500).json({ error: 'An error occurred while processing your request' });
   }
})

app.listen(PORT, () => console.log(`listening to port ${PORT}`))
