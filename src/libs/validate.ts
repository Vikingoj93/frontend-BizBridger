import {date, hours} from '@/libs/config'

export const validateDateForm = (eventDate: string) => {
  const dateForm = new Date(eventDate).toJSON().slice(0, 10);
  const currentDate = date;
  return dateForm >= currentDate;
};

export const validateCategoryForm = (category: string) => {
  const validator: string[] = ["trabajo", "personal", "otros"];
  return !validator.includes(category);
};

export const validateTimeForm = (eventTime: string) => {
  const currentTime = hours;
  return eventTime >= currentTime;
};

export function validateTitleFrom(value: string) {
  const trimmedTitle = value.trim();
    return trimmedTitle !== ""
  }
export function validateDescriptionFrom(value: string) {
  const trimmedDescription = value.trim();
    return trimmedDescription !== ""
  }

export function validateMaxLength(max: number, value: number) {
  const limitCharacters = max
  const valueData = value
  return valueData > limitCharacters
}