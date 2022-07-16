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
        name: "Women",
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
        name: "Факультеты",
        path: "./faculties"
    },
    {
        name: "Аспирантура",
        path: "./graduate-school"
    },
    {
        name: "Список абитуриентов",
        path: "./lists-applicants"
    },
    {
        name: "Магистратура",
        path: "./magistracy"
    },
    {
        name: "Целевое обучение",
        path: "./targeted-training"
    }
]


export default siteMap;