window.onload = function () {
    window.rr = document.getElementById('rickroll');

    const play = () => {
        rr.play().then(() => rr.classList.add('active'));
    };

    document.body.onpointerdown = play;
}
