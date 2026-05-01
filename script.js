// ==========================================
// 1. PENGATURAN LINK MYLEAD & PARAMETER ML_SUB1
// ==========================================
const urlParams = new URLSearchParams(window.location.search);
const mlSub1 = urlParams.get('ml_sub1');

// MASUKKAN LINK LOCKER MYLEAD MONOPOLY GO ANDA DI SINI
let myLeadLink = "https://bestlocker.eu/iframe/MASUKKAN_KODE_LOCKER_ANDA";

if (mlSub1) {
    if (myLeadLink.includes("?")) {
        myLeadLink = myLeadLink + "&ml_sub1=" + mlSub1;
    } else {
        myLeadLink = myLeadLink + "?ml_sub1=" + mlSub1;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const lockerBtn = document.getElementById("lockerLink");
    if(lockerBtn) lockerBtn.href = myLeadLink;
});

// ==========================================
// 2. LOGIKA TAMPILAN & ANIMASI LANGKAH
// ==========================================
function selectDevice(elem, type) {
    document.querySelectorAll('.device-btn').forEach(b => b.classList.remove('selected'));
    elem.classList.add('selected');
}

function processStep1() {
    const user = document.getElementById('usernameInput').value;
    if(!user || user.trim() === "") { alert("Please enter your Monopoly GO Username or ID!"); return; }
    
    // --- TAMBAHKAN KODE INI UNTUK MENYALAKAN MUSIK ---
    const bgm = document.getElementById('bgMusic');
    if (bgm) {
        bgm.volume = 0.5; // Mengatur volume agar tidak terlalu keras (0.5 = 50%)
        bgm.play().catch(e => console.log("Audio play failed: ", e));
    }
    // -------------------------------------------------
    
    document.getElementById('displayUsername').innerText = user;
    document.getElementById('displayUsername2').innerText = user;
    
    document.querySelector('#step1 .cta-btn').style.display = 'none';
    document.getElementById('loading1').style.display = 'block';
    
    let w = 0;
    const bar = document.getElementById('progressBar1');
    const txt = document.getElementById('loadingText1');
    const searchIcon = document.getElementById('searchIcon');
    const successIcon = document.getElementById('successIcon');

    const intv = setInterval(() => {
        w += 1; 
        if(bar) bar.style.width = w + '%';
        
        if(w === 20) txt.innerText = "Locating server...";
        if(w === 50) txt.innerText = "Connecting to database...";
        if(w === 80) txt.innerText = "Scanning user ID...";
        
        if(w >= 100) {
            clearInterval(intv);
            txt.innerText = "User account found!";
            txt.style.color = "#28a745"; 
            
            if(searchIcon) searchIcon.style.display = 'none';
            if(successIcon) {
                successIcon.style.display = 'block';
                successIcon.style.color = '#28a745';
                successIcon.classList.add('pulse-anim');
            }

            setTimeout(() => {
                document.getElementById('step1').style.display = 'none';
                document.getElementById('step2').style.display = 'block';
            }, 1500);
        }
    }, 80); 
}

function switchTab(tabName) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.getElementById('tab-dice').style.display = 'none';
    document.getElementById('tab-cash').style.display = 'none';
    
    if(tabName === 'dice') {
        document.querySelector('.tab:nth-child(1)').classList.add('active');
        document.getElementById('tab-dice').style.display = 'grid';
    } else {
        document.querySelector('.tab:nth-child(2)').classList.add('active');
        document.getElementById('tab-cash').style.display = 'grid';
    }
}

function startClaimProcess(itemName) {
    document.getElementById('selectedItemName').innerText = itemName;
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step-loading').style.display = 'block';
    
    let p = 0;
    const pBar = document.getElementById('progressBarGen');
    const cText = document.getElementById('consoleText');
    const titleText = document.getElementById('loadingTitle');
    const spinner = document.getElementById('loadingSpinner');
    const successCheck = document.getElementById('successIconGen');
    
    const steps = ["Validating ID...", "Generating " + itemName + "...", "Bypassing security...", "Finalizing transfer..."];
    
    const timer = setInterval(() => {
        p += 1; 
        pBar.style.width = p + '%';
        
        if (p < 25) cText.innerText = steps[0];
        else if (p < 50) cText.innerText = steps[1];
        else if (p < 85) cText.innerText = steps[2];
        else cText.innerText = steps[3];

        if (p >= 100) {
            clearInterval(timer);
            cText.innerText = "Generation Successful!";
            cText.style.color = "#28a745"; 
            titleText.innerText = "SUCCESS!";
            titleText.style.color = "#28a745";
            
            spinner.style.display = 'none';
            successCheck.style.display = 'block';
            successCheck.classList.add('pulse-anim');

            setTimeout(() => {
                document.getElementById('step-loading').style.display = 'none';
                document.getElementById('step3').style.display = 'block'; 
            }, 2000);
        }
    }, 100); 
}

