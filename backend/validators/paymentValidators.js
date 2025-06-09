// Card validation regex patterns
const cardNumberRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|2[2-7][0-9]{14})$/;
const expirationDateRegex = /^(0[1-9]|1[0-2])([0-9]{2})$/; // MMYY format
const cvcRegex = /^[0-9]{3,4}$/;

export const validatePaymentFields = ({ nameSurname, cardNumber, expirationDate, cvc }) => {
  if (!nameSurname || nameSurname.trim().length < 3) {
    return "İsim ve soyisim en az 3 karakter olmalıdır.";
  }

  if (!cardNumber) {
    return "Kart numarası girilmelidir.";
  }

  // Remove any spaces from card number before validation
  const cleanCardNumber = cardNumber.replace(/\s/g, "");
  if (!cardNumberRegex.test(cleanCardNumber)) {
    return "Kart numarası geçersiz! Visa (4xxx...) veya MasterCard (5xxx... / 2xxx...) formatında 16 haneli bir numara giriniz.";
  }

  if (!expirationDate) {
    return "Son kullanma tarihi girilmelidir.";
  }

  // Remove any slashes from expiration date before validation
  const cleanExpiry = expirationDate.replace(/\//g, "");
  if (!expirationDateRegex.test(cleanExpiry)) {
    return "Son kullanma tarihi geçersiz! Lütfen 'MMYY' formatında (örn. 0527) giriniz.";
  }

  if (!cvc) {
    return "CVC kodu girilmelidir.";
  }

  if (!cvcRegex.test(cvc)) {
    return "CVC geçersiz! Lütfen 3 veya 4 haneli sayısal bir değer giriniz.";
  }

  return null;
};
