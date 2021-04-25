
// define a user type
const UserType = {
    User: "User",
    Organization: "Organization",
    Moderator: "Moderator"
}

// define a category type
const Category = {
    Water: "Water",
    Housing: "Housing",
    Food: "Food",
    None: "None"
}

let initialStore = {
    currentUserId: "anthony",
    users: [
        {
            id: "anthony",
            email: "anthony@bc.edu",
            type: UserType.User,
            name: "Anthony Stevens",
            bio: "",
            photo: "/assets/default.png",
            zipcode: "33764"
        },
        {
            id: "bosfoodbank",
            email: "bosfood@foodbank.org",
            type: UserType.Organization,
            name: "The Greater Boston Food Bank",
            bio: "Together, we can end hunger here",
            photo: "/assets/default.png",
            zipcode: "02111"
        },
        {
            id: "saundra",
            email: "saundra@gmail.com",
            type: UserType.User,
            name: "Saundra Mills",
            bio: "",
            photo: "/assets/default.png",
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
        },
        {
            id: "post-2",
            userId: "saundra",
            userType: UserType.User,
            title: "I can't get clean water lately",
            body: "Does anyone know where I can get free gallons of water?",
            category: Category.Water,
            datetime: "2020-03-09T22:45:28Z"
        },
        {
            id: "post-3",
            userId: "bosfoodbank",
            userType: UserType.Organization,
            title: "We're Relocating!",
            body: "You can find our new address at our website: https://www.gbfb.org/",
            category: Category.Food,
            datetime: "2020-04-09T22:45:28Z"
        }
    ],
    comments: [
        {
            userId:"bosfoodbank",
            postId:"post-1",
            text:"Check out our website! https://www.gbfb.org/",
            datetime:"2020-02-09T22:51:40Z"
        },
        {
            userId:"anthony",
            postId:"post-1",
            text:"Thanks!",
            datetime:"2020-02-09T22:53:40Z"
        },
        {
            userId:"saundra",
            postId:"post-3",
            text:"This is a bit far from me now. What's going to happen to the old location?",
            datetime:"2020-02-09T22:54:40Z"
        }
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
