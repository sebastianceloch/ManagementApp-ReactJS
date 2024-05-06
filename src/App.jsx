import Sidebar from "./components/Sidebar.jsx";
import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });


  function handleAddTask(text)
  {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask ={
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId
      }
      return{
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
        
      }; 
  });
  }
  function handleDeleteTask(id)
  {
    setProjectsState((prevState) => {
      return{
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }
  function handleDeleteProject()
  {
    setProjectsState((prevState) => {
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      }
    })
  }
  function handleSelectProject(id)
  {
      setProjectsState((prevState) => {
        return{
          ...prevState,
          selectedProjectId: id,
        }
    });
  }
  function handleAddProject()
  {
    setProjectsState((prevState) => {
        return{
          ...prevState,
          selectedProjectId: null
        }
    });
  }

  function handleCancel()
  {
    setProjectsState((prevState) => {
        return{
          ...prevState,
          selectedProjectId: undefined
        }
    })
  }
  function handleProject(projectData){
    setProjectsState((prevState) => {
        const newProject ={
          ...projectData,
          id: Math.random()
        }
        return{
          ...prevState,
          selectedProjectId: undefined,
          projects: [...prevState.projects, newProject]
        }
    })
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
  let content = <SelectedProject project={selectedProject} tasks={projectsState.tasks} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask}/>;
  if(projectsState.selectedProjectId === null)
  {
    content = <NewProject onAdd={handleProject} onCancel={handleCancel}/>
  } else if(projectsState.selectedProjectId === undefined)
  {
    content = <NoProjectSelected onAddProject={handleAddProject}/>
  }
  return (
    <>
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onAddProject={handleAddProject} projects={projectsState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectsState.selectedProjectId}/>
      {content}
    </main>
    </>
  );
}

export default App;
