<div align="center"> 
<h2>Poster Design</h2>

[![MIT License](https://img.shields.io/badge/license-MIT-brightgreen)](./LICENSE)
[![Arco Design](https://img.shields.io/badge/arco--design-^2.53.3-brightgreen)](https://arco.design/vue)
[![Vue](https://img.shields.io/badge/vue-^3.3.10-brightgreen)](https://vuejs.org)
[![Vite](https://img.shields.io/badge/vite-^4.5.1-brightgreen)](https://vitejs.dev)

</div>

## 简介

Poster Design是一个海报设计器。使用了最新的`vue3`,`vite4`,`TypeScript`等主流技术开发，开箱即用。

## 预览

- 地址：<a href="https://poster-design-theta.vercel.app/" target="_blank">gzm-design</a>

## 功能/计划

Tips: 🕙筹划中 🔲筹备中 🚧进行中 ✅已完成

- ✅ PSD导入
    - ✅ 支持RGB色彩模式的PSD文件导入
    - 🕙 支持CMYK色彩模式的PSD文件导入及色彩模式转换
    - ✅ 分组处理
    - ✅ 层级处理
    - ✅ 图片解析
    - ✅ 剪切蒙版
        - ✅ 单层蒙版
        - ✅ 连续多层蒙版
    - ✅ 文字解析
        - ✅ 普通文本
        - ✅ 富文本
        - 🕙 效果/特效处理
    - ✅ 字体加载
    - 🕙 智能对象
- ✅ JSON导入
- ✅ 多页面支持
- ✅ 快捷键支持（部分功能）
- ✅ 模板导入
- ✅ 图层管理
- ✅ 标尺工具
- ✅ 钢笔工具
    - ✅ 默认画笔样式
    - ✅ 自定义画笔样式
- ✅ 元素编辑
- ✅ 预览
- ✅ 文件下载（JSON / PNG / JPG / WEBP）
    - ✅ 整个画布导出
    - ✅ 指定元素导出
- ✅ 画布缩放、拖动模式
- ✅ 边框描边（纯色、线性渐变、径向渐变、图片）
- ✅ 填充（纯色、线性渐变、径向渐变、图片）
- ✅ 混合模式、旋转、透明度
- ✅ 文本字体、粗细、大小、下划线、中划线、倾斜、行距、字距、内边距、换行规则
- ✅ 文本超出控制、自定义超出显示
- ✅ 多元素打组、拆分组
- ✅ 画布尺寸修改、多背景填充
- ✅ 元素超出组裁剪/显示
- ✅ 富文本支持
- ✅ 组内放置（拖入）
- ✅ 遮罩功能
- ✅ 组内蒙版
- ✅ 组内擦除功能
- ✅ 外阴影、内阴影
- ✅ 撤销、恢复功能
- 🔲 图片裁剪
- 🔲 图片滤镜
- 🕙 SDK封装
- 🕙 PSD导入插件化封装
- 🕙 针对标尺线、元素的自动吸附功能
- ✅ 二维码工具
- ✅ 条形码码工具
- 🕙 AI抠图
- 🕙 AI图生图、自动补全
- ✅ 标尺线npm包封装

## 安装使用

- 安装依赖

```bash
cd gzm-design

pnpm install
```

- 运行

```bash
pnpm dev
```

- 打包

```bash
pnpm build
```

## 更新日志

[CHANGELOG](./CHANGELOG.md)

## 捐赠

如果觉得还不错，请作者喝杯咖啡吧 ☺


## 微信交流群


## 如何贡献


**Pull Request:**

1. Fork 代码!
2. 创建自己的分支: `git checkout -b feat/xxxx`
3. 提交你的修改: `git commit -am 'feat(function): add xxxxx'`
4. 推送您的分支: `git push origin feat/xxxx`
5. 提交`pull request`

## Git 贡献提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md)
  规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))
    - `feat` 增加新功能
    - `fix` 修复问题/BUG
    - `style` 代码风格相关无影响运行结果的
    - `perf` 优化/性能提升
    - `refactor` 重构
    - `revert` 撤销修改
    - `test` 测试相关
    - `docs` 文档/注释
    - `chore` 依赖更新/脚手架配置修改等
    - `workflow` 工作流改进
    - `ci` 持续集成
    - `types` 类型定义文件更改
    - `wip` 开发中

## 致谢
特别感谢以下项目和贡献者：
- <a ref="https://github.com/leaferjs/ui" target="_blank">@leafer/ui</a>基于 Leafer 开发的一套绚丽多彩的 UI 绘图、交互框架，作为 LeaferJS 的表现层，可结合 AI 绘图、生成界面，表现力丰富、性能强劲。
- <a href="https://github.com/liumingye/fabric" target="_blank">liumingye/fabric</a> 一款基于fabirc的高性能编辑器。
- <a href="https://github.com/palxiao/poster-design" target="_blank">poster-design</a> 一款基于dom的在线海报图片设计器。
- <a href="https://github.com/nihaojob/vue-fabric-editor" target="_blank">vue-fabric-editor</a> 一款基于fabric.js和Vue的图片编辑器。
- <a href="https://github.com/wordshub/free-font" target="_blank">free-font</a> 可商用免费字体收录汇总

## 开源协议

- poster-design 遵循 [MIT 协议](./LICENSE)

## RoadMap
1. data 迁移到数据库进行数据管理
2. 模版数据懒加载
3. 数据补充一下国庆节的
4. 小红书尺寸：https://www.canva.cn/sizes/little-red-book/
