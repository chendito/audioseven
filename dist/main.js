(()=>{"use strict";function t(t){this.plugins=t.plugins,this.audiolist=t.audiolist,this.github=t.github}t.prototype.list=function(){const t=document.querySelector(".db");this.plugins.json.forEach((e=>{const i=document.createElement("li");i.classList.add("audio-track"),i.dataset.id=e.id,i.title=e.version;const s=document.createElement("p");s.textContent=e.title;const n=document.createElement("img");n.src="./assets/img/track.svg",i.appendChild(n),i.appendChild(s),t.appendChild(i)}))},t.prototype.setPlay=function(){document.querySelectorAll(".audio-track").forEach((t=>{t.addEventListener("click",(()=>{let e=Number(t.getAttribute("data-id"));this.plugins.initSongs(e)}))}))},t.prototype.close=function(){this.audiolist.style.display="none"},t.prototype.getGithub=function(){window.open("https://github.com/chendito","_blank")};const e=t,i=document.querySelector("audio"),s=document.querySelector("#play img:nth-child(2)"),n=document.querySelector(".github"),o=document.querySelector(".menuclose"),a=document.querySelector(".menu-list"),r=document.querySelector(".audioList"),l=document.querySelector(".download"),c=document.querySelector(".tracks"),u=document.querySelector(".previous"),d=new class{constructor(t){this.json=t.json,this.containerSongs=t.containerSongs,this.download=t.download,this.anima=t.anima,this.previous=t.previous,this.next=t.next,this.musicArray=[],this.title=[],this.src=[],this.id=[]}initSongs(t){t&&this.playList(t)}playList(t){this.musicArray=this.json.map((t=>t)),this.musicArray.forEach((e=>{const{title:i,track:s,id:n}=e;this.title.push(i),this.src.push(s),this.id.push(n),t===n&&this.createSource({title:i,src:s,id:n}),this.autoPlay(t)}))}autoPlay(t){let e=t;this.musicArray.length>e+1||this.musicArray.length!==this.musicArray.length+1?this.containerSongs.addEventListener("ended",(()=>{this.createSource({title:this.title[e],src:this.src[e],id:this.id[e]}),e+=1})):this.anima.style.setProperty("--anima","paused"),this.nextSong(t)}nextSong(t){let e=t;document.querySelector("source")&&this.next.addEventListener("click",(()=>{this.createSource({title:this.title[e],src:this.src[e],id:this.id[e]}),e+=1,this.preSong(e)}))}preSong(t){let e=t-2;document.querySelector("source")&&this.previous.addEventListener("click",(()=>{this.createSource({title:this.title[e],src:this.src[e],id:this.id[e]}),e-=1}))}createSource(t){const{title:e,src:i,id:s}=t,n=document.querySelector(".description p"),o=document.createElement("source"),a=document.createAttribute("download");this.download.setAttributeNode(a),this.download.href=`./assets/audio/${i}.mp3`,this.anima.style.setProperty("--anima","3s linear infinite"),null==n||null==s||null==i?n.textContent="Add a Song":(o.src=`./assets/audio/${i}.mp3`,n.textContent=e,o.type="audio/mpeg",o.id=s,this.clearHTML(),this.containerSongs.appendChild(o),this.containerSongs.load(),this.timeAudio())}timeAudio(){setTimeout((()=>{this.containerSongs.play()}),100)}volume(){document.querySelector(".volumen").oninput=t=>{const e=t.target.value;this.containerSongs.volume=e}}clearHTML(){for(;this.containerSongs.firstChild;)this.containerSongs.removeChild(this.containerSongs.firstChild)}}({json:[{title:"Aventura Mística",version:"Dragon Ball | Luis De Lille",track:"aventura-mistica",id:1},{title:"Romance te puedo dar",version:"Dragon Ball | Marisa de Lille",track:"romance-te-puedo-dar",id:2},{title:"Cha-La Head-Cha-La",version:"Dragon Ball Z | Ricardo Silva",track:"chala-head-chala",id:3},{title:"El poder nuestro es...",version:"Dragon Ball Z | Adrián Barba",track:"el-poder-nuestro",id:4},{title:"Angeles Fuimos",version:"Dragon Ball Z | Adrián Barba",track:"angeles-fuimos",id:5},{title:"Mi corazón encantado",version:"Dragon Ball Gt | Aarón Montalvo",track:"mi-corazon-encantado",id:6},{title:"Sinfonía Cozarón Encantado",version:"Sinfonía DB Gt",track:"sinfonia-db-gt",id:7}],containerSongs:i,download:l,anima:c,next:document.querySelector(".next"),previous:u});d.volume(),d.playList(),d.autoPlay(),d.nextSong(),d.preSong();const h=new class{constructor(t){this.track=t.audio,this.lists=t.lists,this.anima=t.anima,this.isPlaying=!0}onPlay(){this.track.play(),this.isPlaying=!0,this.anima.style.setProperty("--anima","3s linear infinite")}onPause(){this.track.pause(),this.isPlaying=!1,this.anima.style.setProperty("--anima","paused")}async toggleAudio(){return this.track.paused&&!this.isPlaying?this.onPlay():!this.track.paused&&this.isPlaying?this.onPause():void 0}toggleMenu(){"block"===this.lists.style.display?this.lists.style.display="none":this.lists.style.display="block"}}({audio:i,lists:r,anima:c});s.onclick=()=>h.toggleAudio(),a.onclick=()=>h.toggleMenu();const m=new e({audiolist:r,plugins:d,github:n});m.list(),n.onclick=()=>m.getGithub(),m.setPlay(),o.onclick=()=>m.close()})();