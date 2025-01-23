const form = document.querySelector('.form');
const submitter = document.querySelector('.submitter');
const apiKey = 'sBuRqVTVt4nzZ0g8ClNK3PX6SNrYECtW';

submitter.addEventListener('click', async (event) => {
  event.preventDefault();
  const formData = new FormData(form, submitter);

  const username = document.querySelector('.giphy-username').value;
  formData.append('username', username);

  const gifFile = document.querySelector('.gif-file-input');
  formData.append('file', gifFile.files[0]);

  try {
    const response = await fetch('https://upload.giphy.com/v1/gifs', {
      method: 'POST',
      headers: { Authorization: `Bearer: ${apiKey}` },
      body: formData,
    });

    const result = response.json();

    if (response.ok) {
      console.log('GIF uploaded successfully:', result);
    } else {
      console.error('Upload failed:', result);
    }
  } catch (error) {
    console.error('Error uploading GIF:', error);
  }
});

console.log(form);
console.log(submitter);

// import { uploadGif } from './api.js';

// export const handleUpload = async (event) => {
//   event.preventDefault();
//   const fileInput = document.querySelector('gif-file');
//   const file = fileInput.files[0];
//   if (!file) return alert('Please select a file!');

//   const response = await uploadGif(file);
//   if (response.meta.status === 200) {
//     alert('Gif uploaded successfully!');
//     localStorage.setItem('uploadedGifId', response.data.id);
//   } else {
//     alert('Failed to upload gif.');
//   }
// };

// document.getElementById('upload-form').addEventListener('submit', handleUpload);

// on click of submitter btn you fetch the upload.giphy api with the file

// send FormData to giphy and send the GIF ID or smth, no clue
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects
// watch this so you can do it kinda, then talk with teammates to see if they can kinda finish the project 23rd night / 24th morning
