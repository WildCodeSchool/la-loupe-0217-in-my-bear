import jsonwebtoken from 'jsonwebtoken';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import token from '../token.js';

const commentSchema = new mongoose.Schema({

    beerId: {type: mongoose.Schema.Types.ObjectId},
    author: {type: mongoose.Schema.Types.ObjectId},
    title : {
      type: mongoose.Schema.Types.ObjectId,
      index: true
    },
    date : {type: Date},
    body : {type: String}

});


let model = mongoose.model('Comment', commentSchema);

export default class Comment {

  findAll(req, res) {
      model.find({},
        (err, comments) => {
          if (err || !comments) {
              res.sendStatus(403);
          } else {
              res.json(comments);
          }
      });
  }

  addComment(req, res) {
      model.findOneAndUpdate({
            _id: req.params.id
          }, {
            $push: {
              favourites: {
                beerId: req.body.beer
              }}},
              (err, comments) => {
            if (err || !comments) {
                res.status(500).send(err.message);
            } else {
                res.json(comments);
            }
        });
    }
    delComment(req, res) {
        model.findOneAndUpdate({
              _id: req.body.comments,
            }, {
              $pull: {
                favourites: {beerId: req.body.beer
                }}},
                (err, comments) => {
              if (err || !comments) {
                  res.status(500).send(err.message);
              } else {
                  res.json(comments);
              }
          });
      }
}
