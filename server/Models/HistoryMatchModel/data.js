var models = [
    {
        name: "TeamOneGoal",
        type: "int"
    },
    {
        name: "TeamTwo_Id",
        type: "int"
    },
    {
        name: "TeamTwoGoal",
        type: "int"
    },
    {
        name: "TeamOne_Id",
        type: "int"
    },
    {
        name: "Month",
        type: "varchar(255)"
    },
    {
        name: "Place",
        type: "varchar(255)"
    },
    {
        name: "Season",
        type: "varchar(255)"
    },
    {
        name: "Time",
        type: "varchar(255)"
    }
]
var tableName = "HistoryMatch";

module.exports = {
    models: models,
    tableName: tableName
}