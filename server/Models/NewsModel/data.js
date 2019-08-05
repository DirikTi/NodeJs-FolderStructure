var models = [
    {
        name: "title",
        type: "varchar(255)"
    },
    {
        name: "text",
        type: "varchar(255)"
    },
    {
        name: "Date",
        type: "DateTime"
    },
    {
        name: "urlPhoto",
        type: "varchar(255)"
    }
]

var tableName = "News";

module.exports = {
    models: models,
    tableName: tableName
}