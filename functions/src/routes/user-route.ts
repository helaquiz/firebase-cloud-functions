import * as express from 'express';
import * as firebaseAdmin from 'firebase-admin';

const router = new express.Router();
router.route('/posts').get((req, res) => {
    getDB('posts').then(posts => {
        res.send({ posts: convertToArray(posts) });
    });
});
router.route('/posts/:id').get((req, res) => {
    getDB(`posts/${req.params.id}`).then(post => {
        res.send({ post });
    });
});
router.route('/posts').post((req, res) => {
    firebaseAdmin.database().ref('/posts').push(req.body);
    res.send(200);
});
router.route('/posts/:id').delete((req, res) => {
    delDB(`posts/${req.params.id}`).then(() => res.send(200));
});
router.route('/posts/:id').put((req, res) => {
    updateDB(`posts/${req.params.id}`, req.body).then(() => res.send(200));
});
export default router;