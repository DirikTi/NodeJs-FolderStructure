var models = [
    {
        name: "Name",
        type: "varchar(255)"
    },
    {
        name: "TeamCount",
        type: "int"
    }
]

let tableName = "Groups";

module.exports = {
    models: models,
    tableName: tableName
}