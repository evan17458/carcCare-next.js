import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

// FORMAT DATE TIME
export const formatDateTime = (
  dateString: Date | string,
  timeZone: string = Intl.DateTimeFormat().resolvedOptions().timeZone
) => {
  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    // weekday: "short", // abbreviated weekday name (e.g., 'Mon')
    month: "short", // abbreviated month name (e.g., 'Oct')
    day: "numeric", // numeric day of the month (e.g., '25')
    year: "numeric", // numeric year (e.g., '2023')
    hour: "numeric", // numeric hour (e.g., '8')
    minute: "numeric", // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false),
    timeZone: timeZone, // use the provided timezone
  };

  const dateDayOptions: Intl.DateTimeFormatOptions = {
    weekday: "short", // abbreviated weekday name (e.g., 'Mon')
    year: "numeric", // numeric year (e.g., '2023')
    month: "2-digit", // abbreviated month name (e.g., 'Oct')
    day: "2-digit", // numeric day of the month (e.g., '25')
    timeZone: timeZone, // use the provided timezone
  };

  const dateOptions: Intl.DateTimeFormatOptions = {
    month: "short", // abbreviated month name (e.g., 'Oct')
    year: "numeric", // numeric year (e.g., '2023')
    day: "numeric", // numeric day of the month (e.g., '25')
    timeZone: timeZone, // use the provided timezone
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric", // numeric hour (e.g., '8')
    minute: "numeric", // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
    timeZone: timeZone, // use the provided timezone
  };

  const formattedDateTime: string = new Date(dateString).toLocaleString(
    "zh-TW",
    dateTimeOptions
  );

  const formattedDateDay: string = new Date(dateString).toLocaleString(
    "zh-TW",
    dateDayOptions
  );

  const formattedDate: string = new Date(dateString).toLocaleString(
    "zh-TW",
    dateOptions
  );

  const formattedTime: string = new Date(dateString).toLocaleString(
    "zh-TW",
    timeOptions
  );

  return {
    dateTime: formattedDateTime,
    dateDay: formattedDateDay,
    dateOnly: formattedDate,
    timeOnly: formattedTime,
  };
};

// dateTime：完整的日期和時間（例如：Oct 25, 2023, 8:30 AM）
// dateDay：帶星期的日期（例如：Mon, 10/25/2023）
// dateOnly：僅日期（例如：Oct 25, 2023）
// timeOnly：僅時間（例如：8:30 AM）

//  Intl.DateTimeFormat():

// Intl 是 JavaScript 的國際化 API。
// DateTimeFormat 是用於語言敏感的日期和時間格式化的構造函數。
// 不帶參數調用時，它會使用默認的區域設置（通常是使用者的系統設置）。
// .resolvedOptions():
// 這個方法返回一個對象，包含了 DateTimeFormat 對象的已解析選項。
// 這些選項反映了實際使用的區域設置和格式化選項，包括時區。
// .timeZone:
// 這是從 resolvedOptions() 返回的對象中提取的 timeZone 屬性。
// 它表示系統當前設置的時區。
// 綜合起來，這段程式碼的作用是：
// 創建一個基於使用者系統設置的 DateTimeFormat 對象。
// 獲取該對象的已解析選項。
// 從這些選項中提取時區信息。
// 實際應用中，這可能會返回類似 "Asia/Taipei"（如果用戶在台灣）或 "America/New_York"（如果用戶在紐約）的值。
// 使用這種方法的優點是：
// 自動適應：它會自動使用系統設置，無需手動指定時區。
// 跨平台兼容：在不同的設備和操作系統上都能正常工作。
// 處理夏令時：返回的時區會自動考慮夏令時的變化。
// 需要注意的是，這個方法依賴於使用者的系統設置。如果用戶的系統時區設置不正確，
//或者您的應用需要使用特定的時區而不是用戶的本地時區，那麼您可能需要考慮其他方法來指定時區。
// 在我們的 formatDateTime 函數中，這個方法被用作默認值，
//允許函數在沒有明確指定時區時使用系統的時區設置。這提供了很好的靈活性，
//既可以使用默認的本地時區，也可以根據需要指定其他時區。

export function encryptKey(passkey: string) {
  return btoa(passkey);
}
// btoa 是 JavaScript 中的一個內建函數，用於將字符串編碼為 Base64 格式。
// 具體來說，btoa 將一個字符串進行二進制到 ASCII 字符的轉換，並返回一個 Base64 編碼的字符串。
export function decryptKey(passkey: string) {
  return atob(passkey);
}
