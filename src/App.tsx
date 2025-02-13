import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import RichTextEditor from './components/RichTextEditor';
import { setContent } from './store/editorSlice';

function App() {
  const dispatch = useDispatch();
  const editorContent = useSelector((state: any) => state.editor.content);

  const handleChange = (html) => dispatch(setContent(html));

  return (
    <div>
      <RichTextEditor value={editorContent} onChange={handleChange} />
    </div>
  );
}

export default App;
