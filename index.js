import axios from 'axios'
import express from 'express'

const port = 3000
const app = express()

app.use(express.static('public'))

const API_URL = 'https://meme-api.com/gimme'

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(API_URL)
        const data = response.data
        res.render('index.ejs', { postLink: data.postLink, title: data.title, url: data.url, author: data.author, subreddit: data.subreddit })
    } catch (error) {
        console.log(error.response.data);
        res.sendStatus(500)
    }
})




app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})




// https://github.com/D3vd/Meme_Api?tab=readme-ov-file