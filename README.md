//App.tsx

<!-- import { CLEAR_HISTORY_COMMAND } from "lexical";
import React, { useState } from 'react';
import FileUploadDownload from "./plugins/FileUploadDownload";
import Editor from "./Editor";
import "./playground-index.css";
import "./styles.css";


export default function App() {
  const [html, setHTML] = useState("");
  const [templateVariables, setTemplateVariables] = useState("");
  const [editor, setEditor] = useState(null);
  const [json, setJSON] = useState("");


  const onLoad = (fileContents) => {
    const editorState = editor.parseEditorState(
      fileContents
    );
    editor.setEditorState(editorState);
    editor.dispatchCommand(CLEAR_HISTORY_COMMAND, undefined);
  }
  return (
    <div className="App" style={{ marginTop: "7%" }}>
      <h1 style={{ color: "#00008B", letterSpacing: "0.5px", fontWeight: "400" }} >email template editor</h1>
      <textarea placeholder={" $firstName=Jane, $lastName=Doe, etc. "} value={templateVariables} style={{ paddingTop: "5px", height: "20px", minWidth: "305px", maxWidth: "600px", border: "1px solid #ddd", marginTop: "2%", color: "#ddd", borderRadius: "5px", color: "#00008B" }} onChange={(event) => setTemplateVariables(event.target.value)} />
      <Editor setHTML={setHTML} setJSON={setJSON} setEditor={setEditor} style={{ color: "#00008B" }} />
      <FileUploadDownload onLoad={onLoad} json={json} html={html} templateVariables={templateVariables} />
    </div>
  );
} -->

//Editor

<!-- import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { $generateHtmlFromNodes } from '@lexical/html';
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { ListItemNode, ListNode } from "@lexical/list";
import { TRANSFORMERS } from "@lexical/markdown";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { $getRoot } from 'lexical';
import { MentionNode } from './nodes/MentionNode.jsx';
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
import MentionsPlugin from "./plugins/MentionsPlugin";
import SetEditorPlugin from "./plugins/SetEditorPlugin";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import ExampleTheme from "./themes/ExampleTheme";

function Placeholder() {
  return <div className="editor-placeholder">Type '$$' to view all variables or  '$' followed by the first few letters of the desired <br /> variable to search for it.</div>;
}

const editorConfig = {
  // The editor theme
  theme: ExampleTheme,
  // Handling of errors during update
  onError(error) {
    throw error;
  },
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
    MentionNode
  ]
};

export default function Editor({ setHTML = () => { }, setJSON = () => { }, setEditor = () => { }, setTemplateVariables = () => { } }) {

  const onChange = (editorState, editor) => {
    editor.update(() => {
      const rawHTML = $generateHtmlFromNodes(editor, null)
      const editorStateTextString = editorState.read(() => $getRoot().getTextContent());
      setHTML(rawHTML);
      setJSON(editorState);
      setTemplateVariables(editorStateTextString);
    });
  }

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <ToolbarPlugin />
        <div className="editor-inner">
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<Placeholder />}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <CodeHighlightPlugin />
          <ListPlugin />
          <LinkPlugin />
          {/* <AutoLinkPlugin /> */}
          <SetEditorPlugin setEditor={setEditor} />
          <MentionsPlugin />
          {/* <ActionsPlugin /> */}
          <OnChangePlugin onChange={onChange} />
          <ListMaxIndentLevelPlugin maxDepth={7} />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        </div>
      </div>
    </LexicalComposer>
  );
} -->

//SetEditorPlugin

<!-- import { useEffect } from "react";
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';


export default function SetEditorPlugin({ setEditor }) {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        if (!setEditor) return;
        setEditor(editor);
    }, [editor]);

    return null;
}; -->

//DOM render

<!-- import React from 'react';
import DOMPurify from 'dompurify';

const htmlContent = '<p class="PlaygroundEditorTheme__paragraph"><br></p>';

const App = () => {
  // Sanitize HTML content
  const sanitizedHtmlContent = DOMPurify.sanitize(htmlContent);

  return (
    <div>
      <h1>Secure HTML Rendering</h1>
      <div
        dangerouslySetInnerHTML={{ __html: sanitizedHtmlContent }}
      />
    </div>
  );
};

export default App; -->
