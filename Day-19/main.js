function colorWords() {
    const container = document.getElementById("textContainer");
    let words = container.textContent.split(" ");
    let currentWordIndex = 0;

    function updateText() {
        let newText = "";
        for (let i = 0; i < words.length; i++) {
            newText += (i === currentWordIndex) ? `<span style="color: green;">${words[i]}</span> ` : `${words[i]} `;
        }
        container.innerHTML = newText;
        
        currentWordIndex = (currentWordIndex + 1) % words.length;
    }

    setInterval(updateText, 1000);
}

// Khởi chạy hàm khi trang web tải xong
window.onload = colorWords;
