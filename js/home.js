const text_container = document.getElementById("toggle_link")
const img_container = document.getElementById("toggle_img")
const video_container = document.getElementById("toggle_video")
const text = ['QR code', 'URL link']

async function cycle() {
    text_container.innerText = text[0];
    img_container.classList.add('hidden')
    video_container.classList.remove('hidden')
    await new Promise(r => setTimeout(r, 10801));
    text_container.innerText = text[1];
    video_container.classList.add('hidden')
    img_container.classList.remove('hidden')
    await new Promise(r => setTimeout(r, 4000));
    cycle();
}
cycle();