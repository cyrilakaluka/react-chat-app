import { IChatMessage, IUser } from './interfaces';
import { createContext } from 'react';
import React from 'react';
import { useReducer } from 'react';
import { Reducer } from 'react';
import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';
import { useState } from 'react';

type StoreContextType = {
  messages: IChatMessage[];
  addMessage: (message: IChatMessage) => void;
  deleteMessage: (index: number) => void;
  clearMessages: () => void;
  socket: Socket<DefaultEventsMap, DefaultEventsMap> | null;
  setSocket: (socket: Socket<DefaultEventsMap, DefaultEventsMap>) => void;
  user: IUser | null;
  setUser: (user: IUser) => void;
  users: IUser[];
  addUser: (user: IUser) => void;
  addUsers: (users: IUser[]) => void;
  removeUser: (user: IUser) => void;
  clearUsers: () => void;
};

const initialState: StoreContextType = {
  messages: [],
  addMessage: message => null,
  deleteMessage: index => null,
  clearMessages: () => null,
  socket: null,
  setSocket: () => null,
  user: null,
  setUser: () => null,
  users: [],
  addUser: () => null,
  addUsers: () => null,
  removeUser: () => null,
  clearUsers: () => null,
};

export const StoreContext = createContext(initialState);

type MessagesAction = {
  type: string;
  payload?: IChatMessage | number;
};

type UsersAction = {
  type: string;
  payload?: IUser[] | IUser | string;
};

export const MessageActions = {
  ADD_MESSAGE: 'ADD_MESSAGE',
  CLEAR_MESSAGES: 'CLEAR_MESSAGES',
  DELETE_MESSAGE: 'DELETE_MESSAGE',
};

export const UserActions = {
  ADD_USERS: 'ADD_USERS',
  ADD_USER: 'ADD_USER',
  CLEAR_USERS: 'CLEAR_USERS',
  REMOVE_USER: 'REMOVE_USER',
};

const messagesReducer: Reducer<IChatMessage[], MessagesAction> = (state, { type, payload }) => {
  switch (type) {
    case MessageActions.ADD_MESSAGE:
      return [...state, payload as IChatMessage];
    case MessageActions.CLEAR_MESSAGES:
      return [];
    case MessageActions.DELETE_MESSAGE:
      payload = payload as number;
      if (isNaN(payload)) throw new Error(`The action payload must be a number, received ${payload}`);
      return state.filter((message, index) => index !== payload);
    default:
      return state;
  }
};

const usersReducer: Reducer<IUser[], UsersAction> = (state, { type, payload }) => {
  switch (type) {
    case UserActions.ADD_USER:
      return [...state, payload as IUser];
    case UserActions.ADD_USERS:
      return [...state, ...(payload as IUser[])];
    case UserActions.CLEAR_USERS:
      return [];
    case UserActions.REMOVE_USER:
      return state.filter(user => user.id !== (payload as string));
    default:
      return state;
  }
};

export const StoreProvider: React.FC = ({ children }) => {
  const [messages, messagesDispatch] = useReducer(messagesReducer, []);
  const [socket, setSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap> | null>(null);
  const [user, setUser] = useState<IUser | null>(null);
  const [users, usersDispatch] = useReducer(usersReducer, []);

  const addMessage = (message: IChatMessage) => {
    messagesDispatch({ type: MessageActions.ADD_MESSAGE, payload: message });
  };

  const deleteMessage = (index: number) => {
    messagesDispatch({ type: MessageActions.DELETE_MESSAGE, payload: index });
  };

  const clearMessages = () => {
    messagesDispatch({ type: MessageActions.CLEAR_MESSAGES });
  };

  const addUser = (user: IUser) => usersDispatch({ type: UserActions.ADD_USER, payload: user });

  const addUsers = (users: IUser[]) => usersDispatch({ type: UserActions.ADD_USERS, payload: users });

  const removeUser = (user: IUser) => usersDispatch({ type: UserActions.REMOVE_USER, payload: user.id });

  const clearUsers = () => usersDispatch({ type: UserActions.CLEAR_USERS });

  const data = {
    messages,
    addMessage,
    deleteMessage,
    clearMessages,
    socket,
    setSocket: (socket: Socket<DefaultEventsMap, DefaultEventsMap>) => setSocket(socket),
    user,
    setUser: (user: IUser) => setUser(user),
    users,
    addUser,
    addUsers,
    removeUser,
    clearUsers,
  };

  return <StoreContext.Provider value={data}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
