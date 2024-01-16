export interface IPanel {
  title: string;
  buttons: { [key: string]: string };
}

export interface eventData {
  title: string;
  description: string;
  Date: string;
  required: boolean;
  Time: null | string;
  category: string;
}

export interface taskData {
  title: string;
  description: string;
  category: string;
  required: boolean;
  Date: null | string;
}

export interface noteData {
  description: string;
  category: string;
  
  Date: string;
}
export interface eventDataMongoDb {
  Date: string;
  Time: null | string;
  category: string;
  description: string;
  required: boolean;
  title: string;
  userId: string;
  __v: number;
  _id: string;
}
export interface taskDataMongoDb {
  title: string;
  description: string;
  category: string;
  required: boolean;
  Date: null | string;
  userId: string;
  __v: number;
  _id: string;
}
export interface noteDataMongoDb {
  
  description: string;
  Date: null | string;
  category: string;
  userId: string;
  __v: number;
  _id: string;
}
