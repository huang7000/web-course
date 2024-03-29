const MarkdownIt = require("markdown-it");
const MarkdownItClass = require("./markdown-it-class");
const MarkdownItContainer = require("markdown-it-container");
const MarkdownVariable = require("./markdown-variable");
const hljs = require("./markdown-hilghlight");
const hashSum = require("hash-sum");
const snippetToVueComponent = require("./snippet-to-component");
const snippetToVueStyle = require("./snippet-to-style");

module.exports = function (source) {
  source = MarkdownVariable(source);

  // 初始还MarkdownIt用于转换md文件为html
  const markdownIt = new MarkdownIt({
    html: true,
    xhtmlOut: true,
    // 将markdown中的代码块用hljs高亮显示
    highlight: function (content, language) {
      language = language && hljs.getLanguage(language) ? language : "html";
      let formatCode = hljs.highlight(language, content, true).value;
      const delimiterRegex = /\{\{.*?\}\}/g;
      formatCode = formatCode.replace(delimiterRegex, (value) => {
        //const code = `data_${hashSum(value)}`;
        return `<span v-html="'${value}'"></span>`;
      });
      return `<pre><code class="language-${language}">${formatCode}</code></pre>`;
    }
  });

  // 定义Markdown标签类名
  markdownIt.use(MarkdownItClass, "vc-markdown-doc");

  // 解析markdown的 【:::tip 内容 ::::】 格式
  markdownIt.use(MarkdownItContainer, "tip", {
    validate(params) {
      return params.trim().match(/^tip\s*(.*)$/);
    },
    // 代码块渲染
    render(tokens, index) {
      return tokens[index].nesting === 1
        ? '<div class="vc-markdown-tip">'
        : "</div>";
    }
  });

  // 解析markdown的 【:::danger 内容 ::::】 格式
  markdownIt.use(MarkdownItContainer, "danger", {
    validate(params) {
      return params.trim().match(/^danger\s*(.*)$/);
    },
    // 代码块渲染
    render(tokens, index) {
      return tokens[index].nesting === 1
        ? '<div class="vc-markdown-danger">'
        : "</div>";
    }
  });

  const vueComponentList = [];
  const vueStyleList = [];

  // note笔记默认显示源码隐藏效果 
  // component组件默认显示效果隐藏源码
  // 解析markdown的 【:::snippet 内容 ::::】 格式
  markdownIt.use(MarkdownItContainer, "snippet", {
    // 验证代码块为【:::snippet :::】才进行渲染
    validate(params) {
      return params.trim().match(/^snippet\s*(.*)$/);
    },
    // 代码块渲染
    render(tokens, index) {
      const token = tokens[index];
      const tokenInfo = token.info.trim().match(/^snippet\s*(.*)$/);
      if (token.nesting === 1) {
        // 获取snippet第一行的表述内容
        const hasTokenContent = tokenInfo && tokenInfo.length > 1;
        const desccription = hasTokenContent ? tokenInfo[1] : "";
        const desccriptionHtml = markdownIt.render(desccription);
        // 获取vue组件示例的代码
        const nextIndex = tokens[index + 1];
        const content = nextIndex.type === "fence" ? nextIndex.content : "";
        // 示例代码解析为Vue组件
        const hashCode = hashSum(content);
        const componentName = `msc-vue-snippet-code-${hashCode}`;
        const componentScript = snippetToVueComponent(content, hashCode);
        vueComponentList.push(
          `"${componentName}":(function () { ${componentScript} })()`
        );
        const componentStyle = snippetToVueStyle(content, hashCode);
        vueStyleList.push(componentStyle);
        // 将需要渲染的示例用nc-snippet组件包裹替换插槽显示示例效果
        return `<vc-code-snippet :showCode="true">
                  <template #description >${desccriptionHtml}</template>
                  <template #example>
                    <${componentName} />
                  </template>
                  <template #source>`;
      }
      return `   </template>
                </vc-code-snippet>`;
    }
  });
  return `<template>
            <vc-markdown-view>
              ${markdownIt.render(source)}
            </vc-markdown-view>
          </template>
          <script lang="ts">
            import { defineComponent } from "vue";
            export default defineComponent({
              components: {${vueComponentList.join(",")}}
            });
          </script>
          <style lang="scss">
             ${vueStyleList.join(" ")}
          </style>`;
};
