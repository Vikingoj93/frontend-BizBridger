export const validateDateForm = (eventDate: string) => {
  const date = new Date(eventDate).toJSON().slice(0, 10);
  const currentDate = new Date().toJSON().slice(0, 10);
  return date >= currentDate;
};

export const validateCategoryForm = (category: string) => {
  const validator: string[] = ["trabajo", "personal", "otros"];
  return !validator.includes(category);
};

export const validateTimeForm = (eventTime: string) => {
  const currentTime = new Date();
  const [hours, minutes] = eventTime.split(":").map(Number); // Divide la hora en horas y minutos
  const eventDateTime = new Date(
    currentTime.getFullYear(),
    currentTime.getMonth(),
    currentTime.getDate(),
    hours,
    minutes
  );

  return eventDateTime >= currentTime;
};
