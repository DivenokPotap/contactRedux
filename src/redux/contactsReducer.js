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

  export const addContact = (text,number) => {
    return{
    type : "contacts/addContact",
    payload : {
        id: nanoid(),
        text,
        number,
        checked: false,
    }
    }
  }

  export const deleteContact = (contactid) => {
    return {
        type : "contacts/deleteContact",
        payload : contactid
    }
}

export const toggle = (contactid) => {
    return {
        type : "contacts/toggle",
        payload : contactid
    }
}

export const contactReducer = (state = contactInitialState, action) => {
    switch(action.type) {
        case "contacts/addContact":
            return [...state, action.payload];
        case "contacts/deleteContact":
            return state.filter(contact=>contact.id !== action.payload);      
        case "contacts/toggle":
            return state.map(contact =>{
                if (contact.id !== action.payload){
                    return contact;
                }
                return {...contact, checked: !contact.checked};
            });   
            default:
            return state;   
        }
}