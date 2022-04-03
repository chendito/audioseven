import { audiosAs } from "./json.js";
import { containerAudio } from "../app.js";
function TrackList( config, github) {
    this.database = config.tracks;
    this.github = github;
}

TrackList.prototype.list = function () {
    const container = document.querySelector('.db');
    this.database.forEach(track => {
        const li = document.createElement('li');
        li.classList.add('audio-track');
        li.dataset.id = track.id;
        li.title = track.version;
        const p = document.createElement('p');
        p.textContent = track.title;
        const img = document.createElement('img');
        img.src = "./assets/img/track.svg";    

        li.appendChild(img);
        li.appendChild(p);
        container.appendChild(li);
    });
}

TrackList.prototype.setPlay = function () {
    const textTrack = document.querySelector('.description p');
    const audioTrack = document.querySelectorAll('.audio-track');

    audioTrack.forEach(element => {
        element.addEventListener('click', () => {
            let music = Number(element.getAttribute('data-id'));
            audiosAs.forEach(audio => {
                const { title, track, id } = audio;
                if(music === id) {
                    const source = document.createElement('source');
                    source.src = `./assets/tracks/${track}.mp3`;
                    source.type = 'audio/mpeg';
                    textTrack.textContent = title;
                    clearHTML();
                    containerAudio.appendChild(source);
                }
            })
        })
    })
}

TrackList.prototype.getGithub = function () {
    window.open('https://github.com/chendito', '_blank');
}

function clearHTML() {
    while(containerAudio.firstChild) {
        containerAudio.removeChild(containerAudio.firstChild);
    }
}
export default TrackList;
