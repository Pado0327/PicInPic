const videoElement = document.querySelector('#video');
const btn = document.querySelector('#btn');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    //wait till user select media
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch Error here
    console.log('Whoops, error here:', error);
  }
}

btn.addEventListener('click', async () => {
  // Disable button
  btn.disabled = true;
  //start picture in picture
  await videoElement.requestPictureInPicture();
  //Reset Button
  btn.disabled = false;
});

selectMediaStream();
