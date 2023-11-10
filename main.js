// ------------------Method: POST------------------

let url = 'https://api.sheety.co/07cc519f254d736267b72d678dc29e78/youflix/videos';

let body = {
    video: 
        {
            "name": "The Insane Engineering of the P-47 Thunderbolt",
            "url": "https://www.youtube.com/watch?v=IwqTN5fhMR8",
            "category": "Engineering",
            "isFeatured": false,
            "description": "The Republic P-47 Thunderbolt was a World War II-era fighter aircraft produced by the American aerospace company Republic Aviation from 1941 through 1945 ",
            "id": 2
        }
    
};

fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then((response) => response.json())
    .then(json => {
        // Do something with the response
        console.log(json.video);
    })
    .catch(err => {
        console.log('Error: ' + err);
    });


// ------------------Method: DELETE------------------
// let url = 'https://api.sheety.co/07cc519f254d736267b72d678dc29e78/youflix/videos/2';
// fetch(url, {
//     method: 'DELETE',
// })
//     .then(() => {
//         console.log('Object deleted');
//     });


// ------------------Method: PUT------------------
// let url = 'https://api.sheety.co/07cc519f254d736267b72d678dc29e78/youflix/videos/3';
// let body = {
//     video:
//         {
//           "name": "abc",
//           "url": "https://www.youtube.com/watch?v=IwqTN5fhMR8",
//           "category": "Engineering",
//           "isFeatured": false,
//           "description": "The Republic P-47 Thunderbolt was a World War II-era fighter aircraft produced by the American aerospace company Republic Aviation from 1941 through 1945 ",
//           "id": 3
//         }
// }
// fetch(url, {
//     method: 'PUT',
//     body: JSON.stringify(body),
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })
//     .then((response) => response.json())
//     .then(json => {
//         // Do something with object
//         console.log(json.video);
//     })
//     .catch(err => {
//         console.log('Error: ' + err);
//     });

