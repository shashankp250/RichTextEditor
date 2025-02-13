import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
import { ListNode, ListItemNode } from '@lexical/list';
import RichTextEditorTheme from './RichTextEditorTheme';

export const RichTextEditorConfig = {
  editorState: undefined,
  namespace: 'RichTextEditor',
  nodes: [TableNode, TableCellNode, TableRowNode, ListNode, ListItemNode],
  // Handling of errors during update
  onError(error: Error) {
    console.log(error);
    throw error;
  },
  // The editor theme
  theme: RichTextEditorTheme,
  editable: true,
};
