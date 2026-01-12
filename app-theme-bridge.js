export const AppColors = {
    main: "#ffffff",
    text: "#262626",
    border: "#dbdbdb",
    link: "#0095f6"
};

export const applyTheme = () => {
    document.body.style.backgroundColor = AppColors.main;
    document.body.style.color = AppColors.text;
};
