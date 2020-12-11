const sql = require("./db.js");

var date = new Date();
// constructor
const Post = function (Post) {
    this.id = Post.id;
    this.title = Post.title;
    this.contenu = Post.contenu;
    this.idcategorie = Post.idcategorie;
    this.nbre_vue = Post.nbre_vue;
    this.idediteur = Post.idediteur;
    this.image = Post.image;
    this.date = date;
};

Post.create = (newPost, result) => {
    sql.query("INSERT INTO posts SET ?", newPost, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created newPost: ", { id: res.insertId, ...newPost });
        result(null, { id: res.insertId, ...newPost });
    });
};

Post.findById = (PostId, result) => {
    sql.query(`SELECT * FROM posts WHERE id = ${PostId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found Post: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Post with the id
        result({ kind: "not_found" }, null);
    });
};

Post.getAll = result => {
    sql.query("SELECT * FROM posts", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("Post: ", res);
        result(null, res);
    });
};

Post.updateById = (id, PostIN, result) => {
    sql.query(
        "UPDATE posts SET title = ?,contenu = ?,idcategorie = ?,nbre_vue = ?,idediteur = ?,image = ? WHERE id = ?",
        [PostIN.title,
            PostIN.contenu,
            PostIN.idcategorie,
            PostIN.nbre_vue,
            PostIN.idediteur,
            PostIN.image, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found Post with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated Post: ", { id: id, ...PostIN });
            result(null, { id: id, ...PostIN });
        }
    );
};

Post.remove = (id, result) => {
    sql.query("DELETE FROM posts WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Post with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted Post with id: ", id);
        result(null, res);
    });
};

module.exports = Post;