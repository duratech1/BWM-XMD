const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUa4+iSBT9K5v6qrPKS8Skk0UEnwgoyGMz2RRQQCkgDQWKHf/7Bu1OzyY7s73fKvU499Q55943kJ9xhdaoBZM3UJS4gQR1S9IWCEzAtI4iVII+CCGBYAJ6OlNjnRa8hmQoMdjpVSXpuM3qTYRErfFoxTG2oWoTKngB9z4oaj/Fwa8Aext7nBhb9bjMdeFkq1azMXQP3U6ijc2Nu9DWPSFTc2VXvYB7hwhxifNYLhKUoRKma9TqEJdfo1+rm00tZcvxvjjWZoMxGfXSqooJGhzlaly2TTO6lNz04rBfo3+I4mSXl9dToAkcvy9q/Wa16Lpu8GZu+EEhMDM4y1aKdwqe9Csc5yhchignmLRf1t3eNik2jzZjHefYmuWlfvUWTI9Is+uaU13UMy1vmXtRSltfI56G0uFYKBwvRCP+5jSmwkw9JYXctUqOl4hKDpoj28axd4t/JK6XH1k5/R/drcVcKPUFzlV9sF+79k3lN/vWWvfmvA9vQRsfgq2pxYGfn75Gv5mP5RuTJW6tE1vReHFl9GyKTnZTW5zp+2IVeNzIXa6YqfFJH5K6/BVLj5A0UV0mKvi5cboNJDHSL8tEuxy0Ynjw0nwvDBY6rGEU9hxE2fTQbwdebU654U2kg2DBrdnNmpbrfE18nkn0mHGSy8vjRyfULkMwoe59UKIYV6SEBJ/zbo9h+gCGzR4FJSIPdYFl0ydJ3vdy3j3YW9HaIXE/EC+6YylaeSmE12CVBwspOPryC+iDojwHqKpQuMAVOZetiqoKxqgCkz+/90GOruTp26Ma3QcRLiti5XWRnmH4YerHIQyCc52TfZsHUrdAJZgMP7cRITiPq07GOodlkOAGSQkkFZhEMK3QvQ9C1OAAdXhAU8xzpLKp4b+asjabN57y1zDuKCfn/HklpLgohOPRt+Fw5H9j/RB+g2N/9G0UhIjlonDIDkegD/B7y3RvfuqgMlg2LgywM1VGJ4Uqh3uFEMw6smk8XHhKj0oUggkpa9QHPgxOdWGeTyj/Be6rVakXCzYrh2ZXwerIbLeSOm3kU6D+gPu0FEzePseUdA47vMN27dKiwoI+yB4JxN3PaYah2TFPjVh+NGHHf1S/XzohYVH8niMC+iCH3W0wq0vop+i3eQmLBF+7gu9udFAhIhCnFZgAaRWxgmYo8qbGuKzmc7GKRSkWwad7H13wjJmsatFwteQcpuZ0pDBn4qnMzJ5tDlRi+5kSIa8K+O1uKS9f/gWko8aFVt0aR6coDUJOuSuNS6VST85YPktQcxdDQ7DGhjNwOXvDtMagWl3J9RiXzsVBgsJSbSkzihfMwyq3hXEvPdb+THzpqj1T9I9iuOgFwx6lh7fFMqFFe0u1r6xDS7Qoixe3Z0wXKECvjnB02KMaCo7MRJkzdqUlfb7uzFduxQvGJmXcxZ5UARrvqsBMjGd/PuZD+j6X8aN13t4zF2H0GHPvbvyna5/xH977P2C8D86fRGy6m81yQdprB4GvTSYJRxvb3F6ouKVC95BxicNk/kK7WfupBO73731QpJBE5zIDE1BlPgR9kMKKiJ/ta+IMVQRmBZhQPMNyFC3w1P1vHiRW+vMHAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Durable",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Durable Graphix",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

