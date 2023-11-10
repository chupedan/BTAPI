// ------------------Method: POST------------------

let url = 'https://api.sheety.co/43f2a026e71c03344292f196d03fad25/youflix/videos';

// let body = {
//     video:
//     {
//         "name": "The Insane Engineering of the P-47 Thunderbolt",
//         "url": "https://www.youtube.com/watch?v=IwqTN5fhMR8",
//         "category": "Engineering",
//         "isFeatured": false,
//         "description": "The Republic P-47 Thunderbolt was a World War II-era fighter aircraft produced by the American aerospace company Republic Aviation from 1941 through 1945 ",
//     }

// };

// fetch(url, {
//     method: 'POST',
//     body: JSON.stringify(body),
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })
//     .then((response) => response.json())
//     .then(json => {
//         // Do something with the response
//         console.log(json.video);
//     })
//     .catch(err => {
//         console.log('Error: ' + err);
//     });

//

function postData(url, data) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Các headers khác nếu cần thiết
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

const data = {
    video:
        [
            {
                "name": "Why cartoon characters wear gloves",
                "url": "https://www.youtube.com/watch?v=3R3cvbLsbAk",
                "category": "Design",
                "id": 12
            },
            {
                "name": "TENET - Official Trailer",
                "url": "https://www.youtube.com/watch?v=LdOM0x0XDMo",
                "category": "Cinema",
                "id": 13
            }
        ]
}
postData(url, data)
    .then(responseData => {
        console.log('Dữ liệu đã được gửi thành công:', responseData.video);
    })
    .catch(error => {
        console.error('Lỗi khi gửi dữ liệu:', error);
    });

// ------------------Method: DELETE------------------
// let url = 'https://api.sheety.co/43f2a026e71c03344292f196d03fad25/youflix/videos/2';
// fetch(url, {
//     method: 'DELETE',
// })
//     .then(() => {
//         console.log('Object deleted');
//     });


// ------------------Method: PUT------------------
// let url = 'https://api.sheety.co/43f2a026e71c03344292f196d03fad25/youflix/videos/3';
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

