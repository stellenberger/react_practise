const initState = {
  posts: [
    {id: 1, title: 'This is some dummy data and I LOVE PEPSI', body: 'lorem ipsum, dolor oaisjdoai aodaoisj o aoids joa do ad'},
    {id: 2, title: 'This is some more dummy data and i dont know what I am doing with redux, but I am learning slowly!', body: 'lorem ipsum, dolor oaisjdoai aodaoisj o aoids joa do ad'},
    {id: 3, title: 'WoOOOOOO take me on holiday, I need the sun!', body: 'lorem ipsum, dolor oaisjdoai aodaoisj o aoids joa do ad'}
  ]
}

const rootReducer = (state = initState, action) => {
  return state
}

export default rootReducer