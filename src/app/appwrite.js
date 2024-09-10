import { Client, Account } from 'appwrite';

const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;

export const client = new Client();

client
    .setEndpoint(endpoint)
    .setProject(projectId);

export const account = new Account(client);
export { ID } from 'appwrite';
