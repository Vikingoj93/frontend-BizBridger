  export interface IPanel {
    title: string,
    buttons: {[key: string]: string}
  }

  export interface eventData {
    title: string,
    description: string,
    eventDate: string,
    requiresTime: boolean,
    timeDate: null |string,
    category: string,
  }

  export interface taskData {
    title: string,
    description: string,
    category: string,
    requiresTime: false,
    taskDate: null | string,
  }

  export interface noteData {
    description: string,
    category: string
  }