import { PlaceholderProps } from './RichTextEditor.types';

const Placeholder = ({
  text = 'Enter some rich text...',
}: PlaceholderProps) => {
  return <div className="editor-placeholder">{text}</div>;
};

export default Placeholder;
