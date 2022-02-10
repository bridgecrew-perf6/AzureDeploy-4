export interface ITodo {
    _id?: string;
    title: string;
    isFinished: boolean;
    description?: string;
    createdBy?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  