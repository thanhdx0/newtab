const backgroundMap = BACKGROUND_MAP.test

function draw(backgroundMap) {
    chrome.runtime.sendMessage({
        greeting: "hello",
        backgroundMap,
    });
}

function revertColor(element) {
    const currentColor = element.style.background;
    element.style.background = currentColor === "rgb(255, 255, 255)" ? "#368df9": "#ffffff";
}

function getIndex(index) {
    const col = index % 16;
    const row = Math.floor(index / 16);

    return [row, col];
}

window.onload = () => {
    const btnDraw = document.querySelector("#btnDraw");
    btnDraw.addEventListener("click", this.draw.bind(this, backgroundMap));

    const cells = document.querySelectorAll('.cell');
    cells.forEach(element => {
        element.addEventListener("click", event => {
            const id = parseInt(event.target.id.slice(1));
            const [row, col] = getIndex(id);
            revertColor(element);
            backgroundMap[row][col] = 1 - backgroundMap[row][col];
        })
    })
}
