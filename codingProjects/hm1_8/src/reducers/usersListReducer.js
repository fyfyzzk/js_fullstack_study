// mock users
const mock_users = [
    {
        UserId: 1,
        Name: "Zack",
        Title: "Manager",
        Sex: "Male",
        StartDate: "2018-01-29",
        OfficePhone: 34322171745,
        CellPhone: 34322171745,
        SMS: 34322171745,
        Email: "zz87022n@pace.edu",
        Manager: "Peiwei Mi",
        DirectReports: 4
    },
    {
        UserId: 2,
        Name: "Hudi",
        Title: "worker",
        Sex: "Male",
        StartDate: "2018-02-29",
        OfficePhone: 68789971745,
        CellPhone: 89283149729,
        SMS: 89283149729,
        Email: "zdfafds@a.cc",
        Manager: "Zack",
        DirectReports: 4
    },
    {
        UserId: 3,
        Name: "KK",
        Title: "worker",
        Sex: "Female",
        StartDate: "2018-02-28",
        OfficePhone: 770123124,
        CellPhone: 770123124,
        SMS: 770123124,
        Email: "sdfafdas@gmail.com",
        Manager: "Peiwei Mi",
        DirectReports: 4
    }
];

const users = (state = mock_users, action) => {
    switch (action.type) {
        case "GET_STORE_USERS":
            return state;
        default:
            return state;
    }
};

export default users;
