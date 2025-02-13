import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';

//Plugins
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { TablePlugin } from '@lexical/react/LexicalTablePlugin';
import ToolbarPlugin from './plugin/ToolbarPlugin';
import MaxLengthPlugin from './plugin/MaxLengthPlugin';
import TableHoverActionsPlugin from './plugin/TableHoverActionsPlugin';
import TableCellResizerPlugin from './plugin/TableCellResizerPlugin';
import HtmlPlugin from './plugin/HtmlPlugin';

import { RichTextEditorProps } from './RichTextEditor.types';
import { RichTextEditorConfig } from './RichTextEditorConfig';
import Placeholder from './Placeholder';
import { useState } from 'react';

const RichTextEditor = ({
  value,
  onChange,
  charLimit = 500,
  readyOnly = false,
  showToolbar = true,
}: RichTextEditorProps) => {
  const [floatingAnchorElem, setFloatingAnchorElem] =
    useState<HTMLDivElement | null>(null);

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };

  return (
    <LexicalComposer
      initialConfig={{ ...RichTextEditorConfig, editable: !readyOnly }}
    >
      <div className="editor-container">
        {showToolbar && <ToolbarPlugin />}
        <div className="editor-inner">
          <RichTextPlugin
            contentEditable={
              <div className="editor-scroller">
                <div className="editor" ref={onRef}>
                  <ContentEditable className="editor-input" />
                </div>
              </div>
            }
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <MaxLengthPlugin maxLength={charLimit} />
          <TablePlugin />
          <TableCellResizerPlugin />
          {floatingAnchorElem && (
            <>
              <TableHoverActionsPlugin anchorElem={floatingAnchorElem} />
            </>
          )}
          <HtmlPlugin onHtmlChanged={onChange} initialHtml={value} />
        </div>
      </div>
    </LexicalComposer>
  );
};

export default RichTextEditor;
