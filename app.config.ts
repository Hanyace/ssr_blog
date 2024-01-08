// app.config.ts
// 要将配置和环境变量公开给应用程序的其他部分，您可以使用 defineAppConfig 函数。
export default defineAppConfig({
    foo: 'bar',
    theme: {
        dark: false,
        themes: {
            light: {
                primary: '#3f51b5',
                accent: '#ff9800',
                secondary: '#607d8b',
                info: '#2196f3',
                warning: '#ffc107',
                error: '#f44336',
                success: '#4caf50',
            },
        },
    },
  })