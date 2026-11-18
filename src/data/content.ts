// Verified product copy. Sources and boundaries: docs/terminology.md
export const content = {
  en: {
    kicker: 'A CLOSER LOOK AT WINDOWS',
    title: ['Every window', 'has a story.'],
    summary:
      'Find the app behind a window. Follow its hierarchy, inspect its properties, and catch the pop-ups that disappear too quickly.',
    category: 'Window inspection for Windows',
    intro: ['From a window on screen', 'to the details that matter.'],
    introText:
      'Start with the question you have: which app owns it, where it sits, or what happened when a dialog flashed past.',
    features: [
      [
        '01 / ORIGIN',
        'Meet the app behind the window.',
        'Pick a target window and bring its source into view: process, executable path, and available signature information.',
        'Target picking · Window source · Process details',
      ],
      [
        '02 / HIERARCHY',
        'Follow the window tree.',
        'Search window titles or program names, then move through the hierarchy to understand how a target relates to its parent and child windows.',
        'Title search · Program search · Parent and child windows',
      ],
      [
        '03 / OBSERVATION',
        'Give fleeting pop-ups a place to stay.',
        'The observation workspace records transient windows so you can review the clues after the moment has passed.',
        'Pop-up observation · Captured entries · Window details',
      ],
      [
        '04 / DETAILS',
        'Go deeper when you need to.',
        'Inspect handles, classes, bounds, coordinates and display information. Copy available properties to support a bug report or a technical investigation.',
        'Window properties · px / DIP · Copy properties',
      ],
    ],
    steps: [
      ['Choose a window', 'Open WindowSift. Click the target picker, or drag it onto the window you want to inspect.'],
      ['Read its source', 'Begin with Window source. Use the tree or Technical details when you need more context.'],
      [
        'Keep the useful evidence',
        'Copy properties for a report, or use pop-up observation to investigate a transient window.',
      ],
    ],
    faq: [
      [
        'Does WindowSift record my screen?',
        'WindowSift is a window inspection tool. Its pop-up observation workspace tracks window information; it is not a screen recorder.',
      ],
      [
        'Can it inspect every window?',
        'Available information depends on Windows permissions, the target process and the type of window. Some fields can be unavailable.',
      ],
      [
        'Is the software interface available in English?',
        'The inspected build uses a Chinese inspector interface. This website is available in English and Simplified Chinese.',
      ],
      [
        'Where is the download?',
        'A standalone public WindowSift release has not been verified yet. The download page shows the current status and a way to contact Mosuzo Studio.',
      ],
      [
        'Is the interactive preview a real screenshot?',
        'The homepage preview is a browser illustration using example data. It explains the workflow; it is not a capture of the application.',
      ],
    ],
    limits: [
      'Windows permissions can limit access to a target process.',
      'Some window or signature information can be unavailable.',
      'The current inspector interface is Chinese.',
      'A standalone public download is not yet verified.',
    ],
    shortcuts: [
      ['Target picker', 'Click to pick a window, or drag onto a target.'],
      ['Window tree search', 'Search by title or program name.'],
      ['Copy properties', 'Use the copy control in the detail workspace.'],
    ],
    changelog:
      'The WindowSift website introduces the verified window inspector workflow. A standalone product release and version history have not yet been published here.',
  },
  'zh-cn': {
    kicker: '看清每一个窗口',
    title: ['这个窗口，', '究竟从哪来。'],
    summary: '找到窗口背后的程序，沿窗口树梳理层级、核对属性，也能留住那些一闪而过的弹窗线索。',
    category: 'Windows 窗口检查工具',
    intro: ['从眼前的窗口，', '找到有用的线索。'],
    introText: '从你真正关心的问题出发：它属于哪个程序、处在什么层级，或刚才闪过的弹窗是什么。',
    features: [
      [
        '01 / 窗口来源',
        '找到窗口背后的程序。',
        '点选目标窗口，集中查看所属进程、程序路径与可读取的签名信息，让“这是谁弹出来的”有据可查。',
        '捕捉窗口 · 窗口来源 · 进程信息',
      ],
      [
        '02 / 窗口树',
        '沿着层级，继续追踪。',
        '按窗口标题或程序名搜索，再沿父子窗口层级查看关系，把一个孤立的窗口放回它的上下文。',
        '标题搜索 · 程序搜索 · 父子窗口',
      ],
      [
        '03 / 观察弹窗',
        '一闪而过，也有线索可循。',
        '在观察工作区记录短暂出现的窗口，等它消失之后，仍能回看条目与窗口详情。',
        '观察弹窗 · 记录条目 · 窗口详情',
      ],
      [
        '04 / 技术详情',
        '需要时，再深入一层。',
        '查看句柄、类名、矩形坐标和显示器信息；复制可用属性，方便整理问题反馈与技术排查。',
        '窗口属性 · px / DIP · 复制属性',
      ],
    ],
    steps: [
      ['选择目标窗口', '打开 WindowSift，单击捕捉按钮点选，或将准心拖到目标窗口后松开。'],
      ['从来源开始查看', '先看“窗口来源”，需要更多线索时再切换窗口树与技术详情。'],
      ['留下有用的依据', '复制属性整理反馈；遇到短暂出现的窗口，使用“观察弹窗”继续排查。'],
    ],
    faq: [
      ['WindowSift 会录制屏幕吗？', 'WindowSift 是窗口检查工具。“观察弹窗”记录窗口信息，不是屏幕录像。'],
      ['所有窗口的信息都能读取吗？', '可读取的内容受 Windows 权限、目标进程和窗口类型影响，部分字段可能不可用。'],
      ['软件本身也有英文界面吗？', '当前核对的窗口检查器主要使用中文界面；官网提供英文和简体中文两个版本。'],
      ['在哪里下载？', '目前尚未核实到 WindowSift 的独立公开发布包。下载页会显示当前状态，并提供工作室联系方式。'],
      ['首页的交互预览是真实截图吗？', '首页预览是使用示例数据的网页交互示意，用于说明操作思路，不是程序实拍。'],
    ],
    limits: [
      'Windows 权限可能限制对目标进程的读取。',
      '部分窗口属性或签名信息可能不可用。',
      '当前检查器界面以中文为主。',
      '尚未核实到独立公开下载包。',
    ],
    shortcuts: [
      ['捕捉窗口', '单击点选，或拖曳准心到目标窗口。'],
      ['窗口树搜索', '输入窗口标题或程序名。'],
      ['复制属性', '使用详情区域中的复制按钮。'],
    ],
    changelog: 'WindowSift 官网介绍已经核实的窗口检查流程；独立产品发布与版本记录尚未在此公布。',
  },
};
