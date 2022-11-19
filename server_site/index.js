const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const port = process.env.pathname || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();


// middleware
app.use(cors());
app.use(express.json());



// Home 
app.get('/', (req, res) => {
   res.send("Travels server is running")
})



// console.log(process.env.DB_PASSWORD);
// MongoDB 
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.guif9pr.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
   try {
      const packagesCollection = client.db('tour_DB').collection('packages');
      const reviewsCollection = client.db('tour_DB').collection('reviews');


      // Access JsonWebTokenError
      app.post('/jwt', (req, res) => {
         const user = req.body;
         const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
         res.send({ token });
      })


      // Create Packages
      app.post('/packages', async (req, res) => {
         const package = req.body;
         const result = await packagesCollection.insertOne(package);
         res.send(result);
      })


      // Read Packages
      app.get('/packages', async (req, res) => {
         const page = parseInt(req.query.page);
         const size = parseInt(req.query.size);
         const query = {};
         const cursor = packagesCollection.find(query)
         const packages = await cursor.skip(page * size).limit(size).toArray();
         const count = await packagesCollection.estimatedDocumentCount();
         res.send({ count, packages });
      })


      // Find Package 
      app.get('/packages/:id', async (req, res) => {
         const id = req.params.id;
         const query = { _id: ObjectId(id) };
         const cursor = await packagesCollection.findOne(query);
         res.send(cursor);
      })


      // Create Review
      app.post('/reviews', async (req, res) => {
         const review = req.body;
         const result = await reviewsCollection.insertOne(review);
         res.send(result);
      })


      // Read Reviews By Id
      app.post('/reviewsById', async (req, res) => {
         const id = req.body;
         const query = id;
         const option = {
            sort: { date: -1 }
         }
         const cursor = reviewsCollection.find(query, option);
         const reviews = await cursor.toArray();
         res.send(reviews);
      })



      // Read Reviews By Email
      app.post('/reviewsByEmail', async (req, res) => {
         const email = req.body;
         const query = email;
         const option = {
            sort: { date: -1 }
         }
         const cursor = reviewsCollection.find(query, option);
         const reviews = await cursor.toArray();
         res.send(reviews);
      })



      // Delete Review
      app.delete('/reviews/:id', async (req, res) => {
         const id = req.params.id;
         const query = { _id: ObjectId(id) }
         const result = await reviewsCollection.deleteOne(query);
         res.send(result)
      })

      // findOne Review
      app.get('/reviews/:id', async (req, res) => {
         const id = req.params.id;
         const query = { _id: ObjectId(id) };
         const cursor = await reviewsCollection.findOne(query);
         res.send(cursor);
      })

      // Update Review 
      app.put('/reviews/:id', async (req, res) => {
         const id = req.params.id;
         const query = { _id: ObjectId(id) };
         const newReview = req.body;
         const updatedReview = {
            $set: {
               review: newReview.review,
               rating: newReview.rating
            }
         }
         const result = await reviewsCollection.updateOne(query, updatedReview);
         res.send(result);
      })


   }
   finally { }
}
run().catch(er => console.log(er))






app.listen(port, () => {
   console.log("Port is", port);
})

