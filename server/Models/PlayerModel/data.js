var models = [
    {
        name: "Name",
        type: "varchar(255)"
    },
    {
        name: "Surname",
        type: "varchar(255)"
    },
    {
        name: "Old",
        type: "int"
    },
    {
        name: "Size",
        type: "varchar(255)"
    },
    {
        name: "Weight",
        type: "varchar(255)"
    },
    {
        name: "Nationality",
        type: "varchar(255)"
    },
    {
        name: "Birthplace",
        type: "varchar(255)"
    },
    {
        name: "Birthdate",
        type: "varchar(255)"
    },
    {
        name: "Team_Id",
        type: "int"
    },
    {
        name: "MatchCount",
        type: "int"
    },
    {
        name: "Position",
        type: "varchar(255)"
    },
    {
        name: "UrlPhoto",
        type: "varchar(255)"
    }
]

var tableName = "Player";

module.exports = {
    models: models,
    tableName: tableName
}