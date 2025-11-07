const faviconImages = [
        'Images/favicongif/000.png',
        'Images/favicongif/001.png',
        'Images/favicongif/002.png',
        'Images/favicongif/003.png',
        'Images/favicongif/004.png',
        'Images/favicongif/005.png',
        // Add all your frame paths here
    ];
    let imageCounter = 0;
    const faviconLink = document.getElementById('animatedFavicon');

    setInterval(function() {
        faviconLink.href = faviconImages[imageCounter];
        imageCounter = (imageCounter + 1) % faviconImages.length;
    }, 150); // Adjust the interval (in milliseconds) for animation speed
