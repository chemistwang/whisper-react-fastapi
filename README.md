# whisper react fastapi

## 技术栈

web

- 框架：`React`
- 组件库：`antd`
- 语音采集：`recordrtc`, `webm-to-wav-converter`

server

- 服务器框架：`uvicorn`，`fastapi`
- 音频处理：`librosa`
- 字词转换：`zhconv`

## 运行

### 前端环境

`.env` 可配置端口

```
cd ./web
npm install && npm start
```

### 服务端环境

```
cd ./server
pip install -r requirements.txt
python main.py
```

### TODO

- [ ] 静音检测
- [ ] 唤醒
- [ ] 替换 [Faster Whisper](https://github.com/SYSTRAN/faster-whisper)
