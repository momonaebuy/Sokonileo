const initState={
 
    comments:[]     
 
}
const commentReducer=(state=initState,action)=>{
  switch(action.type){
    case 'ADD-COMMENT':
      console.log('addede');

  }
    return state;

}
export default commentReducer