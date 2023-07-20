const mediaContainer = document.getElementById('mediaContainer');
const detailsContainer = document.getElementById('details');


async function fetchData() {
  try {
    const response = await fetch('mediaData.json');
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

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

async function populateGallery() {
  const items = await fetchData();

  if (items.length === 0) {
    mediaContainer.innerHTML = '<p>No media items available.</p>';
  } else {
    mediaContainer.innerHTML = '';
    items.forEach((item) => {
      const mediaItem = createMediaItem(item);
      mediaContainer.appendChild(mediaItem);
    });
  }
}

populateGallery();

  