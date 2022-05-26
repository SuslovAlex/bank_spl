import { DocumentData, DocumentReference } from 'firebase/firestore';

export interface IUser {
    id: string
    email: string
    cards: Array<DocumentReference<DocumentData>>
} 