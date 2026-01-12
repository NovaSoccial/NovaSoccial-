// Stories Mantığı - NovaSoccial
export const loadStories = () => {
    const storyData = [
        { id: 1, user: "Sen", img: "https://picsum.photos/100/100?random=10" },
        { id: 2, user: "Ali", img: "https://picsum.photos/100/100?random=11" },
        { id: 3, user: "Ayşe", img: "https://picsum.photos/100/100?random=12" }
    ];

    const container = document.querySelector('.stories-container');
    if(!container) return;

    container.innerHTML = storyData.map(story => `
        <div class="story" onclick="alert('${story.user} hikayesi açılıyor...')">
            <div class="story-ring">
                <img src="${story.img}" alt="${story.user}">
            </div>
            <span>${story.user}</span>
        </div>
    `).join('');
};
