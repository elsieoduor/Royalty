const mediaContainer = document.getElementById('mediaContainer');
const detailsContainer = document.getElementById('details');

// Sample data for January (you can replace this with your data)
const januaryData = [
  {
    type: 'photo',
    src: 'path/to/photo.jpg',
    date: 'January 1st',
    description: 'Description for the photo on January 1st',
  },
  {
    type: 'video',
    src: 'path/to/video.mp4',
    date: 'January 10th',
    description: 'Description for the video on January 10th',
  },
  // Add more media items for January
];

function displayDetails(data) {
  detailsContainer.innerHTML = `
    <h3>${data.date}</h3>
    <p>${data.description}</p>
  `;
  detailsContainer.style.display = 'block';
}

function createMediaItem(item) {
  const mediaItem = document.createElement('div');
  mediaItem.classList.add('media-item');
  mediaItem.style.backgroundImage = `url(${item.src})`;
  mediaItem.addEventListener('click', () => displayDetails(item));
  return mediaItem;
}

function populateGallery(monthData) {
  mediaContainer.innerHTML = '';
  monthData.forEach((item) => {
    const mediaItem = createMediaItem(item);
    mediaContainer.appendChild(mediaItem);
  });
}

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

months.forEach((month) => {
  const monthDiv = document.querySelector(`.month:contains(${month})`);
  monthDiv.addEventListener('click', () => populateGallery(januaryData)); // Replace januaryData with data for each month
});
