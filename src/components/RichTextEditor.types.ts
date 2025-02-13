export interface PlaceholderProps {
  text?: string;
}

export interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  readyOnly?: boolean;
  charLimit?: number;
  showToolbar?: boolean;
}
