const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateBookingFields = ({ fullName, email, zoneId }) => {
  if (!fullName || fullName.trim().length < 3)
    return "Ad soyad en az 3 karakter olmalıdır.";

  if (!email || !emailRegex.test(email))
    return "Geçerli bir e-posta adresi giriniz.";

  const validZoneIds = [1, 2, 3];
  if (!zoneId || !validZoneIds.includes(Number(zoneId)))
    return "Geçerli bir bilet bölgesi seçiniz (1=Ön, 2=Orta, 3=Arka).";

  return null;
};
