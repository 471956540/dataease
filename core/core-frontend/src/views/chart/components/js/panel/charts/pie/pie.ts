import {
  G2PlotChartView,
  G2PlotDrawOptions
} from '@/views/chart/components/js/panel/types/impl/g2plot'
import { Datum, Pie as G2Pie, PieOptions } from '@antv/g2plot'
import { flow, parseJson } from '@/views/chart/components/js/util'
import { getPadding } from '@/views/chart/components/js/panel/common/common_antv'
import { formatterItem, valueFormatter } from '@/views/chart/components/js/formatter'
import {
  PIE_AXIS_TYPE,
  PIE_EDITOR_PROPERTY,
  PIE_EDITOR_PROPERTY_INNER
} from '@/views/chart/components/js/panel/charts/pie/common'

const DEFAULT_DATA = []
export class Pie extends G2PlotChartView<PieOptions, G2Pie> {
  axis: AxisType[] = PIE_AXIS_TYPE
  properties = PIE_EDITOR_PROPERTY
  propertyInner = PIE_EDITOR_PROPERTY_INNER
  drawChart(drawOptions: G2PlotDrawOptions<G2Pie>): G2Pie {
    const { chart, container, action } = drawOptions
    if (!chart.data) {
      return
    }
    // data
    const data = chart.data.data
    // custom color
    const customAttr = parseJson(chart.customAttr)
    const color = customAttr.basicStyle.colors
    // options
    const initOptions: PieOptions = {
      data: data,
      angleField: 'value',
      colorField: 'field',
      appendPadding: getPadding(chart),
      color,
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

    const newChart = new G2Pie(container, options)
    newChart.on('interval:click', action)
    return newChart
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
              fontSize: labelAttr.fontSize
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

  protected configTooltip(chart: Chart, options: PieOptions): PieOptions {
    let tooltip
    const customAttr: DeepPartial<ChartAttr> = parseJson(chart.customAttr)
    if (customAttr.tooltip) {
      const tooltipAttr = customAttr.tooltip
      if (tooltipAttr.show) {
        tooltip = {
          formatter: function (param: Datum) {
            let res
            const obj = { name: param.field, value: param.value }
            const yAxis = chart.yAxis
            for (let i = 0; i < yAxis.length; i++) {
              const f = yAxis[i]
              if (f.formatterCfg) {
                res = valueFormatter(param.value, f.formatterCfg)
              } else {
                res = valueFormatter(param.value, formatterItem)
              }
            }
            obj.value = res ?? ''
            return obj
          }
        }
      } else {
        tooltip = false
      }
    }
    return { ...options, tooltip }
  }

  protected configBasicStyle(chart: Chart, options: PieOptions): PieOptions {
    const customAttr = parseJson(chart.customAttr)
    return {
      ...options,
      radius: customAttr.basicStyle.radius
    }
  }

  protected setupOptions(chart: Chart, options: PieOptions): PieOptions {
    return flow(
      this.configTheme,
      this.configBasicStyle,
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
  propertyInner: EditorPropertyInner = {
    ...PIE_EDITOR_PROPERTY_INNER,
    'basic-style-selector': ['colors', 'alpha', 'radius', 'innerRadius']
  }
  protected configBasicStyle(chart: Chart, options: PieOptions): PieOptions {
    const customAttr = parseJson(chart.customAttr)
    return {
      ...options,
      radius: customAttr.basicStyle.radius,
      innerRadius: customAttr.basicStyle.innerRadius
    }
  }

  constructor() {
    super()
    this.name = 'pie-donut'
  }
}
