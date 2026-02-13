'use client'

import { useEditor, EditorContent, Editor, useEditorState } from '@tiptap/react'
// import { FloatingMenu, BubbleMenu } from '@tiptap/react/menus'
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import { Toggle } from './ui/toggle'
import { BlocksIcon, BoldIcon, CodeIcon, HighlighterIcon, ItalicIcon, Link2Icon, LinkIcon, ListCheckIcon, ListIcon, ListOrdered, QuoteIcon, StrikethroughIcon, UnderlineIcon, UnlinkIcon } from 'lucide-react'
import { ReactNode, useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Input } from './ui/input'
import { Button } from './ui/button'


const TiptapEditor = () => {
      const editor = useEditor({
            extensions: [StarterKit,  Highlight.configure({ multicolor: true })],
            content: '<p>Hello World!</p>',
            editorProps: {
                  attributes: {
                        class: 'prose dark:prose-invert prose-sm sm:prose-base focus:outline-none max-w-none'
                  }
            },
            immediatelyRender: false
      })

      return (
            <div className='w-full border border-gray-300 rounded-md'>
                  {
                        editor && (
                              <ToolBar editor={editor} />
                        )
                  }
                  <EditorContent editor={editor} />
                  {/* <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
                        <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu> */}
            </div>
      )
}

export default TiptapEditor


const ToolBar = ({ editor }: { editor: Editor }) => {

      const editorState = useEditorState({
            editor, selector: (ctx) => {
                  return {
                        isBold: ctx.editor.isActive("blod") ?? false,
                        isItalic: ctx.editor.isActive("italic") ?? false,
                        isUnderline: ctx.editor.isActive("underline") ?? false,
                        isStrike: ctx.editor.isActive("strike") ?? false,
                        isCode: ctx.editor.isActive("code") ?? false,
                        isLink: ctx.editor.isActive("link") ?? false,
                        isCodeBlock: ctx.editor.isActive("codeBlock") ?? false,
                        isBlockquote: ctx.editor.isActive("blockquote") ?? false,
                        isBulletList: ctx.editor.isActive("bulletList") ?? false,
                        isOrderedList: ctx.editor.isActive("orderedList") ?? false,
                        isHighlight: ctx.editor.isActive("highlight") ?? false,
                        isHeading2: ctx.editor.isActive("heading", { level: 2 }) ?? false,
                        isHeading3: ctx.editor.isActive("heading", { level: 3 }) ?? false,
                        isHeading4: ctx.editor.isActive("heading", { level: 4 }) ?? false,
                        isHeading5: ctx.editor.isActive("heading", { level: 5 }) ?? false,
                        isHeading6: ctx.editor.isActive("heading", { level: 6 }) ?? false,
                        isParagraph: ctx.editor.isActive("paragraph") ?? false,
                  }
            },
      })


      const handleHeadingChanges=(value:string)=>{
            if(value ==="paragraph"){
                  editor.chain().focus().setParagraph().run()
            }else{
                  const level = Number.parseInt(value.replace("heading","")) as 
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6;
                  editor.chain().focus().setHeading({level}).run()
            }
      }

      return (
            <div className='bg-background sticky top-0 z-10 flex flex-wrap items-center gap-1 border-b p-2'>
                  <Toggle
                        size="sm"
                        pressed={editorState.isBold}
                        onPressedChange={() => editor.chain().focus().toggleBold().run()}
                        aria-label='bold-toogle'
                  >
                        <BoldIcon className='h-4 w-4' />
                  </Toggle>
                  <Toggle
                        size="sm"
                        pressed={editorState.isItalic}
                        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
                        aria-label='italic-toogle'
                  >
                        <ItalicIcon className='h-4 w-4' />
                  </Toggle>
                  <Toggle
                        size="sm"
                        pressed={editorState.isUnderline}
                        onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
                        aria-label='underline-toogle'
                  >
                        <UnderlineIcon className='h-4 w-4' />
                  </Toggle>
                  <Toggle
                        size="sm"
                        pressed={editorState.isStrike}
                        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
                        aria-label='strike-toogle'
                  >
                        <StrikethroughIcon className='h-4 w-4' />
                  </Toggle>
                  <Toggle
                        size="sm"
                        pressed={editorState.isBlockquote}
                        onPressedChange={() => editor.chain().focus().toggleBlockquote().run()}
                        aria-label='blockquote-toogle'
                  >
                        <QuoteIcon className='h-4 w-4' />
                  </Toggle>
                  <Toggle
                        size="sm"
                        pressed={editorState.isBulletList}
                        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
                        aria-label='bullet-list-toogle'
                  >
                        <ListIcon className='h-4 w-4' />
                  </Toggle>
                  <Toggle
                        size="sm"
                        pressed={editorState.isOrderedList}
                        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
                        aria-label='ordered-list-toogle'
                  >
                        <ListOrdered className='h-4 w-4' />
                  </Toggle>
                   <Toggle
                        size="sm"
                        pressed={editorState.isCode}
                        onPressedChange={() => editor.chain().focus().toggleCode().run()}
                        aria-label='code-toogle'
                  >
                        <CodeIcon className='h-4 w-4' />
                  </Toggle>
                  <Toggle
                        size="sm"
                        pressed={editorState.isHighlight}
                        onPressedChange={() => editor.chain().focus().toggleHighlight({ color: "red" }).run()}
                        aria-label='highlight-toogle'
                  >
                        <HighlighterIcon className='h-4 w-4' />
                  </Toggle>
                  {
                        editorState.isLink ? (
                              <Toggle
                                    size="sm"
                                    pressed={editorState.isLink}
                                    onPressedChange={() => editor.chain().focus().extendMarkRange("link").unsetLink().run()}
                              >
                                    <UnlinkIcon className='h-4 w-4' />
                              </Toggle>
                        ) : (
                              <LinkComponent editor={editor}>
                                    <Toggle size="sm" aria-label='toggle-link'>
                                          <LinkIcon className='h-4 w-4' />
                                    </Toggle>
                              </LinkComponent>
                        )
                  }
                  <div className='bg-border mx-1 h-6 w-px' />
            </div>
      )
}

