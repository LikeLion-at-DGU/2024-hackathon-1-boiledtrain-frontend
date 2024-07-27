// async function handleKakaoCallback() {
//     try {
//         const response = await fetch('http://3.36.243.22:8000/accounts/kakao/login/callback/', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (response.ok) {
//             const data = await response.json();
//             console.log('User Info:', data.user_info);
//             console.log('Access Token:', data.access_token);
//         } else {
//             console.error('Failed to fetch user info:', response.statusText);
//         }
//     } catch (error) {
//         console.error('Error fetching login callback data:', error);
//     }
// }

// document.addEventListener('DOMContentLoaded', handleKakaoCallback);
