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
              (err, user) => {
            if (err || !user) {
                res.status(500).send(err.message);
            } else {
                res.json(user);
            }
        });
    }
    delComment(req, res) {
        model.findOneAndUpdate({
              _id: req.body.user,
            }, {
              $pull: {
                favourites: {beerId: req.body.beer
                }}},
                (err, user) => {
              if (err || !user) {
                  res.status(500).send(err.message);
              } else {
                  res.json(user);
              }
          });
      }


}
