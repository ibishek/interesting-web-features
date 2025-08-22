// @ts-check

function share(params) {
    const shareButton = document.getElementById('share');

    shareButton && shareButton.addEventListener('click', function () {
        if (navigator.canShare(params)) {
            navigator.share(params)
        } else {
            // do your logic
        }
    });
}

share({
    url: 'https://github.com/ibishek/interesting-web-features',
});