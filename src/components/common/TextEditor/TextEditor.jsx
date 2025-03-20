import React, { useState, useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import styled from 'styled-components';
import { media, theme } from '../../../styles/theme';

const EditorContainer = styled.div`
  display: inline-block;
  width: 720px;
  
  ${media.tablet`
    width: auto;
  `}
  ${media.mobile`
      width: 320px;
  `}
  
  .ql-toolbar.ql-snow {
      background-color: ${theme.colors.gray[200]};
      border-bottom: none;
      border-radius: 8px 8px 0 0;
  }
`;

const EditorWrapper = styled.div`
    height: 260px;
    border: 1px ${theme.colors.gray[300]} solid;
    border-radius: 0 0 8px 8px;
`;

// 툴바 옵션
const toolbarOptions = [
  ['bold', 'italic', 'underline'],
  [{ align: 'center' }, { align: 'right' }, { align: 'justify' }],
  [{ list: 'bullet' }, { list: 'ordered' }],
  [{ color: [] }],
];

export default function TextEditor({ onChange, font }) {
  // 에디터에서 관리하는 텍스트를 React 상태로 가지고 있음
  const [value, setValue] = useState('');
  console.log(value);
  // 에디터가 붙을 DOM 요소 참조
  const editorRef = useRef(null);
  // Quill 인스턴스를 담아둘 ref
  const quillInstance = useRef(null);

  useEffect(() => {
    // editorRef가 연결된 DOM 요소가 있고, quillInstance.current가 없을 때만 초기화
    if (editorRef.current && !quillInstance.current) {
      quillInstance.current = new Quill(editorRef.current, {
        theme: 'snow',
        modules: { toolbar: toolbarOptions },
      });

      quillInstance.current.root.innerHTML = value;

      quillInstance.current.on('text-change', () => {
        const html = quillInstance.current.root.innerHTML;
        setValue(html);
        if (onChange) onChange(html);
      });
    }

    return () => {
      // editor 컨테이너 내부를 비워서 Quill이 생성한 요소들을 제거
      if (editorRef.current) {
        editorRef.current.innerHTML = '';
      }
      quillInstance.current = null;
    };
  }, []);

  useEffect(() => {
    if (quillInstance.current?.root) {
      console.log(font);
      quillInstance.current.root.style.fontFamily = font;
    }
  }, [font]);

  return (
    <EditorContainer>
      <EditorWrapper ref={editorRef} />
    </EditorContainer>
  );
}
