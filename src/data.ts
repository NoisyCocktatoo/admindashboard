export const menu = [
    {
        id: 1,
        title: "MAIN",
        listItems: [
            {
                id: 1,
                title: "Homepage",
                url: "/",
                icon: "home.svg",
            },
            {
                id: 2,
                title: "Profile",
                url: "/users/1",
                icon: "user.svg",
            },
        ],
    },
    {
        id: 2,
        title: "LISTS",
        listItems: [
            {
                id: 1,
                title: "Users",
                url: "/users",
                icon: "user.svg",
            },
            {
                id: 2,
                title: "Products",
                url: "/products",
                icon: "product.svg",
            },
            {
                id: 3,
                title: "Orders",
                url: "/orders",
                icon: "order.svg",
            },
            {
                id: 4,
                title: "Posts",
                url: "/posts",
                icon: "post2.svg",
            },
        ],  
    },
    {
        id: 3,
        title: "GENERAL",
        listItems: [
            {
                id: 1,
                title: "Elements",
                url: "/",
                icon: "element.svg",
            },
            {
                id: 2,
                title: "Notes",
                url: "/",
                icon: "note.svg",
            },
            {
                id: 3,
                title: "Forms",
                url: "/",
                icon: "form.svg",
            },
        ]
    },
    {
        id: 4,
        title: "MAINTENANCE",
        listItems: [
            {
                id: 1,
                title: "Settings",
                url: "/",
                icon: "setting.svg",
            },
            {
                id: 2,
                title: "Backups",
                url: "/",
                icon: "backup.svg",
            },
        ]
    },
     {
        id: 5,
        title: "ANALYTICS",
        listItems: [
            {
                id: 1,
                title: "Charts",
                url: "/",
                icon: "chart.svg",
            },
            {
                id: 2,
                title: "Logs",
                url: "/",
                icon: "log.svg",
            },
        ]
    }
]

export const topDealUser = [
    {
        id: 1,
        img: "https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-6/463832067_8603931856331821_6267007011532801700_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF2i5yBeVaf3iGfBbzgVB6db8RNCavkZ95vxE0Jq-Rn3ifg9GuGfzEf8IirkJMfIxK547qX6hWKSx0QHs688peO&_nc_ohc=WMnqLYuAykYQ7kNvgG39osb&_nc_oc=Adj2yfl1JOn2EC0KQIgiFRraMZPXP8BWIuVwqkhI4By7OZ7k5aaDzyCYt6avV-iHt38&_nc_zt=23&_nc_ht=scontent.fmnl17-5.fna&_nc_gid=AgbjvE1ZnB6HF6dl5NV2ouD&oh=00_AYCe7a0MLeSB9oil6xds2Sw4pGYJPzLp8z65P2pu5HStFw&oe=67A6D355",
        username: "Dave Grencio",
        email: "dave.grencio@magsaysay.com",
    },
    {
        id: 2,
        img: "https://randomuser.me/api/portraits/men/2.jpg",
        username: "John Doe",
        email: "john.doe@example.com",
    },
    {
        id: 3,
        img: "https://randomuser.me/api/portraits/women/3.jpg",
        username: "Jane Smith",
        email: "jane.smith@example.com",
    },
    {
        id: 4,
        img: "https://randomuser.me/api/portraits/men/4.jpg",
        username: "Michael Johnson",
        email: "michael.johnson@example.com",
    },
    {
        id: 5,
        img: "https://randomuser.me/api/portraits/women/5.jpg",
        username: "Emily Brown",
        email: "emily.brown@example.com",
    }
];


export const chartBoxUser = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Users",
    number: "11.238",
    dataKey: "users",
    percentage: 45,
    chartData: [
        {
            name: "Sun", users: 400
        },
        {
            name: "Mon", users: 215
        },
        {
            name: "Tue", users: 100
        },
        {
            name: "Wed", users: 300
        },
        {
            name: "Thurs", users: 900
        },
        {
            name: "Fri", users: 300
        }, 
        {
            name: "Sat", users: 400
        },

    ]
}