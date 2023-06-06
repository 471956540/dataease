import { G2PlotChartView, G2PlotDrawOptions } from '@/views/chart/components/js/panel/types'
import { Datum, Pie as G2Pie, PieOptions } from '@antv/g2plot'
import { antVCustomColor, flow, parseJson } from '@/views/chart/components/js/util'
import { getPadding } from '@/views/chart/components/js/panel/common/common_antv'
import { formatterItem, valueFormatter } from '@/views/chart/components/js/formatter'

const DEFAULT_DATA = []
export class Pie extends G2PlotChartView<PieOptions, G2Pie> {
  drawChart(drawOptions: G2PlotDrawOptions<G2Pie>): G2Pie {
    const chart = drawOptions.chart
    // data
    const data = chart.data.data
    // size
    let customAttr, radius, innerRadius
    if (chart.customAttr) {
      customAttr = parseJson(chart.customAttr)
      if (customAttr.size) {
        const s = customAttr.size
        radius = s.pieOuterRadius / 100
        innerRadius = s.pieInnerRadius / 100
      }
    }
    // custom color
    const color = antVCustomColor(chart)
    // options
    const initOptions: PieOptions = {
      data: data,
      angleField: 'value',
      colorField: 'field',
      appendPadding: getPadding(chart),
      color,
      radius,
      innerRadius,
      pieStyle: {
        lineWidth: 0
      },
      statistic: {
        title: false,
        content: {
          style: {
            whiteSpace: 'pre-wrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          },
          content: ''
        }
      },
      interactions: [
        {
          type: 'legend-active',
          cfg: {
            start: [{ trigger: 'legend-item:mouseenter', action: ['element-active:reset'] }],
            end: [{ trigger: 'legend-item:mouseleave', action: ['element-active:reset'] }]
          }
        },
        {
          type: 'legend-filter',
          cfg: {
            start: [
              {
                trigger: 'legend-item:click',
                action: [
                  'list-unchecked:toggle',
                  'data-filter:filter',
                  'element-active:reset',
                  'element-highlight:reset'
                ]
              }
            ]
          }
        },
        {
          type: 'tooltip',
          cfg: {
            start: [{ trigger: 'interval:mousemove', action: 'tooltip:show' }],
            end: [{ trigger: 'interval:mouseleave', action: 'tooltip:hide' }]
          }
        },
        {
          type: 'active-region',
          cfg: {
            start: [{ trigger: 'interval:mousemove', action: 'active-region:show' }],
            end: [{ trigger: 'interval:mouseleave', action: 'active-region:hide' }]
          }
        }
      ]
    }
    const options = this.setupOptions(chart, initOptions)

    // 开始渲染
    if (drawOptions.chartObj) {
      drawOptions.chartObj.destroy()
    }
    drawOptions.chartObj = new G2Pie(drawOptions.container, options)

    drawOptions.chartObj.off('interval:click')
    drawOptions.chartObj.on('interval:click', drawOptions.action)

    return drawOptions.chartObj
  }

  protected configLabel(chart: Chart, options: PieOptions): PieOptions {
    let label
    let customAttr: DeepPartial<ChartAttr>
    if (chart.customAttr) {
      customAttr = parseJson(chart.customAttr)
      if (customAttr.label) {
        const labelAttr = customAttr.label
        if (labelAttr.show) {
          label = {
            type: labelAttr.position,
            autoRotate: false,
            style: {
              fill: labelAttr.color,
              fontSize: parseInt(labelAttr.fontSize)
            }
          }
          if (labelAttr.position === 'outer') {
            label.type = 'spider'
          }
          // 格式化
          const yAxis = chart.yAxis
          label.formatter = function (param: Datum) {
            let res = param.value
            for (let i = 0; i < yAxis.length; i++) {
              const f = yAxis[i]
              if (f.name === param.category) {
                let formatterCfg = formatterItem
                if (f.formatterCfg) {
                  formatterCfg = f.formatterCfg
                }
                const labelContent = labelAttr.labelContent ?? ['quota']
                const contentItems = []
                if (labelContent.includes('dimension')) {
                  contentItems.push(param.field)
                }
                if (labelContent.includes('quota')) {
                  contentItems.push(valueFormatter(param.value, formatterCfg))
                }
                if (labelContent.includes('proportion')) {
                  const percentage = `${(Math.round(param.percent * 10000) / 100).toFixed(
                    labelAttr.reserveDecimalCount
                  )}%`
                  if (labelContent.length === 3) {
                    contentItems.push(`(${percentage})`)
                  } else {
                    contentItems.push(percentage)
                  }
                }
                res = contentItems.join(' ')
                break
              }
            }
            return res
          }
        } else {
          label = false
        }
      }
    }
    return { ...options, label }
  }

  protected setupOptions(chart: Chart, options: PieOptions): PieOptions {
    return flow(
      this.configTheme,
      this.configLabel,
      this.configTooltip,
      this.configLegend
    )(chart, options)
  }

  constructor() {
    super('pie', DEFAULT_DATA)
  }
}

export class PieDonut extends Pie {
  constructor() {
    super()
    this.name = 'pie-donut'
  }
}
