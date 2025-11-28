// Типи
type Post = {
    title: string;
    body: string;
};

// Модальне вікно
const modal = document.getElementById("modal") as HTMLElement;
const openBtn = document.getElementById("openModal") as HTMLButtonElement;
const closeBtn = document.getElementById("closeModal") as HTMLButtonElement;

openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Scroll івент
window.addEventListener("scroll", () => {
    console.log("Користувач скролить сторінку");
});

// Fetch даних
async function loadPosts(): Promise<void> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: Post[] = await response.json();

    const container = document.getElementById("posts") as HTMLElement;

    container.innerHTML = posts
        .slice(0, 5)
        .map((p: Post) => `<h3>${p.title}</h3><p>${p.body}</p>`)
        .join("");
}

loadPosts();
