import React, { Component } from 'react'
import './index.less'

import echarts from 'echarts/lib/echarts'
import 'echarts/map/js/china'
// 再引入你需要使用的图表类型，标题，提示信息等
import 'echarts/lib/chart/map'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/title'

export default class ContentList extends Component<any, any> {
  private myChart: echarts.ECharts | undefined

  componentDidMount () {
    this.initEcharts()
  }

  createTip = (cityName: any, score: any, rangeGDP: any, rangeGCI: any, total: any) => {
    const color: string = '#e60012'
    const GDPText: string = '人均GDP'
    return '<div class=\'clickTap\' style=\'width:230px\'> ' +
      '<img src=\'http://deindex.h3c.com/cn/tres/WebUI/Deindex/images/2020/index/2020mapBoxBg2.png\' style=\'position: absolute;left:0;\'>' + '<span style=\'position:absolute;color: ' + color +
      ';top: 14px;left: 20px;font-size: 24px;font-weight: normal;\'>' + cityName +
      '</span>' + '<span style=\'position:absolute;color: #000;top: 50px;left: 20px;font-size: 15px;line-height: 20px;\'>' + GDPText + '<br>排名</span>' +
      '<span style=\'position:absolute;color: #000;top: 92px;left: 20px;font-size: 22px;font-weight: normal;\'><span style=\'color:#ea2232;\'>' + rangeGDP +
      '</span>/<span style=\'font-size: 14px;font-weight: normal;\'>' + total + '</span></span>' +
      '<hr style=\'position: absolute;width: 4px;height: 60px;top: 36px;left:94px;padding: 0;border:none;border-left:1px solid rgb(113,113,113);display: block;\'>' +
      '<span style=\'position:absolute;color: #000;top: 50px;left: 112px;font-size: 15px;line-height: 20px;\'>中国城市数字<br>经济指数排名</span>' +
      '<span style=\'position:absolute;color: #000;top: 92px;left: 112px;font-size: 22px;font-weight: normal;\'><span style=\'color:#ea2232;\'>' + rangeGCI +
      '</span>/<span style=\'font-size: 14px;font-weight: normal;\'>' + total + '</span></span>' + '<span style=\'display: block;position: absolute;width: 190px;height: 1px;background: rgb(113,113,113);left:50%;top: 127px;margin-left: -95px;\'></span><span style=\'position:absolute;color: #000;width:100%;text-align: center;top:130px;font-size: 14px\'><a href=\'/2020/Insight/cityinfo?city=' + cityName + '\' class=\'goinfo\' target=\'_blank\'>详情<span style=\'color: #e12138;\'> ></span></a></span></div>'
  }

  initEcharts = () => {
    // @ts-ignore
    this.myChart = echarts.init(document.getElementById('main'))
    this.myChart.showLoading()
    //echarts.registerMap('HK', geoJson);
    // @ts-ignore
    this.myChart.setOption({
      tooltip: {
        formatter: function(params: any, ticket, callback) {
          return params.seriesName + '<br />' + params.name + '：' + params.value
        }
      },
      visualMap: {
        min: 0,
        max: 1500,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],
        inRange: {
          color: ['#e0ffff', '#006edd']
        },
        show: true
      },
      geo: {
        map: 'china',
        roam: false,
        zoom: 1.23,
        label: {
          normal: {
            show: true,
            fontSize: '10',
            color: 'rgba(0,0,0,0.7)'
          }
        },
        itemStyle: {
          normal: {
            borderColor: 'rgba(0, 0, 0, 0.2)'
          },
          emphasis: {
            areaColor: '#F3B329',
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowBlur: 20,
            borderWidth: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      },
      series: [
        {
          name: '信息量',
          geoIndex: 0,
          type: 'map',
          data: [
            { name: '沧州', value: 0 },
            { name: '北京', value: Math.random() * 100 },
            { name: '天津', value: Math.random() * 100 },
            { name: '上海', value: Math.random() * 100 },
            { name: '重庆', value: Math.random() * 100 },
            { name: '河北', value: Math.random() * 100 },
            { name: '河南', value: Math.random() * 100 },
            { name: '云南', value: Math.random() * 100 },
            { name: '辽宁', value: Math.random() * 100 },
            { name: '黑龙江', value: Math.random() * 100 },
            { name: '湖南', value: Math.random() * 100 },
            { name: '安徽', value: Math.random() * 100 },
            { name: '山东', value: Math.random() * 100 },
            { name: '新疆', value: Math.random() * 100 },
            { name: '江苏', value: Math.random() * 100 },
            { name: '浙江', value: Math.random() * 100 },
            { name: '江西', value: Math.random() * 100 },
            { name: '湖北', value: Math.random() * 100 },
            { name: '广西', value: Math.random() * 100 },
            { name: '甘肃', value: Math.random() * 100 },
            { name: '山西', value: Math.random() * 100 },
            { name: '内蒙古', value: Math.random() * 100 },
            { name: '陕西', value: Math.random() * 100 },
            { name: '吉林', value: Math.random() * 100 },
            { name: '福建', value: Math.random() * 100 },
            { name: '贵州', value: Math.random() * 100 },
            { name: '广东', value: Math.random() * 100 },
            { name: '青海', value: Math.random() * 100 },
            { name: '西藏', value: Math.random() * 100 },
            { name: '四川', value: Math.random() * 100 },
            { name: '宁夏', value: Math.random() * 100 },
            { name: '海南', value: Math.random() * 100 },
            { name: '台湾', value: Math.random() * 100 },
            { name: '香港', value: Math.random() * 100 },
            { name: '澳门', value: Math.random() * 100 }
          ]
        }
      ]
    })
    this.myChart.hideLoading()
  }

  render () {
    return (
      <div className='create-list' style={{ background: '#fff', height: '100%', width: '100%' }}>
        <div id='main' />
      </div>
    )
  }
}

