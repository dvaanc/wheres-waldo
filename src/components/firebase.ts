import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, getDoc, doc, setDoc, deleteDoc, updateDoc } from 'firebase/firestore/lite'
import { getStorage, ref, listAll, getDownloadURL, } from 'firebase/storage';

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
const storage = getStorage();
const charRef = ref(storage, 'characters/');

const fetchCharsInfo = async() => {
  const imgCollection = [] as any;
  await listAll(charRef)
    .then((folder) =>  folder.items.forEach((img) => {
      const imgName = img.name.replace(/\.[^/.]+$/, "");
      const getURL = getDownloadURL(img).then((url: string) => url)
      const URL = getURL.then((res) => res)
      console.log(URL);
      imgCollection.push({
        name: imgName,
        src: URL,
      })
    }))
    .then((res) => {
      console.log(res)
    })

    return imgCollection;
  }
const fetchCharsData = async() => {
  const coordsRef = collection(db, 'coords');
  const getCoords = await getDocs(coordsRef);
  const charList: Array<any> = [];
  await getCoords.forEach((doc) => {
    if(doc.id === 'staticSize') return;
    const data = doc.data();
      charList.push(data);
  })
  return charList;
}

const fetchStaticDimensions = async() => await getDoc(doc(db, 'coords', 'staticSize'));

export { fetchCharsData, fetchStaticDimensions, fetchCharsInfo, };