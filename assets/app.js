const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const heading = $(".heading")
const cdbox = $(".cd")
const audio = $("#audio")
const playBtn = $(".play_btn")
const pauseBtn = $(".pause_btn")
const nextBtn = $(".next_btn")
const prevBtn = $(".prev_btn")
const randomBtn = $(".random_btn")
const repeatBtn = $(".loop_btn")
const playTime = $("#playtime")
const listSong = $(".list_song")

const app = {
    currentIndex: 0,
    isRandom: false,
    isRepeat: false,
    songs: [
        {
            name: "Cô đơn dành cho ai",
            author: "NAL x LEE KEN",
            music: "./assets/music/CoDonDanhChoAi.mp3",
            img: "./assets/img/codondanhchoai.jpg"
        },
        {
            name: "Hãy trao cho anh",
            author: "Sơn Tùng MTP",
            music: "./assets/music/HayTraoChoAnh-SonTungMTPSnoopDogg-6010660.mp3",
            img: "./assets/img/haytraochoanh.jpg"
        },
        {
            name: "Muộn rồi mà sao còn",
            author: "Sơn Tùng MTP",
            music: "./assets/music/MuonRoiMaSaoCon-SonTungMTP-7011803.mp3",
            img: "./assets/img/muonRoiMaSaoCon.jpg"
        },
        {
            name: "Tình yêu màu hồng",
            author: "Hồ Văn Qúy x Xám",
            music: "./assets/music/TinhYeuMauHong-HoVanQuyXam-6914636.mp3",
            img: "./assets/img/maxresdefault.jpg"
        },
        {
            name: "Yêu từ đâu mà ra",
            author: "lil ZPOET",
            music: "./assets/music/YeuTuDauMaRa-LilZpoet-6239110.mp3",
            img: "./assets/img/yeutudaumara.jpg"
        },
        {
            name: "Anh không tán tỉnh em đâu",
            author: "Tùng TeA & PC",
            music: "./assets/music/KhongTanTinhEmDau-TeAPC-6104193.mp3",
            img: "./assets/img/AnhKhongTanTinhEmDau.jpg"
        },
        {
            name: "Anh thương em nhất mà",
            author: "Lã x Log x TiB",
            music: "./assets/music/AnhThuongEmNhatMa-LaLOGTIB-5940921.mp3",
            img: "./assets/img/AnhThuongEmNhatMa.jpg"
        },
        {
            name: "Cưới thôi",
            author: "Masew x Masiu x B Ray x TAP",
            music: "./assets/music/CuoiThoi-MasewMasiuBRayTAPVietNam-7085648.mp3",
            img: "./assets/img/CuoiThoi.jpg"
        },
        {
            name: "Gìa cùng nhau là được",
            author: "Tùng TeA & PC",
            music: "./assets/music/GiaCungNhauLaDuoc-TeaPC-5743181.mp3",
            img: "./assets/img/GiaCungNhauLaDuoc.jpg"
        },
        {
            name: "Hạ Sang",
            author: "Đào Duy Qúy",
            music: "./assets/music/HaSangLofiVersion-DaoDuyQuyFreakD-7055924.mp3",
            img: "./assets/img/HaSang.jpg"
        },
        {
            name: "Kẻ đuổi theo ánh sáng",
            author: "Huy Vạc",
            music: "./assets/music/KeTheoDuoiAnhSang-HuyVac-7056896.mp3",
            img: "./assets/img/KeDuoiTheoAnhSang.jpg"
        },
        {
            name: "Nắm đôi bàn tay",
            author: "Kay Trần",
            music: "./assets/music/NamDoiBanTay-KayTran-7042104.mp3",
            img: "./assets/img/NamDoiBanTay.jpg"
        },
        {
            name: "Nàng Thơ",
            author: "Hoàng Dũng",
            music: "./assets/music/NangTho-HoangDung-6413381.mp3",
            img: "./assets/img/NangTho.jpg"
        },
        {
            name: "Người em cố đô",
            author: " Rum x Đaa",
            music: "./assets/music/NguoiEmCoDo-RumDaa-6914113.mp3",
            img: "./assets/img/NguoiEmCoDo.jpg"
        },
        {
            name: "Phố đã lên đèn",
            author: "Huyền Tâm Môn",
            music: "./assets/music/PhoDaLenDen-HuyenTamMon-6938343.mp3",
            img: "./assets/img/PhoDaLenDen.jpg"
        },
        {
            name: "Sài Gòn đau lòng quá",
            author: "Hứa Kim Tuyền, Hoàng Duyên",
            music: "./assets/music/SaiGonDauLongQua-HuaKimTuyenHoangDuyen-6992977.mp3",
            img: "./assets/img/SaiGonDauLongQua.jpg"
        },
        {
            name: "Sài Gòn hôm nay mưa",
            author: "JSOL, Hoàng Duyên",
            music: "./assets/music/SaiGonHomNayMua-JSOLHoangDuyen-7026537.mp3",
            img: "./assets/img/SaiGonHomNayMua.jpg"
        },
        {
            name: "Way Back Home",
            author: "Shaun",
            music: "./assets/music/WayBackHome.mp3",
            img: "./assets/img/WayBackHome.jpg"
        }
    ],
    render: function() {
        const htmls = this.songs.map(function(song, index) {
            return `<li class="song_item ${index === app.currentIndex ? "songactive" : ""}" data-index = "${index}">
            <div class="item_img">
                <img src=${song.img} alt="">
            </div>
            <div class="item_description">
                <h2>${song.name}</h2>
                <p>${song.author}</p>
            </div>
        </li>`
        })
        listSong.innerHTML = htmls.join("")
    },
    defineProperties: function() {
        Object.defineProperty(this,'currentSong',{
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },
    handleEvents: function() {
        const _this = this
        //xử lý quay CD
        const cdAnimate = cdbox.animate([
            {transform: "rotate(360deg)"}
        ],{
            duration: 10000,
            iterations: Infinity
        })
        cdAnimate.pause()

        // xử lý phóng to thu nhỏ scroll
        const cd = $(".player_cd")
        const cdWidth = cd.offsetWidth
        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newCdWidth = cdWidth-scrollTop
            cd.style.width = newCdWidth > 0? newCdWidth + "px" : 0
            cd.style.opacity = newCdWidth / cdWidth
        }

        //xử lý click BTN
        playBtn.onclick = function() {
            audio.play()
        }

        pauseBtn.onclick = function() {
            audio.pause()
        }

        audio.onplay = function() {
            pauseBtn.classList.remove("close")
            playBtn.classList.add("close")
            cdAnimate.play()
        }

        audio.onpause = function() {
            playBtn.classList.remove("close")
            pauseBtn.classList.add("close")
            cdAnimate.pause()
        }

        // xử lý tiến độ bài hát
        audio.ontimeupdate = function() {
            if(audio.duration){
                const playTimePercent = Math.floor(audio.currentTime / audio.duration * 100)
                playTime.value = playTimePercent
            }
        }

        //xử lý tua bài hát
        playTime.onchange = function(e) {
            const seekTime = audio.duration / 100 * e.target.value
            audio.currentTime = seekTime
        }
        
        //Next bài hát
        nextBtn.onclick = function() {
            if(_this.isRandom){
                _this.playRandomSong()
            }
            else{
                _this.nextSong()
            }
            audio.play()
            _this.scrollToActiveSong()
            _this.render()
        }
        prevBtn.onclick = function() {
            if(_this.isRandom){
                _this.playRandomSong()
            }
            else{
                _this.prevSong()
            }
            audio.play()
            _this.scrollToActiveSong()
            _this.render()

        }
        randomBtn.onclick = function() {
            _this.isRandom = !_this.isRandom
            randomBtn.classList.toggle("active",_this.isRandom)
        }

        //repeat bài hát
        repeatBtn.onclick = function() {
            _this.isRepeat = !_this.isRepeat
            repeatBtn.classList.toggle("active",_this.isRepeat)
        }

        //next bài hát khi bài hát kết thúc
        audio.onended = function() {
            if(_this.isRepeat){
                audio.play()
            }else{
                nextBtn.click()
            }
        }
        
        listSong.onclick = function(e) {
            const songNode = e.target.closest(".song_item:not(.songactive)")
            if(songNode) {
                _this.currentIndex = Number(songNode.getAttribute("data-index"))
                _this.loadCurrentSong()
                _this.render()
                audio.play()
            }
        }
    },
    scrollToActiveSong: function () {
        setTimeout(() => {
          if (this.currentIndex <= 3) {
            $('.song.active').scrollIntoView({
              behavior: 'smooth',
              block: 'end',
            });
          } else {
            $('.song.active').scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
          }
        }, 300)
      },
    loadCurrentSong: function() {
        heading.textContent = this.currentSong.name
        cdbox.style.background = `url("${this.currentSong.img}")center/cover`
        audio.src = this.currentSong.music
    },
    nextSong: function() {
        this.currentIndex++
        if(this.currentIndex >= this.songs.length){
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    prevSong: function() {
        this.currentIndex--
        if(this.currentIndex < 0){
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },
    playRandomSong: function() {
        let newIndex
        do{
            newIndex = Math.floor(Math.random() * this.songs.length)
        }
        while (newIndex === this.currentIndex)
        this.currentIndex = newIndex
        this.loadCurrentSong()
    },
    start: function() {
        this.defineProperties()
        this.render()
        this.loadCurrentSong()
        this.handleEvents()
    }
}

app.start()

