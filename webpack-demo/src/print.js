export default function printMe() {

  if(process.env.NODE_ENV !== 'production'){
    console.log('Looks like we are in development mode!');
  }
  
  console.log('Updating print.js...')
}