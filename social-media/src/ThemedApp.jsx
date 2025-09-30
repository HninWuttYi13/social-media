import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { grey, indigo, red} from '@mui/material/colors';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createContext, useContext, useState, useMemo } from 'react';
import {posts as InitialPosts} from "./data";
import Template from './Template';
import Home from "./Pages/Home"
import AddPost from './Pages/AddPost';
const AppContext = createContext();
export function useApp(){
    return useContext(AppContext);
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/addpost",
            element: <AddPost/>
        }
    ]
  },
  
]);
const ThemedApp = () => {
 const [mode, setMode]=  useState("light");
 const [showDrawer, setShowDrawer] = useState(false);
 const [auth, setAuth] = useState(null);
 const [posts, setPosts]= useState(InitialPosts);
 const [currentPost, setCurrentPost ] = useState(null);
 const addPost = (content, name, img)=> {
    const newPost = {
      id: posts[posts.length-1] + 1,
      content,
      name,
      img: img || null
    };
    setPosts([newPost,...posts])
 }
 const deletePost = (id)=> {
  setPosts(posts.filter(item=> item.id !== id))
 }
const editPost = (updatePost)=> {
  setPosts(posts.map(item=> item.id === updatePost.id ? updatePost : item))
}
 const theme = useMemo(() => {
   return createTheme({
     palette: {
       mode,
       primary: indigo,
       // put custom keys inside "background" or a nested object
       background: {
         banner: mode === "light" ? grey[200] : grey[700],
       },
       text: {
         primary: mode === "light" ? grey[900] : grey[300],
       },
       custom :{
        danger: red[500],
        info: indigo[500]
       }
     },
   });
 }, [mode]);
  
  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{
        mode, 
        setMode, 
        showDrawer, 
        setShowDrawer,
        auth, 
        setAuth, 
        posts, 
        addPost,
        deletePost,
        editPost,
        currentPost,
        setCurrentPost
      }}>
        <RouterProvider router={router}/>
        <CssBaseline />
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default ThemedApp