import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid"

const contactInitialState = [
    {
      id: 1,
      text: "Іван Петренко",
      number: "+380501112233",
      checked: false,
    },
    {
      id: 2,
      text: "Олена Коваль",
      number: "+380671234567",
      checked: true,
    },
    {
      id: 3,
      text: "Максим Шевченко",
      number: "+380931234567",
      checked: false,
    },
    {
      id: 4,
      text: "Анна Бондар",
      number: "+380991112233",
      checked: true,
    },
];
  
const contactSlice = createSlice({
  name: "contacts", initialState: contactInitialState, reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload)
      }, prepare(text, number) {
  return {
    payload: {
      id: nanoid(),
      text,
      number,
      checked: false,
    },
  };
      }
    },
    deleteContact(state, action) {
      const index = state.findIndex((contact) => contact.id === action.payload);
      state.splice(index, 1);
    },
    toggle(state, action) {
      return state.map(contact =>{
                if (contact.id !== action.payload){
                    return contact;
                }
                return {...contact, checked: !contact.checked};
            });   
        }}  
})
  
export const { addContact, deleteContact, toggle } = contactSlice.actions
export const contactReducer = contactSlice.reducer