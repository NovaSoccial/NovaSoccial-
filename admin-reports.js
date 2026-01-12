export const renderReports = (reports) => {
    const list = document.getElementById('reportList');
    return reports.map(rep => `
        <div style="margin:10px; padding:15px; background:#fafafa; border-radius:8px; border:1px solid #eee;">
            <p style="font-size:12px; color:#8e8e8e;">Sebep: ${rep.reason}</p>
            <div style="display:flex; gap:10px; margin-top:10px;">
                <button onclick="deletePost('${rep.postId}')" style="background:#ff3b30; color:white; border:none; padding:5px 10px; border-radius:4px;">Sil</button>
                <button onclick="ignoreReport('${rep.id}')" style="background:#eee; color:#262626; border:none; padding:5px 10px; border-radius:4px;">Yoksay</button>
            </div>
        </div>
    `).join('');
};
