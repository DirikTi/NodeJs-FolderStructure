var models = [
    {
        name: "Season",
        type:"varchar(255)"
    },
    {
        name: "MatchDate",
        type:"varchar(255)"
    },
    {
        name: "TeamOne_Id",
        type:"int"
    },
    {
        name: "TeamTwo_Id",
        type:"int"
    }
]


let tableName = "FightMatch";

module.exports = {
    models: models,
    tableName: tableName
}