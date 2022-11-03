<template>
    <div style="margin:20px auto;max-width: 700px;">
      <!-- Use the component in the right place of the template -->
      <UserIcon></UserIcon>
      <tiptap-vuetify
        v-model="content"
        :extensions="extensions"
      />
    </div>
  </template>
  
  <script>
  // import the component and the necessary extensions
  import { TiptapVuetify, Heading, Bold, Italic, Strike, Underline, Code, Paragraph, BulletList, OrderedList, ListItem, Link, Blockquote, HardBreak, HorizontalRule, History } from 'tiptap-vuetify'
  import UserIcon from '../components/Profile/UserIcon.vue';
  export default {
    // specify TiptapVuetify component in "components"
    components: { TiptapVuetify,UserIcon },
    layout: 'write',
    data: () => ({
      // declare extensions you want to use
      extensions: [
        History,
        Blockquote,
        Link,
        Underline,
        Strike,
        Italic,
        ListItem,
        BulletList,
        OrderedList,
        [Heading, {
          options: {
            levels: [1, 2, 3]
          }
        }],
        Bold,
        Code,
        HorizontalRule,
        Paragraph,
        HardBreak
      ],
      // starting editor's content
      content: `
        <h1>Hedge&Hog</h1>
      `
    })
  }
  </script>