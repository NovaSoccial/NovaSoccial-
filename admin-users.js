export const renderAdminUserList = (users) => {
    const container = document.getElementById('adminUserList');
    if(!container) return;
    container.innerHTML = users.map(user => `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:15px; border-bottom:1px solid #f0f0f0;">
            <div style="display:flex; align-items:center; gap:10px;">
                <img src="${user.photoURL || 'https://via.placeholder.com/40'}" style="width:35px; height:35px; border-radius:50%;">
                <span style="font-weight:500;">${user.username}</span>
            </div>
            <button onclick="banUser('${user.uid}')" style="color:#ff3b30; border:none; background:none; font-weight:600; cursor:pointer;">Engelle</button>
        </div>
    `).join('');
};
