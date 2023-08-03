const ENCRYPTION_KEY = import.meta.env.VITE_ENCRYPTION_KEY
import CryptoJS from 'crypto-js';

export default class UserInfoSave {
    private itemName: string

    public constructor(localStorageItemName: string) {
        this.itemName = localStorageItemName
    }

    private encryptData(data: any) {
        const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), ENCRYPTION_KEY).toString();
        return encryptedData;
    };

    private decryptData(encryptedData: any) {
        const bytes = CryptoJS.AES.decrypt(encryptedData, ENCRYPTION_KEY);
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return decryptedData;
    };

    public saveData(data: any) {
        const encrypted = this.encryptData(data)
        localStorage.setItem(this.itemName, encrypted)
    }

    public getSavedData() {
        const savedItem = localStorage.getItem(this.itemName)
        if (savedItem == null) return null

        return this.decryptData(savedItem)
    }

    public deleteSavedData() {
        localStorage.removeItem(this.itemName)
    }
}