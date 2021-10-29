import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, getDoc, doc, setDoc, deleteDoc, updateDoc } from 'firebase/firestore/lite'

// interface char {
//   X: number,
//   Y: number,
//   id: string,
// }
// interface staticDim {
//   height: number,
//   width: number,
// }

const config = {
  apiKey: "AIzaSyCETwbX3YXvEcS8BpUxqUSIru7i3D0gBn8",
  authDomain: "where-s-waldo-9819a.firebaseapp.com",
  projectId: "where-s-waldo-9819a",
  storageBucket: "where-s-waldo-9819a.appspot.com",
  messagingSenderId: "48667775749",
  appId: "1:48667775749:web:63a2b3f3b938730c615d6c",
  measurementId: "G-YR0BLHKNJ4"
};

const app = initializeApp(config);
const db = getFirestore(app);

const fetchChars = async() => {
  const coordsRef = collection(db, 'coords');
  const getCoords = await getDocs(coordsRef);
  const charList: Array<any> = [];
  await getCoords.forEach((doc) => {
    if(doc.id === 'staticSize') return;
    const data = doc.data();
      data.id = doc.id;
      charList.push(data);
  })
  return charList;
}

const fetchStaticDimensions = async() => {
  const snap = await getDoc(doc(db, 'coords', 'staticSize'))
  return snap.data();
}


export { fetchChars, fetchStaticDimensions };