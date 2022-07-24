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
                    path: "./women/shoes"
                },
                {
                    name: "Окей",
                    path: "./women/slides",
                },
                {
                    name: "Норм",
                    path: "./women/sandals",
                }
            ],
            [
                {
                    name: "Поехало",
                    path: "./women/dress"
                },
                {
                    name: "Вот так",
                    path: "./women/bubble",
                },
                {
                    name: "123123 ",
                    path: "./women/kimono",
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