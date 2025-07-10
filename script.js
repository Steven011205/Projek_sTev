// Fungsi untuk menangani form unggah catatan
document.getElementById('uploadForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah form submit default
    alert('Catatan Anda berhasil diunggah!');
});

// Fungsi untuk menangani langganan premium
function subscribe() {
    alert('Terima kasih telah berlangganan premium!');
}

// Fungsi untuk menangani posting diskusi
function postDiscussion() {
    const input = document.getElementById('discussionInput').value;
    if (input.trim() === '') {
        alert('Silakan tulis sesuatu sebelum memposting!');
        return;
    }

    const discussionPosts = document.getElementById('discussionPosts');
    const newPost = document.createElement('div');
    newPost.textContent = input;
    discussionPosts.appendChild(newPost);

    // Kosongkan textarea setelah posting
    document.getElementById('discussionInput').value = '';
}

// Fungsi untuk menangani penukaran poin
function redeemPoints() {
    const points = document.getElementById('points').textContent;
    if (parseInt(points) < 100) {
        alert('Anda membutuhkan minimal 100 poin untuk menukarkan hadiah!');
    } else {
        alert('Poin Anda berhasil ditukarkan!');
        document.getElementById('points').textContent = 0;
    }
}