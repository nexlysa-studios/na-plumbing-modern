export const WHATSAPP_NUMBER = "27829277339";
export const PHONE_DISPLAY = "082 9277 339";
export const PHONE_TEL = "+27829277339";
export const EMAIL = "info@naplumbing.co.za";

export function whatsappUrl(message = "Hi NA Plumbing,\nI'd like to request a plumbing quote.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}