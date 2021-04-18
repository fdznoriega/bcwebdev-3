// here is our sample inital store

const UserType = {
    User: "User",
    Organization: "Organization",
    Moderator: "Moderator"
}

const Category = {
    Water: "Water",
    Housing: "Housing",
    Food: "Food",
    None: "None"
}

let initalStore = {
    currentUserId: "anthony",
    users: [
        {
            id: "anthony",
            email: "anthony@bc.edu",
            type: UserType.User,
            name: "Anthony Stevens",
            bio: "",
            photo: "/assets/user1.png",
            zipcode: "33764"
        },
        {
            id: "bosfoodbank",
            email: "bosfood@foodbank.org",
            type: UserType.Organization,
            name: "The Greater Boston Food Bank",
            bio: "Together, we can end hunger here",
            photo: "/assets/user2.png",
            zipcode: "02118"
        }
    ],
    posts: [
        {
            id: "post-1",
            userId: "anthony",
            userType: UserType.User,
            title: "Food banks in the area?",
            body: "I'm looking for food banks nearby. Does anyone know where I can find one?",
            category: Category.Food,
            datetime: "2020-02-09T22:45:28Z"
        }
    ],
    comments: [
        {
            userId:"bosfoodbank",
            postId:"post-1",
            text:"Check out our website! https://www.gbfb.org/",
            datetime:"2020-02-09T22:51:40Z"
        },
    ],
    likes: [
        {
            userId:"anthony",
            postId:"post-1",
            datetime:"2020-02-09T22:45:28Z"
        },
    ]

}

export default initialStore;

