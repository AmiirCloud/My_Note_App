
import AddNote from "./components/AddNote";
import Notes from "./components/Notes";
import EditNote  from './components/EditNote' 
import {Routes,Route,useLocation } from "react-router-dom";
import { deleteNote } from "./Store/api/NotesSlice";

function App() {
  const location   = useLocation()
  return (
    <div className="bg-blue-600 min-h-screen flex">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl text-white mb-5 mt-5">My Notes</h3>
          { /* Add here all the components you need */ }
          { /* Halkaas ku dar components-ka aad u baahan tahay */ }
        {  location.pathname === "/"
        ?<AddNote/>:
        <Routes>
          <Route path='edit_Note/:id'   element={<EditNote/>}/>
          <Route path="delete_note/:id" ></Route>
        </Routes>
        }
        
          
          <Notes/>
        </div>
      </div>
    </div>
  );
}

export default App;