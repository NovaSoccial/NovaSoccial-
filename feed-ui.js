export const createPostElement = (post) => {
    return `
        <div class="post-card" id="${post.id}">
            <div class="post-header">
                <img src="${post.userPhoto || 'https://via.placeholder.com/40'}" class="user-avatar">
                <span class="username">${post.displayName || 'Anonim'}</span>
            </div>
            <div class="post-content">
                ${post.type === 'video' ? 
                    `<video src="${post.imageUrl}" controls></video>` : 
                    `<img src="${post.imageUrl}" loading="lazy">`}
            </div>
            <div class="post-actions">
                <button onclick="likePost('${post.id}')">❤️ ${post.likes || 0}</button>
                <button onclick="window.location.href='post-detail.html?id=${post.id}'">💬 Yorumla</button>
            </div>
            <div class="post-caption">
                <b>${post.displayName}:</b> ${post.caption}
            </div>
        </div>
    `;
};
