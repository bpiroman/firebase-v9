# Firebase V9

testing testing

### Firestore

```js
import {query, where, collection} from "firebase/firestore";

// Initialize auth && firestore with the 'firebaseApp' property
const db = getFirestore(app);

// Collection/doc ref
const collectionRef = collection(db, "some-collection");

// Use a query with collection listener
const collectionListener = (collection) => {
const collectionQuery = query(collectionRef, where("some-data", "==", true));

onSnapshot(collectionQuery, (querySnapshot) => {
    let dataArray = [];
    querySnapshot.forEach((doc) => {
    dataArray.push(doc.data());
    });
    dataArray.map((d) => console.log(d));
});
};
```