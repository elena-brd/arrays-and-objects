const library = [
    {
        title: 'I will found you',
        author: 'Harlan Cobeh',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Hello Beautiful',
        author: 'Ann Napolitano',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'It starts with us',
        author: 'Colleen Hoover',
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
];

// challenge 1
library[0].status.read = true
library[1].status.read = true
library[2].status.read = true

// challenge 2
const str = JSON.stringify(library);




console.log(str);