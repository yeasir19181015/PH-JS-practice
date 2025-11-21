document.getElementById("add-btn").addEventListener("click", function () {

    const fixedComment = "This is a fixed comment!";

    document.getElementById("comment-box").innerHTML += `
        <p class="comment">${fixedComment}</p>
    `;
});
