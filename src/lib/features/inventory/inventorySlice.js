import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1005096,
    label: 'bone in skinless chicken thighs',
    name: 'bone in skinless chicken thighs',
    image: 'chicken-thighs.png',
    aisle: 'Meat',
    possibleUnits: [
      'package',
      'piece',
      'g',
      'oz',
      'serving',
      'thigh with skin',
    ],
    children: [],
  },
  {
    id: 16058,
    label: 'canned chickpeas',
    name: 'canned chickpeas',
    image: 'chickpeas.png',
    aisle: 'Canned and Jarred',
    possibleUnits: ['can', 'g', 'oz', 'cup', 'serving'],
    children: [],
  },
  {
    id: 6016,
    label: 'condensed cream of chicken soup',
    name: 'condensed cream of chicken soup',
    image: 'cream-of-chicken-soup.jpg',
    aisle: 'Canned and Jarred',
    possibleUnits: ['can', 'g', 'oz', 'cup'],
    children: [],
  },
];

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    inventoryAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { inventoryAdded } = inventorySlice.actions

export default inventorySlice.reducer;