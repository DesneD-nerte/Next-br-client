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
            {
                name: "Pants",
                path: "./women/pants"
            },
            {
                name: "Shoes",
                path: "./women/shoes"
            }
        ]
    },
    {
        name: "MEN",
        path: "./men"
    },
    {
        name: "CHILDREN",
        path: "./children"
    },
    {
        name: "HANDBAGS",
        path: "./handbags"
    },
    {
        name: "BEAUTY",
        path: "./beauty"
    },
    {
        name: "GIFTS",
        path: "./gifts"
    }
]


export default siteMap;