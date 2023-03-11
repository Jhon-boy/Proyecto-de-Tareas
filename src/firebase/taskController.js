
import { addDoc, collection , getDocs, setDoc, doc} from "firebase/firestore"
import { db } from "."

export const addTask = task =>{
    return addDoc(collection(db, 'tareas'), task);

}

export const getTasks = async () =>{

    const querySnapshot = await getDocs(collection(db, "tareas"));
    const tasks = querySnapshot.docs.map(doc =>{
        return { ...doc.data(), id: doc.id}
    })
   return tasks;
    
}

export const completado = (task) =>{
    return setDoc(doc(db, 'tareas', task.id), {
        ...task,
        completed: !task.completed
    });

}