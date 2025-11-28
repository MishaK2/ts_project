"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Модальне вікно
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
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
function loadPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = yield response.json();
        const container = document.getElementById("posts");
        container.innerHTML = posts
            .slice(0, 5)
            .map((p) => `<h3>${p.title}</h3><p>${p.body}</p>`)
            .join("");
    });
}
loadPosts();