// ==========================================
// 3. USER ONLINE & 4. HISTATS
// ==========================================
let currentUsers = 5124;
setInterval(() => {
    currentUsers += Math.floor(Math.random() * 21) - 10;
    if(currentUsers < 4800) currentUsers = 4800;
    const el = document.getElementById('userCount');
    if(el) el.innerText = "Active Players: " + currentUsers.toLocaleString();
}, 3000);

function lacakKlikCPA(event, urlTujuan) {
    if(event) event.preventDefault();
    window._Hasync = window._Hasync || [];
    // GANTI ID INI DENGAN ID HISTATS MONOPOLY ANDA
    window._Hasync.push(['Histats.start', '1,5013362,4,0,0,0,00010000']);
    var hs = document.createElement('script'); hs.async = true;
    hs.src = ('//s10.histats.com/js15_as.js');
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
    setTimeout(() => { window.location.href = urlTujuan; }, 500);
}

// ==========================================
// 5. LIVE NOTIFICATION (SOCIAL PROOF)
// ==========================================
const globalNames = ["Oliver", "Emma", "Kenji", "Mateo", "Sofia", "Lucas", "Mei Ling", "Liam", "Chloe", "Min-Ho", "Hugo", "Alice", "Felix", "Daiki", "Lars", "Greta", "Arjun", "Ingrid", "Somsak", "Charlotte", "Julian", "Lea", "Tuan", "Elena", "Noah"];
const rewardItems = ["15,000 Rolls", "3,200 Rolls", "500M Cash", "50M Cash"];

function showNotification() {
    const noti = document.getElementById('live-notification');
    if(!noti) return;
    document.getElementById('noti-name').innerText = globalNames[Math.floor(Math.random() * globalNames.length)];
    document.getElementById('noti-item').innerText = rewardItems[Math.floor(Math.random() * rewardItems.length)];
    noti.classList.add('show');
    setTimeout(() => { noti.classList.remove('show'); }, 4000);
}
setInterval(showNotification, 12000);

// ==========================================
// 6. ROTASI KOMENTAR GLOBAL
// ==========================================
const databaseKomentar = [
    { name: "Oliver H.", text: "Just got my 15,000 rolls! Time to finish my board.", img: "1" },
    { name: "Emma W.", text: "Wow, the 500M cash came in instantly.", img: "2" },
    { name: "Kenji Y.", text: "Sugoi! The dice rolls are real. Arigato!", img: "26" },
    { name: "Min-Ho K.", text: "Kamsahamnida! Fastest generator I've used.", img: "28" },
    { name: "Sofia G.", text: "I was skeptical, but my account just received the cash.", img: "4" },
    { name: "Leo B.", text: "Worked perfectly on my iPhone.", img: "5" },
    { name: "Mei Ling", text: "Got the jackpot rolls! Thank you so much.", img: "31" },
    { name: "Noah J.", text: "Only took 2 minutes to verify and get the rewards.", img: "7" },
    { name: "Daiki K.", text: "Best Monopoly tool right now.", img: "40" },
    { name: "Clara S.", text: "Just attacked my friends with all these new dice!", img: "10" }
];

function tampilkanKomentarAcak() {
    const container = document.getElementById('dynamicComments');
    if(!container) return;
    container.style.opacity = '0';
    setTimeout(() => {
        const acak = databaseKomentar.sort(() => 0.5 - Math.random()).slice(0, 2);
        container.innerHTML = '';
        acak.forEach(item => {
            container.innerHTML += `<div class="comment-item"><img src="https://i.pravatar.cc/150?img=${item.img}" class="comment-avatar"><div class="comment-body"><div class="comment-name">${item.name} <span class="comment-time">just now</span></div><div class="comment-text">${item.text}</div></div></div>`;
        });
        container.style.opacity = '1';
    }, 500);
}
setInterval(tampilkanKomentarAcak, 7000);
document.addEventListener("DOMContentLoaded", tampilkanKomentarAcak);

// ==========================================
// 7. PROTEKSI WEBSITE (ANTI-COPY & INSPECT)
// ==========================================
document.addEventListener('contextmenu', e => e.preventDefault());
document.onkeydown = function(e) {
    if(e.keyCode == 123 || (e.ctrlKey && e.shiftKey && [73, 74, 67].includes(e.keyCode)) || (e.ctrlKey && e.keyCode == 85)) return false;
};