function LinkComponent({ editor, children }:{ editor: Editor, children: ReactNode }){
      const[linkUrl, setlinkUrl] = useState("")
      const[isLinkPopOverOpen, setIsLinkPopOverOpen] = useState(false)

      const handleSetLink = ()=>{
                  if(linkUrl){
                        editor
                        .chain()
                        .focus()
                        .extendMarkRange("link")
                        .setLink({ href: linkUrl })
                        .run()
                  }else{
                        editor
                        .chain()
                        .focus()
                        .extendMarkRange("link")
                        .unsetLink()
                        .run()
                  }
                  setIsLinkPopOverOpen(false)
                  setlinkUrl("")
      }

      return (
            <Popover open={isLinkPopOverOpen} onOpenChange={setIsLinkPopOverOpen}>
                  <PopoverTrigger>{children}</PopoverTrigger>
                  <PopoverContent className='w-80 p-4 bg-black'>
                        <div className='flex flex-col gap-4'>
                              <h3 className='font-medium'>Insert Link</h3>
                              <Input
                              type='url'
                                    value={linkUrl}
                                    onChange={(e)=>setlinkUrl(e.target.value)}
                                    placeholder='Enter link URL'
                                    onKeyDown={(e)=>
                                    {
                                          if(e.key ==="Enter"){
                                                handleSetLink()
                                          }
                                    }
                                    }
                              />
                              <div className='flex justify-between'>
                              <Button variant="outline" onClick={()=>setIsLinkPopOverOpen(false)}>Cancel</Button>
                              <Button variant="secondary" onClick={handleSetLink}>save</Button>
                              </div>
                        </div>
                  </PopoverContent>
            </Popover>
      )
}