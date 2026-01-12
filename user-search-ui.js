export const renderSearchResults = (users) => {
    const list = document.getElementById('searchList');
    if(!list) return;
    list.innerHTML = users.map(user => `
        <div class="user-row" onclick="window.location.href='profile.html?uid=${user.uid}'">
            <img src="${user.photoURL || 'https://via.placeholder.com/40'}" class="mini-avatar">
            <span>${user.username}</span>
        </div>
    `).join('');
};
