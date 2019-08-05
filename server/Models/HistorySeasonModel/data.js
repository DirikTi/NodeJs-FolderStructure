var models = [
    {
        name: "Team_Id",
        type: "int"
    },
    {
        name: "WinCount",
        type: "int"
    },
    {
        name: "DrawCount",
        type: "int"
    },
    {
        name: "MatchCount",
        type: "int"
    },
    {
        name: "LoseCount",
        type: "int"
    },
    {
        name: "GoalCount",
        type: "int"
    },
    {
        name: "LoseGoalCount",
        type: "int"
    },
    {
        name: "Average",
        type: "int"
    },
    {
        name: "Puan",
        type: "int"
    },
    {
        name: "Season",
        type: "varchar(255)"
    }
]

let tableName = "HistorySeason";

module.exports = {
    models: models,
    tableName: tableName
}