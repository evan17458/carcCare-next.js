import * as sdk from "node-appwrite";

export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

const client = new sdk.Client();
//創建一個新的 Appwrite 客戶端實例
client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!).setKey(API_KEY!);
//並設置端點、項目 ID 和 API 密鑰。!
//運算符表示這些值不會為 null 或 undefined。
export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);
//01:04:06
//使用已配置的客戶端初始化各種 Appwrite 服務（數據庫、用戶、消息和存儲），
//並將它們導出以供其他模塊使用。

// 這段代碼設置了 Appwrite 的基本配置，並初始化了幾個核心服務。這樣做使得在應用程序的其他部分可以輕鬆地導入和使用這些服務，而無需重複初始化過程。
// 這種方法有助於保持代碼的整潔和模塊化，
// 同時確保整個應用程序使用相同的 Appwrite 客戶端配置。
