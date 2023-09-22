const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors'); 

const app = express();
const port = 5000;

app.use(cors());

app.use(express.json());

app.get('/api/jobs', async (req, res) => {
  try {
    const { title } = req.query;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://apna.co/jobs?search=true&text=Software%20Development%20Engineer&entity_id=10053369&entity_type=${title}`);

    const jobListings = await page.evaluate(() => {
      const listings = Array.from(document.querySelectorAll('.jobsearch-SerpJobCard'));
      return listings.map((listing) => {
        const title = listing.querySelector('.title').textContent.trim();
        const company = listing.querySelector('.company').textContent.trim();
        const link = listing.querySelector('.title a').href;
        return { title, company, link };
      });
    });

    await browser.close();

    res.json(jobListings);
  } catch (error) {
    console.error('Error scraping job listings', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
