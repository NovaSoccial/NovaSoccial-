const forbiddenWords = ["küfür1", "küfür2", "argo1"]; // Burayı genişletebilirsin

export const cleanText = (text) => {
    let cleaned = text;
    forbiddenWords.forEach(word => {
        const regex = new RegExp(word, "gi");
        cleaned = cleaned.replace(regex, "***");
    });
    return cleaned;
};
