
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
    Food: "Food"
}

let initialStore = {
    currentUserId: "anthony",
    users: [
        {
            id: "anthony",
            email: "anthony@bc.edu",
            type: UserType.User,
            name: "Anthony Stevens",
            bio: "Passionate about helping others.",
            photo: "/assets/anthony.png",
            zipcode: "02109"
        },
        {
            id: "bosfoodbank",
            email: "bosfood@foodbank.org",
            type: UserType.Organization,
            name: "The Greater Boston Food Bank",
            bio: "Together, we can end hunger.",
            photo: "/assets/foodbank.png",
            zipcode: "02111"
        },
        {
            id: "saundra",
            email: "saundra@gmail.com",
            type: UserType.User,
            name: "Saundra Mills",
            bio: "Mother of three. Here to learn and inspire others.",
            photo: "/assets/saundra.png",
            zipcode: "02118"
        },
        {
            id: "miguel",
            email: "mig@gmail.com",
            type: UserType.User,
            name: "Miguel Marcos",
            bio: "",
            photo: "/assets/default.png",
            zipcode: "02131"
        },

    ],
    posts: [
        {
            id: "post-1",
            userId: "anthony",
            userType: UserType.User,
            title: "Food banks in the area?",
            body: "I'm looking for food banks nearby. Does anyone know where I can find one?",
            category: Category.Food,
            datetime: "2021-02-09T22:45:28Z"
        },
        {
            id: "post-2",
            userId: "saundra",
            userType: UserType.User,
            title: "I can't get clean water lately",
            body: "Does anyone know where I can get free gallons of water?",
            category: Category.Water,
            datetime: "2021-03-09T22:45:28Z"
        },
        {
            id: "post-3",
            userId: "bosfoodbank",
            userType: UserType.Organization,
            title: "We're Relocating!",
            body: "You can find our new address at our website: https://www.gbfb.org/",
            category: Category.Food,
            datetime: "2021-04-09T22:45:28Z"
        },
        {
            id: "post-4",
            userId: "miguel",
            userType: UserType.User,
            title: "Good housing nearby",
            body: "I'm moving to Boston to take care of my family members. Does anyone know where I can find safe, affordable housing?",
            category: Category.Housing,
            datetime: "2021-04-15T22:45:28Z"
        }
    ],
    comments: [
        {
            userId:"bosfoodbank",
            postId:"post-1",
            text:"Check out our website! https://www.gbfb.org/",
            datetime:"2021-02-09T22:51:40Z"
        },
        {
            userId:"anthony",
            postId:"post-1",
            text:"Thanks!",
            datetime:"2021-02-09T22:53:40Z"
        },
        {
            userId:"saundra",
            postId:"post-3",
            text:"This is a bit far from me now. What's going to happen to the old location?",
            datetime:"2021-02-09T22:54:40Z"
        },
        {
            userId:"saundra",
            postId:"post-4",
            text:"Let me know if you find anything!",
            datetime:"2021-04-16T22:54:40Z"
        }
    ],
    likes: [
        {
            userId:"anthony",
            postId:"post-1",
            datetime:"2021-02-09T22:45:28Z"
        },
        {
            userId:"saundra",
            postId:"post-4",
            datetime:"2021-04-16T22:45:28Z"
        },
    ]

}

export default initialStore;
