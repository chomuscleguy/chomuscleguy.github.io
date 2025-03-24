document.addEventListener("DOMContentLoaded", function () {
    let currentPage = 1;
    const pageNumber = document.getElementById("pageNumber");
    const prevPage = document.getElementById("prevPage");
    const nextPage = document.getElementById("nextPage");
    const postList = document.getElementById("postList");
    const postContent = document.getElementById("postContent");
    const boardTitle = document.getElementById("boardTitle");
    const visitorCount = document.getElementById("visitor-count");

    let visitor = localStorage.getItem("visitorCount") || 0;
    visitor++;
    localStorage.setItem("visitorCount", visitor);
    visitorCount.innerText = visitor;

    function loadPosts(boardName) {
        boardTitle.innerText = boardName;
        postList.innerHTML = "";
        postContent.innerHTML = "";
        
        for (let i = 1; i <= 5; i++) {
            let post = document.createElement("li");
            post.innerText = `${boardName}의 게시글 ${i}`;
            post.onclick = function () {
                postContent.innerHTML = `<h3>${boardName}의 게시글 ${i}</h3><p>이곳에 게시글 내용이 들어갑니다.</p>`;
            };
            postList.appendChild(post);
        }
    }

    window.showPosts = loadPosts;

    prevPage.addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            pageNumber.innerText = currentPage;
        }
    });

    nextPage.addEventListener("click", function () {
        currentPage++;
        pageNumber.innerText = currentPage;
    });
});
