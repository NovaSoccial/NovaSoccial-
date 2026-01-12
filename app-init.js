import { watchConnection } from './network-detector.js';
import { fixLayout } from './ui-fixer.js';

export const startApp = () => {
    watchConnection();
    fixLayout();
    console.log("Nova Soccial v1.0.5 Başarıyla Yüklendi.");
};
startApp();
