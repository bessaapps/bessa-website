"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Text
} from "@chakra-ui/react";
import { StarterKit } from "@tiptap/starter-kit";
import { Underline } from "@tiptap/extension-underline";
import { TextStyle } from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";

export default function Tiptap({ handleSubmit, isLoading }) {
  const editor = useEditor({
    extensions: [StarterKit, Underline, TextStyle, Color],
    content:
      '<p></p><p><strong><span style="color: #9362e3">Topher</span></strong></p><p><strong>Bessa LGBTQIA+ Community App</strong></p><p><span style="color: #7f7f7f">topher@bessssssa.com | https://bessssssa.com</span></p>'
  });

  if (!editor) return;

  return (
    <>
      <FormControl mb={4} isRequired>
        <FormLabel>Body</FormLabel>
        <Flex gap={1} mb={2}>
          <Button
            size={"sm"}
            onClick={() => editor.chain().focus().toggleBold().run()}
            colorScheme={editor.isActive("bold") ? "primary" : "gray"}
          >
            <Text as={"b"}>B</Text>
          </Button>
          <Button
            size={"sm"}
            onClick={() => editor.chain().focus().toggleItalic().run()}
            colorScheme={editor.isActive("italic") ? "primary" : "gray"}
          >
            <Text as={"i"}>I</Text>
          </Button>
          <Button
            size={"sm"}
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            colorScheme={editor.isActive("underline") ? "primary" : "gray"}
          >
            <Text as={"u"}>U</Text>
          </Button>
          <Button
            size={"sm"}
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            colorScheme={
              editor.isActive("heading", { level: 1 }) ? "primary" : "gray"
            }
          >
            H1
          </Button>
          <Button
            size={"sm"}
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            colorScheme={
              editor.isActive("heading", { level: 2 }) ? "primary" : "gray"
            }
          >
            H2
          </Button>
          <Button
            size={"sm"}
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            colorScheme={
              editor.isActive("heading", { level: 3 }) ? "primary" : "gray"
            }
          >
            H3
          </Button>
          <input
            type={"color"}
            onInput={(event) =>
              editor.chain().focus().setColor(event.target.value).run()
            }
            value={editor.getAttributes("textStyle").color}
            data-testid={"setColor"}
          />
        </Flex>
        <Box border={"solid 1px"} borderColor={"gray.200"} borderRadius={"md"}>
          <EditorContent editor={editor} />
        </Box>
      </FormControl>
      <Button
        colorScheme={"primary"}
        onClick={() => {
          handleSubmit(editor.getText(), editor.getHTML());
        }}
        isLoading={isLoading}
      >
        Send
      </Button>
    </>
  );
}
