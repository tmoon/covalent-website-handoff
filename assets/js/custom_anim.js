var animation = bodymovin.loadAnimation({
    container: document.getElementById('loading-center-absolute'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'assets/json/data.json'
})

animation.setSpeed(3);