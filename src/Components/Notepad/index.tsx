import './index.scss'
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools"
import axios from 'axios';
const Notepad:React.FC = () => {
  async()=>{
  try{
  const response = await axios.get("https://api.jdoodle.com/v1/execute");
   console.log(response.data); 
  }
  catch(error){
    console.error(error);
    }
  }
  return(
     <section className="note_container">
      <AceEditor
    mode="java"
    theme="terminal"
    width='100%'
    height='50vh'    
  
    fontSize={30}    
    name="UNIQUE_ID_OF_DIV"
    editorProps={{ $blockScrolling: true }}
    setOptions={{
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true
    }}
  /> 
    </section>
  )
}
export default Notepad
