let _Exception = {
    error: true,
    message: "",
    status: 200,
    exception: null,
    data: null
}
/*Include*/
const Recorded = {
    error: true,
    message: "Daha önce kaydedilmiş veri",
    status: 203,
    exception: null,
    data: null
};

const RecordNotFound = {
    error: true,
    message: "Veri bulunamadı",
    status: 205,
    exception: null,
    data: null
};

const RunTimeException = {
    error: true,
    message: "Zaman aşımına uğradı",
    status: 500,
    exception: null,
    data: null
};

const Success = {
    error: false,
    message: "Succedd",
    status: 200,
    exception: null,
    data: null
};

module.exports = {
    Recorded: Recorded,
    RecordNotFound: RecordNotFound,
    RunTimeException: RunTimeException,
    Succeed: Success,
}