const sql = require("./db.js");

// constructor
const Category = function (Category) {
    this.id = Category.id;
    this.name = Category.name;
};

Category.create = (newCategory, result) => {
    sql.query("INSERT INTO categories SET ?", newCategory, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created newCategory: ", { id: res.insertId, ...newCategory });
        result(null, { id: res.insertId, ...newCategory });
    });
};

Category.findById = (CategoryId, result) => {
    sql.query(`SELECT * FROM categories WHERE id = ${CategoryId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found Category: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Category with the id
        result({ kind: "not_found" }, null);
    });
};

Category.getAll = result => {
    sql.query("SELECT * FROM categories", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("Categories: ", res);
        result(null, res);
    });
};

Category.updateById = (id, CategoryIN, result) => {
    sql.query(
        "UPDATE categories SET name = ? WHERE id = ?",
        [CategoryIN.name, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found Category with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated Category: ", { id: id, ...CategoryIN });
            result(null, { id: id, ...CategoryIN });
        }
    );
};

Category.remove = (id, result) => {
    sql.query("DELETE FROM categories WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Category with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted Category with id: ", id);
        result(null, res);
    });
};

module.exports = Category;