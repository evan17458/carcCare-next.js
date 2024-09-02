"use server";

import { ID, InputFile, Query, Client, Users } from "node-appwrite";

import {
  BUCKET_ID,
  DATABASE_ID,
  ENDPOINT,
  PATIENT_COLLECTION_ID,
  PROJECT_ID,
  databases,
  storage,
  users,
} from "../appwrite.config";
import { parseStringify } from "../utils";

// CREATE APPWRITE USER

// 初始化 Users 服務
//
// Create new user -> https://appwrite.io/docs/references/1.5.x/server-nodejs/users#create
export const createUser = async (user: CreateUserParams) => {
  // console.log("user.phone", user.phone);//要+8860935397742;
  //api要求phone要有國碼
  try {
    const newuser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );

    // 使用 Appwrite 的 users.create 方法創建新用戶。
    // 參數包括：唯一ID、電子郵件、電話、密碼（這裡設為 undefined）和名稱。
    // 創建成功後，通過 parseStringify 函數處理並返回新用戶資料。
    // console.log("newuser-->", newuser);
    return parseStringify(newuser);
  } catch (error: any) {
    // Check existing user
    // 1:18:07
    if (error && error?.code === 409) {
      //系統發現已經存在具有相同 ID、電子郵件或電話號碼的使用者
      const existingUser = await users.list([
        Query.equal("email", [user.email]),
      ]);

      //console.log("existingUser", existingUser);
      return existingUser.users[0];
    }
    console.error("An error occurred while creating a new user:", error);
  }
};

// 如果創建過程中出現錯誤，進入 catch 區塊。
// 特別處理錯誤碼 409（通常表示資源已存在）。
// 如果是 409 錯誤，嘗試查找已存在的用戶並返回。
// 其他錯誤則記錄到控制台。
// 1:16:21
// GET USER
export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);

    return parseStringify(user);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the user details:",
      error
    );
  }
};
// 01:26:24
// REGISTER PATIENT
export const registerPatient = async ({
  identificationDocument,
  ...patient
}: RegisterUserParams) => {
  try {
    // Upload file ->  // https://appwrite.io/docs/references/cloud/client-web/storage#createFile
    let file;
    if (identificationDocument) {
      const inputFile =
        identificationDocument &&
        InputFile.fromBlob(
          identificationDocument?.get("blobFile") as Blob,
          identificationDocument?.get("fileName") as string
        );

      file = await storage.createFile(BUCKET_ID!, ID.unique(), inputFile);
    }
    // Create new patient document -> https://appwrite.io/docs/references/cloud/server-nodejs/databases#createDocument
    const newPatient = await databases.createDocument(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      ID.unique(),
      {
        identificationDocumentId: file?.$id ? file.$id : null,
        identificationDocumentUrl: file?.$id
          ? `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file.$id}/view??project=${PROJECT_ID}`
          : null,
        ...patient,
      }
    );
    // 02:25:58
    return parseStringify(newPatient);
  } catch (error) {
    console.error("An error occurred while creating a new patient:", error);
  }
};
// 2:21:53
export const getPatient = async (userId: string) => {
  try {
    const patients = await databases.listDocuments(
      DATABASE_ID!, //從上面appwrite.config拿到
      PATIENT_COLLECTION_ID!, //從上面appwrite.config拿到
      [Query.equal("userId", [userId])]
    );

    return parseStringify(patients.documents[0]);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the patient details:",
      error
    );
  }
};
// 2:43:51
