// const siteMap = [
//     {
//         "employment": {
//             name: "Трудоустройство",
//             path: "./employment"
//         }
//     },
//     {
//         "faculties": {
//             name: "Факультеты",
//             path: "./faculties"
//         }
//     },
//     {
//         "graduate-school": {
//             name: "Аспирантура",
//             path: "./graduate-school"
//         }
//     },
//     {
//         "lists-applicants": {
//             name: "Список абитуриентов",
//             path: "./lists-applicants"
//         }
//     },
//     {
//         "magistracy": {
//             name: "Магистратура",
//             path: "./magistracy"
//         }
//     },
//     {
//         "targeted-training": {
//             name: "Целевое обучение",
//             path: "./targeted-training"
//         }
//     }
// ]

const siteMap = [
    {
        name: "WOMEN",
        path: "./women",
        children: [
            [
                {
                    name: "Shoes",
                    path: "./women/shoes"
                },
                {
                    name: "Slides",
                    path: "./women/slides",
                },
                {
                    name: "Sandals",
                    path: "./women/sandals",
                }
            ],
            [
                {
                    name: "Dress",
                    path: "./women/dress"
                },
                {
                    name: "Bubble",
                    path: "./women/bubble",
                },
                {
                    name: "Kimono ",
                    path: "./women/kimono",
                }
            ]
        ]
    },
    {
        name: "MEN",
        path: "./men",
        children: [
            [
                {
                    name: "Что-то",
                    path: "./men/shoes"
                },
                {
                    name: "Окей",
                    path: "./men/slides",
                },
                {
                    name: "Норм",
                    path: "./men/sandals",
                }
            ],
            [
                {
                    name: "Поехало",
                    path: "./men/dress"
                },
                {
                    name: "Вот так",
                    path: "./men/bubble",
                },
                {
                    name: "123123 ",
                    path: "./men/kimono",
                }
            ]
        ]
    },
    {
        name: "CHILDREN",
        path: "./children",
        children: [
            [
                {
                    name: "123123",
                    path: "./children/shoes"
                },
                {
                    name: "12413",
                    path: "./children/slides",
                },
                {
                    name: "54745",
                    path: "./children/sandals",
                }
            ],
            [
                {
                    name: "4574",
                    path: "./children/dress"
                },
                {
                    name: "5464 345 353",
                    path: "./children/bubble",
                },
                {
                    name: "6445 456 54",
                    path: "./children/kimono",
                }
            ]
        ]
    },
    // {
    //     name: "CHILDREN",
    //     path: "./children"
    // },
    // {
    //     name: "HANDBAGS",
    //     path: "./handbags"
    // },
    // {
    //     name: "BEAUTY",
    //     path: "./beauty"
    // },
    // {
    //     name: "GIFTS",
    //     path: "./gifts"
    // }
]


export default siteMap;