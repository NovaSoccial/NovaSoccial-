export const sharePostLink = (postId) => {
    const shareUrl = `${window.location.origin}/NovaSoccial-/?post=${postId}`;
    if (navigator.share) {
        navigator.share({ title: 'Nova Soccial', url: shareUrl });
    } else {
        navigator.clipboard.writeText(shareUrl);
        alert("Link kopyalandı!");
    }
};
