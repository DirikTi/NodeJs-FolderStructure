var models = [
    {
        name: "Name",
        type: "varchar(255)"
    },
    {
        name: "Group_Id",
        type: "int"
    },
    {
        name: "CreatedDate",
        type: "varchar(255)"
    },
    {
        name: "President",
        type: "varchar(255)"
    },
    {
        name: "Coach",
        type: "varchar(255)"
    },
    {
        name: "MatchCount",
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
    }
]

let tableName = "Team";

module.exports = {
    models: models,
    tableName: tableName
}