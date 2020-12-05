const sql = require("./db.js");

//constructor
const Editor = function (Editor) {
    this.id = Editor.id;
    this.firstname = Editor.firstname;
    this.lastname = Editor.lastname;
    this.email = Editor.email;
};
//create editor
Editor.create = (newEditor, result) => {
    sql.query("INSERT INTO editeurs SET ?", newEditor, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created newEditor: ", { id: res.insertId, ...newEditor });
        result(null, { id: res.insertId, ...newEditor });
    });
};
//Find By id editor
Editor.findById = (EditorId, result) => {
    sql.query(`SELECT * FROM editeurs WHERE id = ${EditorId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found Editor: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Editor with the id
        result({ kind: "not_found" }, null);
    });
};

Editor.getAll = result => {
    sql.query("SELECT * FROM editeurs", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Editor: ", res);
        result(null, res);
    });
};

Editor.updateById = (id, EditorIN, result) => {
    sql.query(
        "UPDATE editeurs SET firstname = ?, lastname = ?, email = ? WHERE id = ?",
        [EditorIN.firstname, EditorIN.lastname, EditorIN.email, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found Editor with the id
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated Editor: ", { id: id, ...EditorIN });
            result(null, { id: id, ...EditorIN });
        }
    );
};

Editor.remove = (id, result) => {
    sql.query("DELETE FROM editeurs WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found Editor with the id
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted editeurs with id: ", id);
        result(null, res);
    });
};

module.exports = Editor;