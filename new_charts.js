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

    const premiumColors = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'];
    const premiumTooltip = {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        padding: [10, 15],
        textStyle: { color: '#333' },
        extraCssText: 'box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border-radius: 12px;'
    };
    const premiumGrid = { left: '3%', right: '4%', bottom: '3%', containLabel: true };

    function drawBarChart(id, titleText, dataObj, width) {
        if (Object.keys(dataObj).length === 0) return;
        const chartDom = createChartContainer(id, width);
        const myChart = echarts.init(chartDom);
        chartInstances.push(myChart);

        const xData = Object.keys(dataObj).sort((a, b) => a - b);
        const yData = xData.map(key => dataObj[key]);

        myChart.setOption({
            title: { text: titleText, left: 'center', textStyle: { fontWeight: '600' } },
            tooltip: { ...premiumTooltip, trigger: 'axis', axisPointer: { type: 'shadow', shadowStyle: { color: 'rgba(0,0,0,0.05)' } } },
            grid: premiumGrid,
            xAxis: [{ type: 'category', data: xData, axisTick: { alignWithLabel: true }, splitLine: { show: false } }],
            yAxis: [{ type: 'value', splitLine: { lineStyle: { type: 'dashed', opacity: 0.3 } } }],
            series: [{
                name: 'Solved', type: 'bar', barWidth: '60%',
                itemStyle: {
                    borderRadius: [6, 6, 0, 0],
                    color: function(params) {
                        const baseColor = getRatingColor(Number(xData[params.dataIndex]));
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: baseColor },
                            { offset: 1, color: '#ffffff' }
                        ]);
                    }
                },
                data: yData
            }]
        });
    }

    function drawPieChart(id, titleText, dataObj) {
        if (Object.keys(dataObj).length === 0) return;
        const chartDom = createChartContainer(id, '49%');
        const myChart = echarts.init(chartDom);
        chartInstances.push(myChart);

        const dataArr = Object.entries(dataObj)
            .map(([name, value]) => ({ name, value }))
            .sort((a, b) => b.value - a.value);

        const totalValue = dataArr.reduce((sum, item) => sum + item.value, 0);

        dataArr.forEach(item => {
            const percent = (item.value / totalValue) * 100;
            if (percent < 4) {
                item.label = { show: false };
                item.labelLine = { show: false };
            } else {
                let shortName = item.name.length > 12 ? item.name.substring(0, 12) + '...' : item.name;
                item.label = {
                    formatter: `${shortName}\n${item.value} (${percent.toFixed(1)}%)`
                };
            }
        });

        myChart.setOption({
            color: premiumColors,
            title: [
                {
                    text: titleText, left: 'center', top: 10,
                    textStyle: { fontSize: 14, fontWeight: '600', color: '#333' }
                },
                {
                    text: totalValue.toString(),
                    subtext: currentLang === 'zh' ? '总计' : 'Total',
                    left: 'center',
                    top: '47%',
                    textAlign: 'center',
                    textStyle: { fontSize: 24, fontWeight: 'bold', color: '#0073e6', lineHeight: 28 },
                    subtextStyle: { fontSize: 12, color: '#999', lineHeight: 14 }
                }
            ],
            tooltip: { ...premiumTooltip, trigger: 'item', formatter: '{b} : {c} ({d}%)' },
            legend: {
                type: 'scroll', orient: 'horizontal', bottom: 10, left: 'center', width: '90%',
                icon: 'circle', itemWidth: 10, itemHeight: 10, itemGap: 15,
                textStyle: { fontSize: 11, color: '#666' },
                tooltip: { show: true }
            },
            series: [{
                type: 'pie',
                radius: ['35%', '50%'],
                center: ['50%', '50%'],
                avoidLabelOverlap: true,
                itemStyle: {
                    borderRadius: 8,
                    borderColor: '#fff',
                    borderWidth: 2,
                    shadowBlur: 8,
                    shadowColor: 'rgba(0, 0, 0, 0.15)',
                    shadowOffsetY: 3
                },
                label: {
                    show: true,
                    color: '#555',
                    fontSize: 11,
                    fontWeight: '500',
                    lineHeight: 14
                },
                labelLine: {
                    show: true,
                    smooth: 0.2,
                    length: 10,
                    length2: 12,
                    lineStyle: {
                        width: 1.2,
                        opacity: 0.8
                    }
                },
                data: dataArr,
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 12,
                        fontWeight: 'bold'
                    },
                    itemStyle: {
                        shadowBlur: 20,
                        shadowOffsetX: 0,
                        shadowOffsetY: 8,
                        shadowColor: 'rgba(0, 0, 0, 0.3)'
                    }
                }
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
            title: { text: titleText, left: 'center', textStyle: { fontWeight: '600' } },
            tooltip: { ...premiumTooltip, trigger: 'axis' },
            grid: premiumGrid,
            xAxis: { type: 'category', boundaryGap: false, data: xData, splitLine: { show: false } },
            yAxis: { type: 'value', name: t('submissions'), splitLine: { lineStyle: { type: 'dashed', opacity: 0.3 } } },
            dataZoom: [{ type: 'inside', start: 0, end: 100 }, { start: 0, end: 100 }],
            series: [{
                name: t('submissions'), type: 'line', smooth: 0.4,
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(0, 115, 230, 0.4)' },
                        { offset: 1, color: 'rgba(0, 115, 230, 0.0)' }
                    ])
                },
                lineStyle: { color: '#0073e6', width: 3, shadowColor: 'rgba(0,115,230,0.3)', shadowBlur: 10 },
                itemStyle: { color: '#0073e6' },
                data: yData
            }]
        });
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
            title: { text: titleText, left: 'center', textStyle: { fontSize: 14, fontWeight: '600' } },
            grid: { left: '3%', right: '8%', bottom: '3%', containLabel: true },
            tooltip: {
                ...premiumTooltip,
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
                    shadowBlur: 5,
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
            title: { text: titleText, left: 'center', textStyle: { fontSize: 14, fontWeight: '600' } },
            tooltip: { ...premiumTooltip, trigger: 'axis', axisPointer: { type: 'shadow' } },
            grid: premiumGrid,
            xAxis: { type: 'category', data: categories, axisTick: { alignWithLabel: true }, splitLine: { show: false } },
            yAxis: { type: 'value', name: t('submissions'), splitLine: { lineStyle: { type: 'dashed', opacity: 0.3 } } },
            series: [{
                name: t('submissions'),
                type: 'bar',
                data: values,
                itemStyle: {
                    borderRadius: [6, 6, 0, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#83bff6' },
                        { offset: 0.5, color: '#188df0' },
                        { offset: 1, color: '#188df0' }
                    ])
                },
                emphasis: {
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
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
            title: { text: titleText, left: 'center', textStyle: { fontSize: 14, fontWeight: '600' } },
            tooltip: { ...premiumTooltip, trigger: 'axis' },
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
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(219, 112, 147, 0.6)' },
                        { offset: 1, color: 'rgba(219, 112, 147, 0.05)' }
                    ])
                },
                lineStyle: { color: '#db7093', width: 3, shadowBlur: 10, shadowColor: 'rgba(219, 112, 147, 0.4)' },
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
            title: { text: titleText, left: 'center', textStyle: { fontSize: 14, fontWeight: '600' } },
            tooltip: { ...premiumTooltip, trigger: 'axis', axisPointer: { type: 'shadow' } },
            grid: premiumGrid,
            xAxis: { type: 'category', data: xData, axisTick: { alignWithLabel: true }, splitLine: { show: false } },
            yAxis: { type: 'value', splitLine: { lineStyle: { type: 'dashed', opacity: 0.3 } } },
            series: [{
                name: 'Submissions',
                type: 'bar',
                data: timeArr,
                itemStyle: {
                    borderRadius: [6, 6, 0, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
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
            title: { text: titleText, left: 'center', textStyle: { fontSize: 14, fontWeight: '600' } },
            tooltip: { ...premiumTooltip, trigger: 'axis', axisPointer: { type: 'shadow' } },
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
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
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

        const div = `
            <div class="roundbox userActivityRoundBox borderTopRound borderBottomRound" style="width: 100%; padding: 1.5em; margin-top: 1em; box-sizing: border-box;">
                <h4 style="font-size: 1.2em; color: #333; font-weight: bold; margin-bottom: 1em;">📊 ${currentLang === 'zh' ? '统计摘要' : 'Statistics Summary'}</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                    <div style="background: #ffffff; padding: 15px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border-left: 4px solid #0073e6; transition: all 0.3s; cursor: default;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.1)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';">
                        <div style="font-size: 0.9em; color: #666; margin-bottom: 5px;">${currentLang === 'zh' ? '总提交数' : 'Total Submissions'}</div>
                        <div style="font-size: 1.8em; font-weight: bold; color: #0073e6;">${stats.totalSubmissions || 0}</div>
                    </div>
                    <div style="background: #ffffff; padding: 15px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border-left: 4px solid #28a745; transition: all 0.3s; cursor: default;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.1)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';">
                        <div style="font-size: 0.9em; color: #666; margin-bottom: 5px;">${currentLang === 'zh' ? '已解决题目' : 'Solved Problems'}</div>
                        <div style="font-size: 1.8em; font-weight: bold; color: #28a745;">${stats.solvedProblems || 0}</div>
                    </div>
                    <div style="background: #ffffff; padding: 15px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border-left: 4px solid #ffc107; transition: all 0.3s; cursor: default;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.1)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';">
                        <div style="font-size: 0.9em; color: #666; margin-bottom: 5px;">${t('streak')}</div>
                        <div style="font-size: 1.8em; font-weight: bold; color: #ffc107;">${stats.maxStreak || 0} <span style="font-size:0.6em">${t('days')}</span></div>
                    </div>
                    <div style="background: #ffffff; padding: 15px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border-left: 4px solid #dc3545; transition: all 0.3s; cursor: default;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.1)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';">
                        <div style="font-size: 0.9em; color: #666; margin-bottom: 5px;">${t('points')}</div>
                        <div style="font-size: 1.8em; font-weight: bold; color: #dc3545;">${stats.totalPoints || 0}</div>
                    </div>
                    <div style="background: #ffffff; padding: 15px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border-left: 4px solid #6f42c1; transition: all 0.3s; cursor: default;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.1)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';">
                        <div style="font-size: 0.9em; color: #666; margin-bottom: 5px;">${currentLang === 'zh' ? 'AC率' : 'AC Rate'}</div>
                        <div style="font-size: 1.8em; font-weight: bold; color: #6f42c1;">${stats.acRate ? stats.acRate.toFixed(1) + '%' : '0%'}</div>
                    </div>
                    <div style="background: #ffffff; padding: 15px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border-left: 4px solid #fd7e14; transition: all 0.3s; cursor: default;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.1)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';">
                        <div style="font-size: 0.9em; color: #666; margin-bottom: 5px;">${currentLang === 'zh' ? '最高难度' : 'Highest Rating'}</div>
                        <div style="font-size: 1.8em; font-weight: bold; color: #fd7e14;">${stats.highestRating || '-'}</div>
                    </div>
                </div>
            </div>`;
        document.getElementById('cf-analytics-dashboard').insertAdjacentHTML('beforeend', div);
    }

    function drawUnsolvedChart(unsolvedData) {
        const unsolvedKeys = Object.keys(unsolvedData);
        if (unsolvedKeys.length === 0) return;

        const div = `
            <div class="roundbox userActivityRoundBox borderTopRound borderBottomRound" style="width: 100%; padding: 1.5em; margin-top: 1em; box-sizing: border-box;">
                <h4 style="font-size: 1.2em; color: #333; font-weight: bold; margin-bottom: 0.8em;">🔥 ${t('unsolved', { n: unsolvedKeys.length })}</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${Object.entries(unsolvedData).map(([id, info]) => {
                        const baseUrl = info.contestId < 10000
                            ? `https://codeforces.com/problemset/problem/${info.contestId}/${info.problemIndex}`
                            : `https://codeforces.com/problemset/gymProblem/${info.contestId}/${info.problemIndex}`;
                        return `<a href="${baseUrl}" target="_blank" style="text-decoration: none; color: #d9534f; background: #fff0f0; padding: 4px 10px; border-radius: 6px; border: 1px solid rgba(217,83,79,0.3); font-size: 0.85em; transition: all 0.2s; box-shadow: 0 2px 5px rgba(217,83,79,0.05);" onmouseover="this.style.background='#d9534f'; this.style.color='#fff';" onmouseout="this.style.background='#fff0f0'; this.style.color='#d9534f';">${id}</a>`;
                    }).join('')}
                </div>
            </div>`;
        document.getElementById('cf-analytics-dashboard').insertAdjacentHTML('beforeend', div);
    }
