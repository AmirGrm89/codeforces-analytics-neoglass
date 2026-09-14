/*
 * Codeforces Analytics — Neo Glass Edition
 * Created and maintained by amir1389_gerami
 * Codeforces handle: amir1389_gerami
 * Contact: amirmohammad.grm.8998@gmail.com
 *
 * © amir1389_gerami. All rights reserved.
 * Unauthorized copying, redistribution, or republishing of this extension,
 * in whole or in part, is prohibited and may result in legal action.
 */

(function () {
    'use strict';

    const LANG_KEY = 'cf_analytics_lang';
    const LANG_ORDER = ['en', 'fa', 'zh', 'hi'];
    const LANG_META = {
        en: { native: 'English', dir: 'ltr' },
        fa: { native: 'فارسی', dir: 'rtl' },
        zh: { native: '中文', dir: 'ltr' },
        hi: { native: 'हिन्दी', dir: 'ltr' }
    };
    const getSavedLang = () => {
        let v;
        try { v = localStorage.getItem(LANG_KEY); } catch (e) { v = null; }
        return LANG_ORDER.includes(v) ? v : 'en';
    };
    let currentLang = getSavedLang();
    const i18n = {
        en: {
            loading: 'Loading Codeforces Analytics — Neo Glass...',
            loadingFetch: 'Fetching submissions from Codeforces API...',
            loadingProcess: 'Analyzing and processing submissions...',
            loadingDraw: 'Drawing: {chart}',
            loadingComplete: 'Loading Complete!',
            fetchError: 'Failed to load data, possibly rate-limited by Codeforces. Please try again later.',
            titleText: 'Codeforces Analytics',
            btnSwitch: '中文',
            btnShare: 'Share (Export Image)',
            generating: 'Generating...',
            ratings: 'Problem Ratings',
            tags: 'Tags Solved',
            lang: 'Programming Language',
            verdict: 'Verdict Distribution',
            attempts: 'Average Attempts to AC',
            participant: 'Participant Type',
            performance: 'Execution Performance',
            memoryPerf: 'Memory Usage (KB vs Rating)',
            timeline: 'Activity Timeline (Monthly)',
            heatmap: 'Submission Heatmap',
            unsolved: 'Unsolved Problems (Total: {n})',
            submissions: 'Submissions',
            time: 'Time (ms)',
            memory: 'Memory (KB)',
            rating: 'Rating',
            points: 'Total Rating Solved',
            chartSolvedLabel: 'Solved',
            streak: 'Max Streak',
            days: 'days',
            speed: 'Contest Speed Analysis',
            try1: '1 Try (One Shot)',
            try2: '2 Tries',
            try3_5: '3-5 Tries',
            tryMore: '> 5 Tries (Struggle)',
            genErrorConsole: 'Failed to generate image:',
            genErrorAlert: 'Sorry, failed to generate the image. Please check the console for errors.',
            maRating: 'Moving Average Rating (Recent 20 ACs)',
            weakness: 'Weakness Analysis (Average Tries per Tag)',
            timeOfDay: 'Time of Day (Active Hours)',
            errorDiag: 'Error Diagnosis (Failed at Test N)',
            langDiff: 'Language vs Difficulty',
            test1_2: 'Test 1-2 (Logic)',
            test3_10: 'Test 3-10 (Basic Cases)',
            test11_50: 'Test 11-50 (Edge Cases)',
            test50plus: '>50 (Deep Edge)',
            btnSettings: 'Settings',
            settingsTitle: 'Chart Display Settings',
            settingsSave: 'Save',
            settingsCancel: 'Cancel',
            langSwitchLabel: 'Change language',
            statsSummary: 'Statistics Summary',
            solvedProblems: 'Solved Problems',
            totalSubmissions: 'Total Submissions',
            acRate: 'AC Rate',
            currentStreak: 'Current Streak',
            copy: 'Copy',
            copied: 'Copied!',
            copyFailed: 'Failed'
        },
        zh: {
            loading: '正在加载 Codeforces 数据分析 — Neo Glass...',
            loadingFetch: '正在从 Codeforces 获取提交数据...',
            loadingProcess: '正在分析与处理提交数据...',
            loadingDraw: '正在绘制：{chart}',
            loadingComplete: '加载完成！',
            fetchError: '加载数据失败，可能是 Codeforces 接口限流，请稍后再试。',
            titleText: 'Codeforces 解题数据可视化 — Neo Glass',
            btnSwitch: 'English',
            btnShare: '分享 (生成长图)',
            generating: '正在生成...',
            ratings: '题目难度分布',
            tags: '题目标签分布',
            lang: '编程语言偏好',
            verdict: '提交结果分布',
            attempts: '平均 AC 尝试次数',
            participant: '参赛类型分布',
            performance: '执行性能分布 (时间 vs 难度)',
            memoryPerf: '内存使用分布 (KB vs 难度)',
            timeline: '刷题活跃度 (月度)',
            heatmap: '提交热力图',
            unsolved: '未解决题目 (总计: {n} 题)',
            submissions: '提交数',
            time: '运行时间 (ms)',
            memory: '内存 (KB)',
            rating: '难度',
            points: '已解题目难度总和',
            chartSolvedLabel: '已解决',
            streak: '最长连续',
            days: '天',
            speed: '比赛速度分析',
            try1: '1 Try (一发入魂)',
            try2: '2 Tries',
            try3_5: '3-5 Tries',
            tryMore: '> 5 Tries (折磨)',
            genErrorConsole: '生成图片失败:',
            genErrorAlert: '抱歉，生成图片失败，请检查控制台报错。',
            maRating: '真实能力曲线 (最近20题均分)',
            weakness: '弱点分析 (各标签平均尝试次数)',
            timeOfDay: '刷题作息 (24小时分布)',
            errorDiag: '错误诊断 (挂在第几个测试点)',
            langDiff: '编程语言与解决难度',
            test1_2: '测试点 1-2 (根本逻辑)',
            test3_10: '测试点 3-10 (基础边界)',
            test11_50: '测试点 11-50 (特殊用例)',
            test50plus: '>50 (深层隐蔽 bug)',
            btnSettings: '设置',
            settingsTitle: '图表显示设置',
            settingsSave: '保存',
            settingsCancel: '取消',
            langSwitchLabel: '切换语言',
            statsSummary: '统计摘要',
            solvedProblems: '已解决题目',
            totalSubmissions: '总提交数',
            acRate: '通过率',
            currentStreak: '当前连续',
            copy: '复制',
            copied: '已复制',
            copyFailed: '失败'
        },
        fa: {
            loading: 'در حال بارگذاری Codeforces Analytics — Neo Glass...',
            loadingFetch: 'در حال دریافت ارسال‌ها از API کدفورسز...',
            loadingProcess: 'در حال تحلیل و پردازش ارسال‌ها...',
            loadingDraw: 'در حال رسم: {chart}',
            loadingComplete: 'بارگذاری کامل شد!',
            fetchError: 'دریافت اطلاعات ناموفق بود، احتمالاً به دلیل محدودیت نرخ درخواست در کدفورسز. لطفاً بعداً دوباره تلاش کنید.',
            titleText: 'تحلیل‌گر کدفورسز',
            btnSwitch: '中文',
            btnShare: 'اشتراک‌گذاری (خروجی تصویر)',
            generating: 'در حال ساخت...',
            ratings: 'توزیع سطح دشواری مسائل',
            tags: 'برچسب‌های حل‌شده',
            lang: 'زبان برنامه‌نویسی',
            verdict: 'توزیع نتایج ارسال',
            attempts: 'میانگین تلاش تا قبولی',
            participant: 'نوع شرکت‌کننده',
            performance: 'عملکرد اجرا',
            memoryPerf: 'مصرف حافظه (کیلوبایت در برابر سطح دشواری)',
            timeline: 'خط زمانی فعالیت (ماهانه)',
            heatmap: 'نقشه حرارتی ارسال‌ها',
            unsolved: 'مسائل حل‌نشده (مجموع: {n})',
            submissions: 'ارسال‌ها',
            time: 'زمان (میلی‌ثانیه)',
            memory: 'حافظه (کیلوبایت)',
            rating: 'سطح دشواری',
            points: 'مجموع سطح دشواری حل‌شده',
            chartSolvedLabel: 'تعداد حل‌شده',
            streak: 'طولانی‌ترین توالی',
            days: 'روز',
            speed: 'تحلیل سرعت در مسابقه',
            try1: '۱ تلاش (یک‌ضرب)',
            try2: '۲ تلاش',
            try3_5: '۳ تا ۵ تلاش',
            tryMore: 'بیش از ۵ تلاش (دشوار)',
            genErrorConsole: 'ساخت تصویر ناموفق بود:',
            genErrorAlert: 'متأسفانه ساخت تصویر ناموفق بود. لطفاً کنسول مرورگر را برای جزئیات خطا بررسی کنید.',
            maRating: 'میانگین متحرک سطح دشواری (۲۰ قبولی اخیر)',
            weakness: 'تحلیل نقاط ضعف (میانگین تلاش به ازای هر برچسب)',
            timeOfDay: 'ساعات فعالیت شبانه‌روز',
            errorDiag: 'تشخیص خطا (رد شدن در کدام تست)',
            langDiff: 'زبان برنامه‌نویسی در برابر سطح دشواری',
            test1_2: 'تست ۱ تا ۲ (منطق پایه)',
            test3_10: 'تست ۳ تا ۱۰ (حالت‌های پایه)',
            test11_50: 'تست ۱۱ تا ۵۰ (حالت‌های خاص)',
            test50plus: 'بیش از ۵۰ (باگ‌های پنهان)',
            btnSettings: 'تنظیمات',
            settingsTitle: 'تنظیمات نمایش نمودارها',
            settingsSave: 'ذخیره',
            settingsCancel: 'انصراف',
            langSwitchLabel: 'تغییر زبان',
            statsSummary: 'خلاصه آمار',
            solvedProblems: 'مسائل حل‌شده',
            totalSubmissions: 'مجموع ارسال‌ها',
            acRate: 'درصد قبولی',
            currentStreak: 'توالی فعلی',
            copy: 'کپی',
            copied: 'کپی شد!',
            copyFailed: 'ناموفق'
        },
        hi: {
            loading: 'Codeforces Analytics — Neo Glass लोड हो रहा है...',
            loadingFetch: 'Codeforces API से सबमिशन प्राप्त किए जा रहे हैं...',
            loadingProcess: 'सबमिशन का विश्लेषण और प्रोसेसिंग हो रही है...',
            loadingDraw: 'बनाया जा रहा है: {chart}',
            loadingComplete: 'लोडिंग पूर्ण हुई!',
            fetchError: 'डेटा लोड नहीं हो सका, संभवतः Codeforces की दर-सीमा के कारण। कृपया बाद में पुनः प्रयास करें।',
            titleText: 'Codeforces विश्लेषण',
            btnSwitch: '中文',
            btnShare: 'साझा करें (इमेज एक्सपोर्ट करें)',
            generating: 'बनाया जा रहा है...',
            ratings: 'समस्या रेटिंग वितरण',
            tags: 'हल किए गए टैग',
            lang: 'प्रोग्रामिंग भाषा',
            verdict: 'परिणाम वितरण',
            attempts: 'AC तक औसत प्रयास',
            participant: 'प्रतिभागी प्रकार',
            performance: 'निष्पादन प्रदर्शन',
            memoryPerf: 'मेमोरी उपयोग (KB बनाम रेटिंग)',
            timeline: 'गतिविधि समयरेखा (मासिक)',
            heatmap: 'सबमिशन हीटमैप',
            unsolved: 'अनसुलझी समस्याएं (कुल: {n})',
            submissions: 'सबमिशन',
            time: 'समय (ms)',
            memory: 'मेमोरी (KB)',
            rating: 'रेटिंग',
            points: 'हल की गई कुल रेटिंग',
            chartSolvedLabel: 'हल की गईं',
            streak: 'अधिकतम स्ट्रीक',
            days: 'दिन',
            speed: 'प्रतियोगिता गति विश्लेषण',
            try1: '1 प्रयास (एक ही बार में)',
            try2: '2 प्रयास',
            try3_5: '3-5 प्रयास',
            tryMore: '> 5 प्रयास (कठिन)',
            genErrorConsole: 'इमेज बनाने में विफल:',
            genErrorAlert: 'क्षमा करें, इमेज बनाने में विफल रहा। कृपया कंसोल में त्रुटि जांचें।',
            maRating: 'चलती औसत रेटिंग (हाल के 20 AC)',
            weakness: 'कमजोरी विश्लेषण (प्रति टैग औसत प्रयास)',
            timeOfDay: 'दिन का समय (सक्रिय घंटे)',
            errorDiag: 'त्रुटि निदान (टेस्ट N पर विफल)',
            langDiff: 'भाषा बनाम कठिनाई',
            test1_2: 'टेस्ट 1-2 (तर्क)',
            test3_10: 'टेस्ट 3-10 (मूल स्थितियां)',
            test11_50: 'टेस्ट 11-50 (किनारे की स्थितियां)',
            test50plus: '>50 (गहरी त्रुटि)',
            btnSettings: 'सेटिंग्स',
            settingsTitle: 'चार्ट प्रदर्शन सेटिंग्स',
            settingsSave: 'सहेजें',
            settingsCancel: 'रद्द करें',
            langSwitchLabel: 'भाषा बदलें',
            statsSummary: 'सांख्यिकी सारांश',
            solvedProblems: 'हल की गई समस्याएं',
            totalSubmissions: 'कुल सबमिशन',
            acRate: 'AC दर',
            currentStreak: 'वर्तमान स्ट्रीक',
            copy: 'कॉपी करें',
            copied: 'कॉपी हो गया!',
            copyFailed: 'विफल'
        }
    };

    const t = (key, params = {}) => {
        let text = i18n[currentLang][key] || key;
        for (const [k, v] of Object.entries(params)) {
            text = text.replace(`{${k}}`, v);
        }
        return text;
    };

    const chartInstances = [];
    let userSettings = {};
    try {
        const saved = localStorage.getItem('cf_analytics_settings');
        if (saved) {
            userSettings = JSON.parse(saved);
        }
    } catch (e) {
        console.error('Failed to load settings', e);
    }
    const isChartEnabled = (chartId) => {
        return userSettings[chartId] !== false;
    };

    const NG_THEME_KEY = 'cf_analytics_neo_glass_theme';
    const getNGTheme = () => localStorage.getItem(NG_THEME_KEY) === 'light' ? 'light' : 'dark';
    const NG_PALETTE = {
        dark: {
            bg:'#0b0a12', panel:'rgba(25,20,39,.90)', panel2:'rgba(38,29,58,.84)',
            text:'#f7f2ff', muted:'#b9adcf', border:'rgba(190,145,255,.22)',
            accent:'#b88cff', accent2:'#7b5cff', soft:'rgba(184,140,255,.12)',
            shadow:'rgba(0,0,0,.42)', buttonText:'#fffaff', link:'#dfccff'
        },
        light: {
            bg:'#f4f1fa', panel:'rgba(255,255,255,.92)', panel2:'rgba(249,246,255,.94)',
            text:'#29233b', muted:'#625b70', border:'rgba(126,92,210,.22)',
            accent:'#7655d9', accent2:'#b05cff', soft:'rgba(118,85,217,.10)',
            shadow:'rgba(70,50,100,.16)', buttonText:'#fff', link:'#6847c8'
        }
    };
    const ngPalette=()=>NG_PALETTE[getNGTheme()];

    let ngCaptureMode = false;
    const ngParseColor = (c) => {
        c = String(c).trim().toLowerCase();
        if (c === 'transparent') return { r: 0, g: 0, b: 0, a: 0 };
        if (c === 'white') return { r: 255, g: 255, b: 255, a: 1 };
        if (c === 'black') return { r: 0, g: 0, b: 0, a: 1 };
        if (c[0] === '#') {
            let hex = c.slice(1);
            if (hex.length === 3) hex = hex.split('').map(ch => ch + ch).join('');
            const num = parseInt(hex, 16);
            return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255, a: 1 };
        }
        const m = c.match(/rgba?\(([^)]+)\)/);
        if (m) {
            const parts = m[1].split(',').map(s => parseFloat(s));
            return { r: parts[0] || 0, g: parts[1] || 0, b: parts[2] || 0, a: parts.length > 3 ? parts[3] : 1 };
        }
        return { r: 0, g: 0, b: 0, a: 1 };
    };

    const ngMix = (c1, p1, c2, p2) => {
        if (!ngCaptureMode) {
            const part2 = (p2 === undefined || p2 === null) ? c2 : `${c2} ${p2}%`;
            const part1 = (p1 === undefined || p1 === null) ? c1 : `${c1} ${p1}%`;
            return `color-mix(in srgb, ${part1}, ${part2})`;
        }
        let a = p1, b = p2;
        if (a == null && b == null) { a = 50; b = 50; }
        else if (a == null) a = 100 - b;
        else if (b == null) b = 100 - a;
        const total = a + b;
        let alphaMul = 1;
        if (total <= 0) { a = 50; b = 50; }
        else if (total !== 100) {
            if (total < 100) alphaMul = total / 100;
            a = a / total * 100; b = b / total * 100;
        }
        const c1p = ngParseColor(c1), c2p = ngParseColor(c2);
        const w1 = a / 100, w2 = b / 100;
        const a1 = c1p.a * w1, a2 = c2p.a * w2, aSum = a1 + a2;
        let r = 0, g = 0, bl = 0;
        if (aSum > 0) {
            r = (c1p.r * a1 + c2p.r * a2) / aSum;
            g = (c1p.g * a1 + c2p.g * a2) / aSum;
            bl = (c1p.b * a1 + c2p.b * a2) / aSum;
        }
        const outA = +(aSum * alphaMul).toFixed(3);
        return `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(bl)}, ${outA})`;
    };

    const ngMixVarSafe = (c1, p1, c2, p2) => {
        if (ngCaptureMode && (String(c1).startsWith('var(') || String(c2).startsWith('var('))) {
            return String(c1).startsWith('var(') ? c1 : c2;
        }
        return ngMix(c1, p1, c2, p2);
    };

    const ngToggleRow=(id,label,checked,warn=false)=>`
        <label class="cf-ng-toggle-row${warn?' cf-ng-toggle-warn':''}" data-id="${id}">
            <span>${label}</span>
            <span class="cf-ng-switch">
                <input type="checkbox" data-id="${id}" ${checked?'checked':''}>
                <span class="cf-ng-switch-track"></span>
            </span>
        </label>`;

    const ngEnsureThemeStyle=()=>{
        const root=cfShadowRoot;
        if(!root) return null;
        let st=root.getElementById('cf-ng-theme-style');
        if(!st){
            st=document.createElement('style');
            st.id='cf-ng-theme-style';
            root.appendChild(st);
        }
        return st;
    };

    const ngApplyTheme=()=>{
        const style=ngEnsureThemeStyle();
        if(!style) return;
        const p=ngPalette(), theme=getNGTheme();
        const host=document.getElementById('cf-analytics-island');
        const wrapper=cfEl('cf-analytics-wrapper');
        if(wrapper) wrapper.dataset.cfNgTheme=theme;

        let inverted=false, node=host;
        while(node && node!==document.documentElement){
            const f=getComputedStyle(node).filter||'';
            if(/invert\s*\(/i.test(f)){inverted=true;break;}
            node=node.parentElement;
        }
        if(host){
            if(inverted) host.style.setProperty('filter','invert(1) hue-rotate(180deg)','important');
            else host.style.removeProperty('filter');
        }

        style.textContent=`
            :host{
                display:block!important;
                color:${p.text};
                font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,Vazirmatn,Tahoma,"Noto Sans Arabic","Noto Sans Devanagari","Nirmala UI",sans-serif;
                color-scheme:${theme};
                --ng-panel:${p.panel};
                --ng-panel2:${p.panel2};
                --ng-accent:${p.accent};
                --ng-accent2:${p.accent2};
            }
            *,*::before,*::after{box-sizing:border-box}
            #cf-analytics-wrapper{
                color:${p.text}!important;
                background:
                  radial-gradient(900px 500px at 0% 0%,${p.soft},transparent 62%),
                  radial-gradient(700px 450px at 100% 0%,${ngMix(p.accent2, 10, 'transparent')},transparent 65%),
                  ${p.bg}!important;
                border:1px solid ${p.border}!important;
                border-radius:18px!important;
                box-shadow:0 20px 60px ${p.shadow},inset 0 1px rgba(255,255,255,.10)!important;
            }
            #cf-header-bar{border-bottom:1px solid ${p.border}!important}
            #cf-analytics-wrapper h2,#cf-analytics-wrapper h3,#cf-analytics-wrapper h4,
            #cf-analytics-wrapper .cf-ng-section-title{color:${p.text}!important}
            #cf-analytics-wrapper button,#cf-settings-btn,#cf-share-btn,#cf-theme-toggle,#cf-lang-btn{
                appearance:none!important;
                color:${p.buttonText}!important;
                background:linear-gradient(135deg,${p.accent},${p.accent2})!important;
                border:1px solid ${ngMix(p.accent, 70, 'white', 10)}!important;
                border-radius:10px!important;
                padding:8px 14px!important;
                font:700 13px/1.2 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif!important;
                cursor:pointer!important;
                box-shadow:0 7px 22px ${ngMix(p.accent, 25, 'transparent')},inset 0 1px rgba(255,255,255,.24)!important;
            }
            #cf-analytics-wrapper button:hover{filter:brightness(1.07)}
            #cf-analytics-wrapper .cf-ng-card{
                background:linear-gradient(145deg,var(--ng-panel2),var(--ng-panel))!important;
                border:1px solid ${p.border}!important;
                border-radius:18px!important;
                box-shadow:0 10px 30px ${p.shadow},inset 0 1px rgba(255,255,255,.08)!important;
                color:${p.text}!important;
            }
            #cf-analytics-wrapper .cf-ng-muted{color:${p.muted}!important}
            /* Right-align actual RTL TEXT only (Farsi). Must never be
               applied to layout containers (header bar, tag list, chart
               grids) — only to elements holding plain text — so button
               order, the tag list, and chart/tooltip layout stay identical
               to the default LTR languages. */
            #cf-analytics-wrapper.cf-ng-rtl-text #cf-header-title{
                direction:rtl;text-align:right;
            }
            #cf-analytics-wrapper.cf-ng-rtl-text .cf-ng-section-title{
                direction:rtl;text-align:right;
            }
            #cf-analytics-wrapper .cf-ng-unsolved-link{
                color:${p.link}!important;background:${p.soft}!important;border:1px solid ${p.border}!important;
            }
            #cf-analytics-wrapper .cf-ng-unsolved-link:hover{
                color:${p.buttonText}!important;background:linear-gradient(135deg,${p.accent},${p.accent2})!important;
            }
            #cf-analytics-wrapper .cf-ng-chartbox{
                background:linear-gradient(145deg,var(--ng-panel2),var(--ng-panel))!important;
                border:1px solid ${p.border}!important;border-radius:18px!important;
                color:${p.text}!important;box-shadow:0 10px 30px ${p.shadow},inset 0 1px rgba(255,255,255,.08)!important;
            }
            #cf-analytics-wrapper .cf-ng-tag-list{
                scrollbar-color:${p.accent} ${p.bg}!important;scrollbar-width:thin!important;
                overflow-y:auto!important;overflow-x:visible!important;
            }
            #cf-analytics-wrapper .cf-ng-tag-list::-webkit-scrollbar{width:8px}
            #cf-analytics-wrapper .cf-ng-tag-list::-webkit-scrollbar-track{background:${p.bg};border-radius:999px}
            #cf-analytics-wrapper .cf-ng-tag-list::-webkit-scrollbar-thumb{
                background:linear-gradient(180deg,${p.accent},${p.accent2});
                border:2px solid transparent;background-clip:padding-box;border-radius:999px;
                box-shadow:0 0 7px ${ngMix(p.accent, 28, 'transparent')};
            }
            #cf-analytics-wrapper .cf-ng-tag-row{
                display:flex;align-items:center;justify-content:space-between;min-height:31px;padding:4px 5px;
                border-bottom:1px solid ${ngMix(p.border, 65, 'transparent')};color:${p.text}!important;
            }
            #cf-analytics-wrapper .cf-ng-tag-name{
                display:flex;align-items:center;min-width:0;margin-right:10px;color:${p.text}!important;
                white-space:normal!important;overflow:visible!important;text-overflow:clip!important;
            }
            #cf-analytics-wrapper .cf-ng-tag-dot-wrap{
                width:18px;height:18px;min-width:18px;margin-right:8px;position:relative;
                display:grid;place-items:center;overflow:visible!important;
            }
            #cf-analytics-wrapper .cf-ng-tag-dot-wrap::before{
                content:"";position:absolute;width:12px;height:12px;left:3px;top:3px;
                border-radius:50%;background:var(--tag-color);filter:blur(4px);opacity:.32;
                transform:scale(1.45);z-index:0;pointer-events:none;
            }
            #cf-analytics-wrapper .cf-ng-tag-dot{
                position:relative;z-index:1;width:9px;height:9px;border-radius:50%;
                background:var(--tag-color);flex:none;
                box-shadow:0 0 4px var(--tag-color),0 0 8px ${ngMixVarSafe('var(--tag-color)', 35, 'transparent')};
            }
            #cf-analytics-wrapper .cf-ng-tag-count{color:${p.accent}!important;font-weight:800;flex:none}

            /* --- Settings dropdown (Neo Glass) --- */
            #cf-settings-modal{display:none}
            #cf-settings-content{color:${p.text}!important;box-shadow:0 20px 50px ${p.shadow},inset 0 1px rgba(255,255,255,.08)!important}
            #cf-settings-modal button{
                appearance:none!important;
                color:${p.buttonText}!important;
                background:linear-gradient(135deg,${p.accent},${p.accent2})!important;
                border:1px solid ${ngMix(p.accent, 70, 'white', 10)}!important;
                border-radius:10px!important;
                padding:8px 16px!important;
                font:700 13px/1.2 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif!important;
                cursor:pointer!important;
                box-shadow:0 7px 22px ${ngMix(p.accent, 25, 'transparent')},inset 0 1px rgba(255,255,255,.24)!important;
            }
            #cf-settings-modal button:hover{filter:brightness(1.07)}
            #cf-settings-content .cf-ng-btn-secondary{
                background:transparent!important;
                color:${p.text}!important;
                border:1px solid ${p.border}!important;
                box-shadow:none!important;
            }
            #cf-settings-content .cf-ng-btn-secondary:hover{background:${p.soft}!important;filter:none}

            /* --- Language switcher dropdown (Neo Glass) --- */
            #cf-lang-menu{padding:6px!important;box-shadow:0 20px 50px ${p.shadow},inset 0 1px rgba(255,255,255,.08)!important}
            .cf-ng-lang-option{
                appearance:none!important;display:block!important;
                background:transparent!important;color:${p.text}!important;
                border:1px solid transparent!important;border-radius:8px!important;
                padding:8px 12px!important;font:600 13px/1.2 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif!important;
                cursor:pointer!important;box-shadow:none!important;text-align:start!important;
            }
            .cf-ng-lang-option:hover{background:${p.soft}!important;filter:none!important}
            .cf-ng-lang-option.cf-ng-lang-active{
                background:linear-gradient(135deg,${p.accent},${p.accent2})!important;
                color:${p.buttonText}!important;
            }
            .cf-ng-settings-hr{border:0;border-top:1px solid ${p.border};margin:6px 0}
            .cf-ng-toggle-row{
                display:flex;align-items:center;justify-content:space-between;gap:12px;
                padding:10px 12px;border-radius:10px;cursor:pointer;font-size:14px;
                background:${p.soft};border:1px solid transparent;transition:border-color .15s ease;
            }
            .cf-ng-toggle-row:hover{border-color:${p.border}}
            .cf-ng-toggle-warn span:first-child{color:#ff8a80!important;font-weight:700}
            .cf-ng-switch{position:relative;display:inline-block;width:38px;height:22px;flex:none}
            .cf-ng-switch input{position:absolute;opacity:0;width:100%;height:100%;margin:0;cursor:pointer;z-index:1}
            .cf-ng-switch-track{
                position:absolute;inset:0;border-radius:999px;
                background:${ngMix(p.text, 18, 'transparent')};
                border:1px solid ${p.border};transition:background .15s ease;
            }
            .cf-ng-switch-track::before{
                content:'';position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;
                background:${p.buttonText};box-shadow:0 1px 3px rgba(0,0,0,.35);transition:transform .15s ease;
            }
            .cf-ng-switch input:checked + .cf-ng-switch-track{background:linear-gradient(135deg,${p.accent},${p.accent2});border-color:transparent}
            .cf-ng-switch input:checked + .cf-ng-switch-track::before{transform:translateX(16px)}
        `;
    };

    window.addEventListener('resize', () => {
        chartInstances.forEach(chart => chart && chart.resize());
    });

    const getRatingColor = (rating) => {
        if (rating >= 3000) return '#aa0100';
        if (rating >= 2600) return '#ff3333';
        if (rating >= 2400) return '#ff7777';
        if (rating >= 2300) return '#ffbb55';
        if (rating >= 2100) return '#ffcc87';
        if (rating >= 1900) return '#ff88ff';
        if (rating >= 1600) return '#aaaaff';
        if (rating >= 1400) return '#76ddbb';
        if (rating >= 1200) return '#76ff77';
        return '#cccccc';
    };

    let cfShadowRoot = null;
    const cfEl = (id) => (cfShadowRoot && cfShadowRoot.getElementById(id)) || document.getElementById(id);

    const initDashboardContainer = (res) => {
        let container=cfEl('cf-analytics-wrapper');
        if(!container){
            const host=document.createElement('cf-analytics-island');
            host.id='cf-analytics-island';
            host.style.cssText='display:block;width:100%;margin-top:2em;';
            cfShadowRoot=host.attachShadow({mode:'open'});

            container=document.createElement('div');
            container.id='cf-analytics-wrapper';
            container.style.cssText='margin:0;padding:20px;box-sizing:border-box;';
            cfShadowRoot.appendChild(container);

            const pageContent=document.getElementById('pageContent');
            if(pageContent) pageContent.appendChild(host);
            else document.body.appendChild(host);
        }

        container.classList.toggle('cf-ng-rtl-text', LANG_META[currentLang].dir === 'rtl');

        container.innerHTML=`
            <div id="cf-header-bar" style="display:flex;justify-content:space-between;align-items:center;padding-bottom:12px;margin-bottom:15px;position:relative;">
                <h2 id="cf-header-title" style="margin:0;font-weight:bold;">${t('titleText')}</h2>
                <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
                    <button id="cf-settings-btn" type="button">${t('btnSettings')}</button>
                    <button id="cf-share-btn" type="button">${t('btnShare')}</button>
                    <div id="cf-lang-wrap" style="position:relative;display:inline-block;">
                        <button id="cf-lang-btn" type="button" aria-haspopup="listbox" aria-expanded="false" aria-label="${t('langSwitchLabel')}">🌐 ${LANG_META[currentLang].native}</button>
                    </div>
                    <button id="cf-theme-toggle" type="button" aria-label="Change theme"></button>
                </div>
            </div>
            <div id="cf-analytics-dashboard" style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:1em 0;"></div>
        `;

        const themeButton=cfEl('cf-theme-toggle');
        const updateThemeButton=()=>{
            const dark=getNGTheme()==='dark';
            themeButton.textContent=dark?'☀  Light':'☾  Dark';
            themeButton.title=dark?'Switch to Neo Glass Light':'Switch to Neo Glass Dark&Purple';
        };
        themeButton.addEventListener('click',()=>{
            localStorage.setItem(NG_THEME_KEY,getNGTheme()==='dark'?'light':'dark');
            chartInstances.forEach(chart=>chart&&chart.dispose());
            chartInstances.length=0;
            ngApplyTheme();
            updateThemeButton();
            drawCharts(res);
        });
        updateThemeButton();
        ngApplyTheme();

        cfEl('cf-lang-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            let menu = cfEl('cf-lang-menu');
            if (menu) {
                menu.remove();
                cfEl('cf-lang-btn').setAttribute('aria-expanded', 'false');
                return;
            }
            menu = document.createElement('div');
            menu.id = 'cf-lang-menu';
            menu.setAttribute('role', 'listbox');
            menu.className = 'cf-ng-card';
            menu.style.cssText = 'position:absolute;top:calc(100% + 8px);inset-inline-start:0;z-index:9999;min-width:150px;padding:6px;display:flex;flex-direction:column;gap:4px;';
            menu.innerHTML = LANG_ORDER.map(code => `
                <button type="button" data-lang="${code}" class="cf-ng-lang-option${code === currentLang ? ' cf-ng-lang-active' : ''}" style="width:100%;text-align:start;">
                    ${code === currentLang ? '✓ ' : ''}${LANG_META[code].native}
                </button>`).join('');
            cfEl('cf-lang-wrap').appendChild(menu);
            cfEl('cf-lang-btn').setAttribute('aria-expanded', 'true');

            menu.querySelectorAll('[data-lang]').forEach(optBtn => {
                optBtn.addEventListener('click', (ev) => {
                    ev.stopPropagation();
                    const chosen = optBtn.dataset.lang;
                    menu.remove();
                    if (chosen === currentLang) return;
                    try { localStorage.setItem(LANG_KEY, chosen); } catch (err) {}
                    currentLang = chosen;
                    chartInstances.forEach(chart => chart && chart.dispose());
                    chartInstances.length = 0;
                    drawCharts(res);
                });
            });

            document.addEventListener('click', function closeLangMenu(ev) {
                const path = ev.composedPath ? ev.composedPath() : [ev.target];
                if (!path.includes(menu) && !path.includes(cfEl('cf-lang-btn'))) {
                    menu.remove();
                    const btn = cfEl('cf-lang-btn');
                    if (btn) btn.setAttribute('aria-expanded', 'false');
                    document.removeEventListener('click', closeLangMenu, true);
                }
            }, true);
        });

        cfEl('cf-settings-btn').addEventListener('click', () => {
            let modal = cfEl('cf-settings-modal');
            const populateList = (list) => {
                list.innerHTML = '';

                const chartKeys = [
                    { id: 'ratingChart', label: t('ratings') },
                    { id: 'tagsChart', label: t('tags') },
                    { id: 'statsSummary', label: t('statsSummary') },
                    { id: 'unsolvedChart', label: t('unsolved', {n: '?'}) }
                ];
                chartKeys.forEach(item => {
                    const checked = userSettings[item.id] !== false;
                    list.insertAdjacentHTML('beforeend', ngToggleRow(item.id, item.label, checked));
                });

                list.querySelectorAll('.cf-ng-toggle-row').forEach(row => {
                    row.addEventListener('click', (e) => {
                        if (e.target.tagName === 'INPUT') return;
                        const input = row.querySelector('input[type="checkbox"]');
                        input.checked = !input.checked;
                    });
                });
            };

            if (!modal) {
                modal = document.createElement('div');
                modal.id = 'cf-settings-modal';
                modal.style.cssText = 'position: absolute; top: calc(100% + 10px); right: 0; z-index: 9999;';

                const content = document.createElement('div');
                content.id = 'cf-settings-content';
                content.className = 'cf-ng-card';
                content.style.cssText = 'padding: 20px; width: 320px; max-width: 88vw; max-height: 70vh; overflow-y: auto;';

                content.innerHTML = `
                    <h3 class="cf-ng-section-title" style="margin-top:0; padding-bottom: 12px; font-size:1.15em;">⚙️ ${t('settingsTitle')}</h3>
                    <div id="cf-settings-list" style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px;">
                    </div>
                    <div style="display: flex; justify-content: flex-end; gap: 10px;">
                        <button id="cf-settings-cancel" type="button" class="cf-ng-btn-secondary">${t('settingsCancel')}</button>
                        <button id="cf-settings-save" type="button">${t('settingsSave')}</button>
                    </div>
                `;
                modal.appendChild(content);
                cfEl('cf-header-bar').appendChild(modal);
                modal.style.display = 'block';

                const list = cfEl('cf-settings-list');
                populateList(list);

                cfEl('cf-settings-cancel').addEventListener('click', () => {
                    modal.style.display = 'none';
                });

                cfEl('cf-settings-save').addEventListener('click', () => {
                    const checkboxes = list.querySelectorAll('input[type="checkbox"]');
                    checkboxes.forEach(cb => {
                        userSettings[cb.dataset.id] = cb.checked;
                    });
                    localStorage.setItem('cf_analytics_settings', JSON.stringify(userSettings));
                    modal.style.display = 'none';

                    chartInstances.forEach(chart => chart && chart.dispose());
                    chartInstances.length = 0;
                    drawCharts(res);
                });

                document.addEventListener('click', (e) => {
                    const path = e.composedPath ? e.composedPath() : [e.target];
                    if (modal.style.display !== 'none' && !path.includes(modal) && !path.includes(cfEl('cf-settings-btn'))) {
                        modal.style.display = 'none';
                    }
                }, true);
            } else {
                modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
                modal.querySelector('h3').innerText = `⚙️ ${t('settingsTitle')}`;
                modal.querySelector('#cf-settings-cancel').innerText = t('settingsCancel');
                modal.querySelector('#cf-settings-save').innerText = t('settingsSave');
                populateList(cfEl('cf-settings-list'));
            }
        });

        cfEl('cf-share-btn').addEventListener('click', async () => {
            const btn = cfEl('cf-share-btn');
            const originalText = btn.innerText;
            btn.innerText = t('generating');
            btn.disabled = true;
            btn.style.opacity = '0.7';

            let capturing = false;
            try {
                const wrapper = cfEl('cf-analytics-wrapper');
                const handle = window.location.pathname.split('/').pop();

                const headerBtns = wrapper.querySelector('div[style*="gap: 10px"]');
                if (headerBtns) headerBtns.style.display = 'none';

                const titleEl = wrapper.querySelector('h2');
                const originalTitle = titleEl.innerText;
                titleEl.innerText = `${originalTitle} @${handle}`;

                const originalWidth = wrapper.style.width;
                const originalMaxWidth = wrapper.style.maxWidth;
                wrapper.style.width = '1200px';
                wrapper.style.maxWidth = '1200px';

                capturing = true;
                ngCaptureMode = true;
                ngApplyTheme();

                chartInstances.forEach(chart => chart && chart.resize());

                await new Promise(r => setTimeout(r, 800));

                const canvas = await html2canvas(wrapper, {
                    scale: 2,
                    useCORS: true,
                    backgroundColor: '#ffffff',
                    width: 1200
                });

                wrapper.style.width = originalWidth;
                wrapper.style.maxWidth = originalMaxWidth;
                titleEl.innerText = originalTitle;
                if (headerBtns) headerBtns.style.display = 'flex';

                const imgData = canvas.toDataURL('image/png');
                const a = document.createElement('a');
                a.href = imgData;
                a.download = `CF_Stats_${handle}.png`;
                a.click();

            } catch (err) {
                console.error(t('genErrorConsole'), err);
                alert(t('genErrorAlert'));
            } finally {
                if (capturing) {
                    ngCaptureMode = false;
                    ngApplyTheme();
                    chartInstances.forEach(chart => chart && chart.resize());
                }
                btn.innerText = originalText;
                btn.disabled = false;
                btn.style.opacity = '1';
            }
        });
    };

    const createChartContainer = (id, widthStr = '48%') => {
        const isMobile = window.innerWidth < 800;
        const finalWidth = isMobile ? '100%' : widthStr;
        const div = `<div class="cf-ng-chartbox" id="${id}" style="width: ${finalWidth}; height:480px; padding:2em 1em 0 1em; box-sizing: border-box;"></div>`;
        cfEl('cf-analytics-dashboard').insertAdjacentHTML('beforeend', div);
        return cfEl(id);
    };

    async function drawCharts(res) {
        initDashboardContainer(res);

        const yieldToMain = () => new Promise(r => setTimeout(r, 0));

        if (isChartEnabled('ratingChart')) {
            await yieldToMain();
            drawBarChart('ratingChart', t('ratings'), res.rating, '100%');
        }

        if (isChartEnabled('tagsChart')) {
            await yieldToMain();
            drawTagsChart('tagsChart', t('tags'), res.tags);
        }

        if (isChartEnabled('statsSummary')) {
            await yieldToMain();
            drawStatsSummary(res.stats);
        }

        if (isChartEnabled('unsolvedChart')) {
            await yieldToMain();
            drawUnsolvedChart(res.unsolved);
        }
    }

    const premiumColors = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'];
    const getPremiumTooltip=()=>{
        const p=ngPalette();
        return {
            backgroundColor:p.panel,borderColor:p.border,borderWidth:1,padding:[10,15],
            textStyle:{color:p.text},
            extraCssText:'border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,.28);backdrop-filter:blur(12px);'
        };
    };

    const premiumGrid = { left: '3%', right: '4%', bottom: '3%', containLabel: true };

    function drawBarChart(id, titleText, dataObj, width) {
        if (Object.keys(dataObj).length === 0) return;
        const chartDom=createChartContainer(id,width);
        const myChart=echarts.init(chartDom);
        chartInstances.push(myChart);
        const p=ngPalette();
        const xData=Object.keys(dataObj).sort((a,b)=>a-b);
        const yData=xData.map(key=>dataObj[key]);

        myChart.setOption({
            animation:false, backgroundColor:'transparent',
            title:{text:titleText,left:'center',textStyle:{fontWeight:'600',color:p.text}},
            tooltip:{
                ...getPremiumTooltip(),trigger:'item',

                formatter: params => `
                    <div style="font-size:11px;opacity:.75;margin-bottom:4px">${t('chartSolvedLabel')}</div>
                    <div dir="ltr" style="display:flex;align-items:center;gap:6px;font-size:13px">
                        ${params.marker}<b>${params.name}</b>&nbsp;${params.value}
                    </div>`
            },
            grid:{left:'5%',right:'4%',top:'16%',bottom:'9%',containLabel:true},
            xAxis:[{
                type:'category',data:xData,axisTick:{alignWithLabel:true},
                axisLine:{lineStyle:{color:p.border}},axisLabel:{color:p.muted}
            }],
            yAxis:[{
                type:'value',axisLine:{lineStyle:{color:p.border}},
                axisLabel:{color:p.muted},
                splitLine:{lineStyle:{color:p.border,type:'dashed',opacity:.55}}
            }],
            series:[{
                name:'Solved',type:'bar',barWidth:'60%',
                itemStyle:{
                    borderRadius:[6,6,0,0],
                    color:params=>getRatingColor(Number(xData[params.dataIndex]))
                },
                data:yData
            }]
        });
    }

    function drawTagsChart(id,titleText,dataObj){
        if(Object.keys(dataObj).length===0)return;
        const isMobile=window.innerWidth<800;
        const dataArr=Object.entries(dataObj).map(([name,value])=>({name,value})).sort((a,b)=>b.value-a.value);
        const totalValue=dataArr.reduce((sum,item)=>sum+item.value,0);
        const vividTagColors=[
            '#4DA3FF','#B8E64C','#FF9B68','#FF4F86','#55D6D2',
            '#58D66D','#FF6B61','#9B7CFF','#E06BFF','#39B9FF',
            '#FFD34E','#35D0A0','#FF7BC4','#7E9BFF','#C5E85B'
        ];
        const tagColors=dataArr.map((item,i)=>vividTagColors[i%vividTagColors.length]);

        const listHtml=dataArr.map((item,i)=>`
            <div class="cf-ng-tag-row">
                <span class="cf-ng-tag-name">
                    <span class="cf-ng-tag-dot-wrap" style="--tag-color:${tagColors[i]}"><span class="cf-ng-tag-dot"></span></span>
                    <span style="color:${tagColors[i]} !important;">${item.name}</span>
                </span>
                <span class="cf-ng-tag-count">${item.value}</span>
            </div>`).join('');

        const containerHtml=`
            <div class="roundbox userActivityRoundBox borderTopRound borderBottomRound cf-ng-card"
                 style="width:100%;height:480px;padding:2em 1em 1em;box-sizing:border-box;display:flex;${isMobile?'flex-direction:column;':''}gap:12px;">
                <div id="${id}" style="flex:1 1 auto;min-width:0;height:${isMobile?'300px':'100%'};"></div>
                <div class="cf-ng-tag-list" style="flex:0 0 ${isMobile?'auto':'225px'};${isMobile?'width:100%;height:140px;':'height:100%;'}max-width:${isMobile?'100%':'225px'};overflow-y:auto;overflow-x:visible;border-left:${isMobile?'none':'1px solid var(--ng-border)'};border-top:${isMobile?'1px solid var(--ng-border)':'none'};padding-left:${isMobile?'0':'10px'};padding-top:${isMobile?'8px':'0'};">
                    <div class="cf-ng-section-title" style="font-weight:bold;font-size:.9em;margin-bottom:6px;color:var(--ng-text)!important;">${titleText}</div>
                    ${listHtml}
                </div>
            </div>`;
        cfEl('cf-analytics-dashboard').insertAdjacentHTML('beforeend',containerHtml);

        const chartDom=cfEl(id),myChart=echarts.init(chartDom);
        chartInstances.push(myChart);
        const p=ngPalette();

        const seriesData=dataArr.map((item,i)=>{
            const percent=item.value/totalValue*100;
            const label=percent<4?{show:false}:{
                show:true,formatter:`{b}\n${item.value} (${percent.toFixed(1)}%)`,
                color:tagColors[i],fontSize:11,fontWeight:'600',lineHeight:15,
                overflow:'breakAll',width:170
            };
            const labelLine=percent<4?{show:false}:{
                show:true,smooth:.2,length:10,length2:12,
                lineStyle:{width:.8,opacity:.55,color:tagColors[i]}
            };
            return {...item,itemStyle:{color:tagColors[i]},label,labelLine};
        });

        myChart.setOption({
            animation:false,backgroundColor:'transparent',color:tagColors,
            title:{text:titleText,left:'center',top:10,textStyle:{fontSize:15,fontWeight:'700',color:p.text}},
            tooltip:{...getPremiumTooltip(),trigger:'item',formatter:'{b} : {c} ({d}%)'},
            series:[{
                type:'pie',radius:['35%','60%'],center:['50%','52%'],avoidLabelOverlap:true,
                itemStyle:{
                    borderRadius:6,
                    borderColor:getNGTheme()==='dark'?'rgba(255,255,255,.20)':'rgba(70,50,100,.18)',
                    borderWidth:.8,shadowBlur:5,
                    shadowColor:'rgba(0,0,0,.18)',shadowOffsetY:2
                },
                label:{show:true,color:p.text,fontSize:11,fontWeight:'500',lineHeight:15,overflow:'breakAll',width:170},
                labelLine:{show:true,smooth:.2,length:10,length2:12,lineStyle:{width:.8,opacity:.55,color:p.muted}},
                data:seriesData,
                emphasis:{label:{show:true,fontSize:12,fontWeight:'bold'},itemStyle:{shadowBlur:10,shadowOffsetY:3,shadowColor:'rgba(0,0,0,.20)'}}
            }]
        });
    }

    function drawTimelineChart(id, titleText, dataObj, width) {
        if (Object.keys(dataObj).length === 0) return;
        const chartDom = createChartContainer(id, width);
        const myChart = echarts.init(chartDom);
        chartInstances.push(myChart);

        const xData = Object.keys(dataObj).sort();
        const yData = xData.map(key => dataObj[key]);

        myChart.setOption({
            animation: false,
            title: { text: titleText, left: 'center', textStyle: { fontWeight: '600' } },
            tooltip: { ...getPremiumTooltip(), trigger: 'axis' },
            grid: premiumGrid,
            xAxis: { type: 'category', boundaryGap: false, data: xData, splitLine: { show: false } },
            yAxis: { type: 'value', name: t('submissions'), splitLine: { lineStyle: { type: 'dashed', opacity: 0.3 } } },
            dataZoom: [{ type: 'inside', start: 0, end: 100 }, { start: 0, end: 100 }],
            series: [{
                name: t('submissions'), type: 'line', smooth: 0.4,
                areaStyle: {
                    color: userSettings.liteMode ? 'rgba(0, 115, 230, 0.1)' : new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(0, 115, 230, 0.4)' },
                        { offset: 1, color: 'rgba(0, 115, 230, 0.0)' }
                    ])
                },
                lineStyle: {
                    color: '#0073e6',
                    width: 3,
                    shadowColor: 'rgba(0,115,230,0.3)',
                    shadowBlur: userSettings.liteMode ? 0 : 10
                },
                itemStyle: { color: '#0073e6' },
                data: yData
            }]
        });
    }

    function drawActivityHeatmap(id, titleText, dailyActivity, stats) {
        dailyActivity = dailyActivity || {};
        const isMobile = window.innerWidth < 800;
        const DAY_MS = 24 * 60 * 60 * 1000;

        const today = new Date();
        today.setUTCHours(0, 0, 0, 0);
        const todayDow = today.getUTCDay();
        const gridEnd = new Date(today.getTime() + (6 - todayDow) * DAY_MS);
        const WEEKS = 53;
        const gridStart = new Date(gridEnd.getTime() - (WEEKS * 7 - 1) * DAY_MS);

        let maxCount = 0;
        for (const v of Object.values(dailyActivity)) if (v > maxCount) maxCount = v;

        const levelOf = (count) => {
            if (!count) return 0;
            if (maxCount <= 4) return Math.min(4, count);
            const ratio = count / maxCount;
            if (ratio > 0.75) return 4;
            if (ratio > 0.5) return 3;
            if (ratio > 0.25) return 2;
            return 1;
        };

        const p = ngPalette();
        const levelColor = (level) => level === 0
            ? `color-mix(in srgb, ${p.text} 8%, transparent)`
            : `color-mix(in srgb, ${p.accent} ${25 + level * 18}%, transparent)`;

        const cells = [];
        const monthLabels = [];
        let lastMonth = -1;
        let activeDays = 0;

        for (let week = 0; week < WEEKS; week++) {
            for (let dow = 0; dow < 7; dow++) {
                const cellDate = new Date(gridStart.getTime() + (week * 7 + dow) * DAY_MS);
                if (cellDate > gridEnd) continue;
                const dayStr = cellDate.toISOString().split('T')[0];
                const count = dailyActivity[dayStr] || 0;
                if (count > 0) activeDays++;
                const isFuture = cellDate > today;

                if (dow === 0) {
                    const m = cellDate.getUTCMonth();
                    if (m !== lastMonth) {
                        lastMonth = m;
                        monthLabels.push({
                            week,
                            label: cellDate.toLocaleString(currentLang === 'zh' ? 'zh-CN' : 'en-US', { month: 'short' })
                        });
                    }
                }

                cells.push(`<div title="${dayStr}: ${count} ${t('submissions')}" style="grid-column:${week + 1}; grid-row:${dow + 1}; width:11px; height:11px; border-radius:3px; background:${isFuture ? 'transparent' : levelColor(levelOf(count))}; border:1px solid ${isFuture ? 'transparent' : `color-mix(in srgb, ${p.text} 6%, transparent)`};"></div>`);
            }
        }

        const monthLabelsHtml = monthLabels.map(m =>
            `<span class="cf-ng-muted" style="position:absolute; left:${m.week * 14}px; font-size:11px;">${m.label}</span>`
        ).join('');

        const dowLabels = ['', 'Mon', '', 'Wed', '', 'Fri', ''];
        const dowLabelsHtml = dowLabels.map(d =>
            `<span class="cf-ng-muted" style="font-size:9px; line-height:11px;">${d}</span>`
        ).join('');

        const legendHtml = [0, 1, 2, 3, 4].map(l =>
            `<div style="width:11px; height:11px; border-radius:3px; background:${levelColor(l)};"></div>`
        ).join('');

        const html = `
            <div class="roundbox userActivityRoundBox borderTopRound borderBottomRound cf-ng-card" style="width:100%; padding:1.5em; margin-top:1em; box-sizing:border-box; overflow-x:${isMobile ? 'auto' : 'visible'};">
                <div style="display:flex; justify-content:space-between; align-items:baseline; flex-wrap:wrap; gap:8px; margin-bottom:12px;">
                    <h4 class="cf-ng-section-title" style="font-size:1.2em; font-weight:bold; margin:0;">📅 ${titleText}</h4>
                    <span class="cf-ng-muted" style="font-size:0.85em;">${activeDays} ${currentLang === 'zh' ? '天有提交（近一年）' : 'active days in the last year'}</span>
                </div>
                <div style="min-width:${isMobile ? '760px' : 'auto'};">
                    <div style="position:relative; height:16px; margin-bottom:4px; margin-left:20px;">
                        ${monthLabelsHtml}
                    </div>
                    <div style="display:flex; gap:4px;">
                        <div style="display:grid; grid-template-rows:repeat(7,11px); gap:3px; margin-right:4px;">
                            ${dowLabelsHtml}
                        </div>
                        <div style="display:grid; grid-template-columns:repeat(${WEEKS},11px); grid-template-rows:repeat(7,11px); gap:3px;">
                            ${cells.join('')}
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; justify-content:flex-end; gap:5px; margin-top:10px;">
                    <span class="cf-ng-muted" style="font-size:11px;">${currentLang === 'zh' ? '少' : 'Less'}</span>
                    ${legendHtml}
                    <span class="cf-ng-muted" style="font-size:11px;">${currentLang === 'zh' ? '多' : 'More'}</span>
                </div>
            </div>`;

        cfEl('cf-analytics-dashboard').insertAdjacentHTML('beforeend', html);
    }

    function drawScatterChart(id, titleText, dataArr, metric) {
        if (dataArr.length === 0) return;
        const chartDom = createChartContainer(id, '49%');
        const myChart = echarts.init(chartDom);
        chartInstances.push(myChart);

        const isMemory = metric === 'memory';
        const axisName = isMemory ? t('memory') : t('time');
        const colorBase = isMemory ? '40, 167, 69' : '0, 115, 230';

        myChart.setOption({
            animation: false,
            title: { text: titleText, left: 'center', textStyle: { fontSize: 14, fontWeight: '600' } },
            grid: { left: '3%', right: '8%', bottom: '3%', containLabel: true },
            tooltip: {
                ...getPremiumTooltip(),
                formatter: function (param) {
                    const data = param.data;
                    return `<div style="font-weight:bold;">${data[2]}</div>${axisName}: ${data[0]}<br/>${t('rating')}: ${data[1]}`;
                }
            },
            xAxis: { type: 'value', name: axisName, splitLine: { show: false } },
            yAxis: { type: 'value', name: t('rating'), splitLine: { lineStyle: { type: 'dashed', opacity: 0.3 } } },
            series: [{
                symbolSize: 8,
                data: dataArr,
                type: 'scatter',
                itemStyle: {
                    color: `rgba(${colorBase}, 0.7)`,
                    shadowBlur: userSettings.liteMode ? 0 : 5,
                    shadowColor: `rgba(${colorBase}, 0.5)`
                }
            }]
        });
    }

    function drawSpeedChart(id, titleText, speedData, width) {
        if (!speedData || speedData.length === 0) return;
        const chartDom = createChartContainer(id, width);
        const myChart = echarts.init(chartDom);
        chartInstances.push(myChart);

        const categories = ['0-10min', '10-30min', '30-60min', '1-2h', '2-4h', '>4h'];
        const values = categories.map(cat => speedData[cat] || 0);

        myChart.setOption({
            animation: false,
            title: { text: titleText, left: 'center', textStyle: { fontSize: 14, fontWeight: '600' } },
            tooltip: { ...getPremiumTooltip(), trigger: 'axis', axisPointer: { type: 'shadow' } },
            grid: premiumGrid,
            xAxis: { type: 'category', data: categories, axisTick: { alignWithLabel: true }, splitLine: { show: false } },
            yAxis: { type: 'value', name: t('submissions'), splitLine: { lineStyle: { type: 'dashed', opacity: 0.3 } } },
            series: [{
                name: t('submissions'),
                type: 'bar',
                data: values,
                itemStyle: {
                    borderRadius: [6, 6, 0, 0],
                    color: userSettings.liteMode ? '#188df0' : new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#83bff6' },
                        { offset: 0.5, color: '#188df0' },
                        { offset: 1, color: '#188df0' }
                    ])
                },
                emphasis: {
                    itemStyle: {
                        color: userSettings.liteMode ? '#2378f7' : new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#2378f7' },
                            { offset: 0.7, color: '#2378f7' },
                            { offset: 1, color: '#83bff6' }
                        ])
                    }
                }
            }]
        });
    }

    function drawMACurveChart(id, titleText, dataArr, width) {
        if (dataArr.length === 0) return;
        const chartDom = createChartContainer(id, width);
        const myChart = echarts.init(chartDom);
        chartInstances.push(myChart);

        myChart.setOption({
            animation: false,
            title: { text: titleText, left: 'center', textStyle: { fontSize: 14, fontWeight: '600' } },
            tooltip: { ...getPremiumTooltip(), trigger: 'axis' },
            grid: premiumGrid,
            xAxis: { type: 'category', boundaryGap: false, data: dataArr.map(d => d[0]), splitLine: { show: false } },
            yAxis: { type: 'value', min: 'dataMin', splitLine: { lineStyle: { type: 'dashed', opacity: 0.3 } } },
            dataZoom: [{ type: 'inside', start: 0, end: 100 }, { start: 0, end: 100 }],
            series: [{
                name: 'Avg Rating',
                type: 'line',
                smooth: 0.4,
                symbol: 'none',
                areaStyle: {
                    color: userSettings.liteMode ? 'rgba(219, 112, 147, 0.15)' : new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(219, 112, 147, 0.6)' },
                        { offset: 1, color: 'rgba(219, 112, 147, 0.05)' }
                    ])
                },
                lineStyle: {
                    color: '#db7093',
                    width: 3,
                    shadowBlur: userSettings.liteMode ? 0 : 10,
                    shadowColor: 'rgba(219, 112, 147, 0.4)'
                },
                data: dataArr.map(d => d[1])
            }]
        });
    }

    function drawTimeOfDayChart(id, titleText, timeArr, width) {
        const chartDom = createChartContainer(id, width);
        const myChart = echarts.init(chartDom);
        chartInstances.push(myChart);

        const xData = Array.from({length: 24}, (_, i) => i + ':00');
        myChart.setOption({
            animation: false,
            title: { text: titleText, left: 'center', textStyle: { fontSize: 14, fontWeight: '600' } },
            tooltip: { ...getPremiumTooltip(), trigger: 'axis', axisPointer: { type: 'shadow' } },
            grid: premiumGrid,
            xAxis: { type: 'category', data: xData, axisTick: { alignWithLabel: true }, splitLine: { show: false } },
            yAxis: { type: 'value', splitLine: { lineStyle: { type: 'dashed', opacity: 0.3 } } },
            series: [{
                name: 'Submissions',
                type: 'bar',
                data: timeArr,
                itemStyle: {
                    borderRadius: [6, 6, 0, 0],
                    color: userSettings.liteMode ? '#4facfe' : new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#4facfe' },
                        { offset: 1, color: '#00f2fe' }
                    ])
                }
            }]
        });
    }

    function drawTagWeaknessChart(id, titleText, tagData, width) {
        if (Object.keys(tagData).length === 0) return;
        const chartDom = createChartContainer(id, width);
        const myChart = echarts.init(chartDom);
        chartInstances.push(myChart);

        const dataArr = Object.entries(tagData)
            .sort((a, b) => a[1] - b[1]);

        const yData = dataArr.map(d => d[0]);
        const xData = dataArr.map(d => d[1].toFixed(1));

        myChart.setOption({
            animation: false,
            title: { text: titleText, left: 'center', textStyle: { fontSize: 14, fontWeight: '600' } },
            tooltip: { ...getPremiumTooltip(), trigger: 'axis', axisPointer: { type: 'shadow' } },
            grid: { left: '3%', right: '8%', bottom: '3%', containLabel: true },
            xAxis: { type: 'value', name: 'Avg Tries', splitLine: { lineStyle: { type: 'dashed', opacity: 0.3 } } },
            yAxis: { type: 'category', data: yData, axisLabel: { width: 100, overflow: 'truncate' }, splitLine: { show: false } },
            dataZoom: [{ type: 'slider', yAxisIndex: 0, start: Math.max(0, 100 - (15 / yData.length * 100)), end: 100 }],
            series: [{
                name: 'Avg Tries',
                type: 'bar',
                data: xData,
                itemStyle: {
                    borderRadius: [0, 6, 6, 0],
                    color: userSettings.liteMode ? '#ff758c' : new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                        { offset: 0, color: '#ff758c' },
                        { offset: 1, color: '#ff7eb3' }
                    ])
                },
                label: { show: true, position: 'right', fontWeight: 'bold' }
            }]
        });
    }

    function drawStatsSummary(stats) {
        if (!stats) return;
        const isMobile = window.innerWidth < 800;
        const acRateText = stats.acRate ? stats.acRate.toFixed(1) + '%' : '0%';
        const cards = [
            [t('solvedProblems'), stats.solvedProblems || 0, '#42d98a'],
            [t('totalSubmissions'), stats.totalSubmissions || 0, '#78a8ff'],
            [t('acRate'), acRateText, '#b78cff'],
            [t('streak'), `${stats.maxStreak || 0} <span style="font-size:.6em">${t('days')}</span>`, '#f5c451'],
            [t('currentStreak'), `${stats.currentStreak || 0} <span style="font-size:.6em">${t('days')}</span>`, '#5ee6c8'],
            [t('points'), stats.totalPoints || 0, '#ff718d']
        ];
        const div = `
            <div class="roundbox userActivityRoundBox borderTopRound borderBottomRound cf-ng-card" style="width:100%;padding:1.5em;margin-top:1em;box-sizing:border-box;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1em;gap:10px;flex-wrap:wrap;">
                    <h4 class="cf-ng-section-title" style="font-size:1.2em;font-weight:bold;margin:0;">${currentLang === 'fa' ? `${t('statsSummary')} 📊` : `📊 ${t('statsSummary')}`}</h4>
                    <button id="cf-stats-copy-btn" type="button" style="font-size:.8em;padding:6px 12px;">📋 ${t('copy')}</button>
                </div>
                <div style="display:grid;grid-template-columns:repeat(${isMobile ? 2 : 3},1fr);gap:15px;">
                    ${cards.map(([label, value, accent]) => `
                        <div class="cf-ng-card" style="padding:15px;border-radius:12px;border-left:4px solid ${accent};text-align:center;">
                            <div class="cf-ng-muted" style="font-size:.9em;margin-bottom:5px;">${label}</div>
                            <div style="font-size:1.8em;font-weight:bold;color:${accent};">${value}</div>
                        </div>`).join('')}
                </div>
            </div>`;
        cfEl('cf-analytics-dashboard').insertAdjacentHTML('beforeend', div);

        const copyBtn = cfEl('cf-stats-copy-btn');
        if (copyBtn) {
            copyBtn.addEventListener('click', async () => {
                const handle = window.location.pathname.split('/').pop();
                const lines = [
                    `Codeforces stats for ${handle}:`,
                    `Solved: ${stats.solvedProblems || 0}`,
                    `Submissions: ${stats.totalSubmissions || 0}`,
                    `AC Rate: ${acRateText}`,
                    `Max Streak: ${stats.maxStreak || 0} days`,
                    `Current Streak: ${stats.currentStreak || 0} days`,
                    `Total Rating Solved: ${stats.totalPoints || 0}`
                ];
                const originalText = copyBtn.innerText;
                try {
                    await navigator.clipboard.writeText(lines.join('\n'));
                    copyBtn.innerText = `✅ ${t('copied')}`;
                } catch (e) {
                    copyBtn.innerText = `❌ ${t('copyFailed')}`;
                }
                setTimeout(() => { copyBtn.innerText = originalText; }, 1500);
            });
        }
    }

    function drawUnsolvedChart(unsolvedData) {
        const unsolvedKeys=Object.keys(unsolvedData);
        if(unsolvedKeys.length===0) return;
        const p=ngPalette();
        const div=`
            <div class="roundbox userActivityRoundBox borderTopRound borderBottomRound cf-ng-card" style="width:100%;padding:1.5em;margin-top:1em;box-sizing:border-box;">
                <h4 class="cf-ng-section-title" style="font-size:1.2em;font-weight:bold;margin-bottom:.8em;">🔥 ${t('unsolved',{n:unsolvedKeys.length})}</h4>
                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                    ${Object.entries(unsolvedData).map(([id,info])=>{
                        const baseUrl=info.contestId<10000
                            ?`https://codeforces.com/problemset/problem/${info.contestId}/${info.problemIndex}`
                            :`https://codeforces.com/problemset/gymProblem/${info.contestId}/${info.problemIndex}`;
                        return `<a href="${baseUrl}" target="_blank" class="cf-ng-unsolved-link" style="text-decoration:none;padding:5px 11px;border-radius:8px;font-size:.85em;transition:all .2s;box-shadow:0 3px 10px rgba(0,0,0,.12);">${id}</a>`;
                    }).join('')}
                </div>
            </div>`;
        cfEl('cf-analytics-dashboard').insertAdjacentHTML('beforeend',div);
    }

    function processSubmissions(submissions) {
        submissions.sort((a, b) => a.creationTimeSeconds - b.creationTimeSeconds);

        const res = {
            rating: {},
            tags: {},
            lang: {},
            unsolved: {},
            verdicts: {},
            participantType: {},
            attempts: {},
            timeline: {},
            performance: [],
            memoryPerformance: [],
            speedAnalysis: {},
            movingAverage: [],
            tagAttemptsAvg: {},
            timeOfDay: new Array(24).fill(0),
            errorDiagnosis: {},
            langDifficulty: {},
            stats: {
                totalSubmissions: 0,
                solvedProblems: 0,
                maxStreak: 0,
                currentStreak: 0,
                totalPoints: 0,
                acRate: 0,
                highestRating: 0
            }
        };
        const acRatingsTimeline = [];
        const tagTriesAgg = {};
        const langRatingAgg = {};
        const problemState = new Map();
        const solvedProblems = new Map();
        const dailySubmissions = new Map();
        let totalAC = 0;
        let totalSubmissions = submissions.length;

        submissions.forEach(sub => {
            const problem = sub.problem;
            if (!problem || !problem.contestId) return;
            const problemId = `${problem.contestId}${problem.index}`;

            res.stats.totalSubmissions++;

            let v = sub.verdict;
            if (v) {
                if (v === 'WRONG_ANSWER') v = 'WA';
                else if (v === 'TIME_LIMIT_EXCEEDED') v = 'TLE';
                else if (v === 'MEMORY_LIMIT_EXCEEDED') v = 'MLE';
                else if (v === 'COMPILATION_ERROR') v = 'CE';
                else if (v === 'RUNTIME_ERROR') v = 'RE';
                else if (v === 'OK') {
                    v = 'AC';
                    totalAC++;
                }
                else if (v === 'PASSED_PRETESTS') v = 'Pretest OK';
                res.verdicts[v] = (res.verdicts[v] || 0) + 1;
            }

            if (sub.author && sub.author.participantType) {
                res.participantType[sub.author.participantType] = (res.participantType[sub.author.participantType] || 0) + 1;
            }

            const date = new Date(sub.creationTimeSeconds * 1000);
            const monthStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
            res.timeline[monthStr] = (res.timeline[monthStr] || 0) + 1;

            const dayStr = date.toISOString().split('T')[0];
            dailySubmissions.set(dayStr, (dailySubmissions.get(dayStr) || 0) + 1);

            res.timeOfDay[date.getHours()]++;

            if (sub.verdict === 'WRONG_ANSWER' || sub.verdict === 'TIME_LIMIT_EXCEEDED') {
                const passed = sub.passedTestCount || 0;
                let bucket = 'test1_2';
                if (passed >= 2 && passed < 10) bucket = 'test3_10';
                else if (passed >= 10 && passed < 50) bucket = 'test11_50';
                else if (passed >= 50) bucket = 'test50plus';
                res.errorDiagnosis[bucket] = (res.errorDiagnosis[bucket] || 0) + 1;
            }

            if (sub.relativeTimeSeconds && sub.relativeTimeSeconds < 2147483647) {
                const minutes = sub.relativeTimeSeconds / 60;
                let speedCategory;
                if (minutes <= 10) speedCategory = '0-10min';
                else if (minutes <= 30) speedCategory = '10-30min';
                else if (minutes <= 60) speedCategory = '30-60min';
                else if (minutes <= 120) speedCategory = '1-2h';
                else if (minutes <= 240) speedCategory = '2-4h';
                else speedCategory = '>4h';
                res.speedAnalysis[speedCategory] = (res.speedAnalysis[speedCategory] || 0) + 1;
            }

            if (!problemState.has(problemId)) problemState.set(problemId, { ac: false, tries: 0 });
            const pState = problemState.get(problemId);

            if (!pState.ac) {
                pState.tries++;
                if (sub.verdict === 'OK') {
                    pState.ac = true;
                    let tryKey = pState.tries === 1 ? 'try1' : pState.tries === 2 ? 'try2' : pState.tries <= 5 ? 'try3_5' : 'tryMore';
                    res.attempts[tryKey] = (res.attempts[tryKey] || 0) + 1;

                    if (problem.rating && sub.timeConsumedMillis !== undefined) {
                        res.performance.push([sub.timeConsumedMillis, problem.rating, problem.name]);
                    }

                    if (problem.rating && sub.memoryConsumedBytes !== undefined) {
                        const memoryKB = Math.round(sub.memoryConsumedBytes / 1024);
                        res.memoryPerformance.push([memoryKB, problem.rating, problem.name]);
                    }

                    if (problem.rating) {
                        res.stats.totalPoints += problem.rating;
                    }

                    if (problem.rating && problem.rating > res.stats.highestRating) {
                        res.stats.highestRating = problem.rating;
                    }

                    if (problem.rating) {
                        acRatingsTimeline.push({ date: date, rating: problem.rating });
                    }

                    if (problem.tags) {
                        problem.tags.forEach(tag => {
                            if (!tagTriesAgg[tag]) tagTriesAgg[tag] = { tries: 0, ac: 0 };
                            tagTriesAgg[tag].tries += pState.tries;
                            tagTriesAgg[tag].ac += 1;
                        });
                    }

                    if (problem.rating && sub.programmingLanguage) {
                        if (!langRatingAgg[sub.programmingLanguage]) langRatingAgg[sub.programmingLanguage] = { sum: 0, count: 0 };
                        langRatingAgg[sub.programmingLanguage].sum += problem.rating;
                        langRatingAgg[sub.programmingLanguage].count += 1;
                    }

                    solvedProblems.set(problemId, sub);
                    if (res.unsolved[problemId]) delete res.unsolved[problemId];
                } else {
                    res.unsolved[problemId] = { contestId: problem.contestId, problemIndex: problem.index };
                }
            }
        });

        solvedProblems.forEach(sub => {
            const { rating, tags } = sub.problem;
            const lang = sub.programmingLanguage;
            if (rating) res.rating[rating] = (res.rating[rating] || 0) + 1;
            if (lang) res.lang[lang] = (res.lang[lang] || 0) + 1;
            if (tags && tags.length > 0) tags.forEach(tag => { res.tags[tag] = (res.tags[tag] || 0) + 1; });
        });

        const windowSize = 20;
        let sum = 0;
        for (let i = 0; i < acRatingsTimeline.length; i++) {
            sum += acRatingsTimeline[i].rating;
            if (i >= windowSize) {
                sum -= acRatingsTimeline[i - windowSize].rating;
            }
            const count = Math.min(i + 1, windowSize);
            const dateStr = acRatingsTimeline[i].date.toISOString().split('T')[0];
            res.movingAverage.push([dateStr, Math.round(sum / count)]);
        }

        for (const [tag, agg] of Object.entries(tagTriesAgg)) {
            if (agg.ac > 0) res.tagAttemptsAvg[tag] = agg.tries / agg.ac;
        }

        for (const [lang, agg] of Object.entries(langRatingAgg)) {
            if (agg.count > 0) {
                res.langDifficulty[lang] = Math.round(agg.sum / agg.count);
            }
        }

        res.stats.solvedProblems = solvedProblems.size;
        res.stats.acRate = totalSubmissions > 0 ? (totalAC / totalSubmissions * 100) : 0;

        res.stats.maxStreak = calculateMaxStreakFromDays(dailySubmissions);
        res.stats.currentStreak = calculateCurrentStreakFromDays(dailySubmissions);
        res.dailyActivity = Object.fromEntries(dailySubmissions);

        return res;
    }

    function calculateCurrentStreakFromDays(daysMap) {
        if (daysMap.size === 0) return 0;
        const ONE_DAY_MS = 24 * 60 * 60 * 1000;
        const todayStr = new Date().toISOString().split('T')[0];
        const today = new Date(todayStr + 'T00:00:00Z').getTime();

        let cursor = today;
        if (!daysMap.has(new Date(cursor).toISOString().split('T')[0])) {
            cursor -= ONE_DAY_MS;
            if (!daysMap.has(new Date(cursor).toISOString().split('T')[0])) return 0;
        }

        let streak = 0;
        while (daysMap.has(new Date(cursor).toISOString().split('T')[0])) {
            streak++;
            cursor -= ONE_DAY_MS;
        }
        return streak;
    }

    function calculateMaxStreakFromDays(daysMap) {
        if (daysMap.size === 0) return 0;

        const ONE_DAY_MS = 24 * 60 * 60 * 1000;
        const dayTimestamps = Array.from(daysMap.keys())
            .map(d => new Date(d + 'T00:00:00Z').getTime())
            .sort((a, b) => a - b);

        let maxStreak = 1;
        let currentStreak = 1;

        for (let i = 1; i < dayTimestamps.length; i++) {
            const diffDays = Math.round((dayTimestamps[i] - dayTimestamps[i - 1]) / ONE_DAY_MS);
            if (diffDays === 1) {
                currentStreak++;
                maxStreak = Math.max(maxStreak, currentStreak);
            } else if (diffDays > 1) {
                currentStreak = 1;
            }
        }

        return maxStreak;
    }

    async function init() {
        const pathname = window.location.pathname;
        const handle = pathname.substring(pathname.lastIndexOf('/') + 1);
        if (!handle) return;

        try {
            const response = await fetch(`https://codeforces.com/api/user.status?handle=${handle}`);
            if (!response.ok) throw new Error('API Error');
            const json = await response.json();

            if (json.status === "OK") {

                const processedData = processSubmissions(json.result);
                await drawCharts(processedData);

            }
        } catch (err) {
            console.error("Failed to load Codeforces Data:", err);
            alert(t('fetchError'));
        }
    }

    init();
})();
