import { useI18n } from '@/hooks/web/useI18n'
const { t } = useI18n()

const timestampFormatDate = (timestamp, showMs) => {
  if (!timestamp || timestamp === -1) {
    return '-'
  }

  const date = new Date(timestamp)

  const y = date.getFullYear()

  let MM = date.getMonth() + 1
  MM = MM < 10 ? '0' + MM : MM

  let d = date.getDate()
  d = d < 10 ? '0' + d : d

  let h = date.getHours()
  h = h < 10 ? '0' + h : h

  let m = date.getMinutes()
  m = m < 10 ? '0' + m : m

  let s = date.getSeconds()
  s = s < 10 ? '0' + s : s

  let format = y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s

  if (showMs === true) {
    const ms = date.getMilliseconds()
    format += ':' + ms
  }

  return format
}

const defaultValueScopeList = [
  { label: t('dataset.scope_edit'), value: 'EDIT' },
  { label: t('dataset.scope_all'), value: 'ALLSCOPE' }
]
const fieldOptions = [
  { label: t('dataset.text'), value: 'TEXT' },
  { label: t('dataset.value'), value: 'LONG' },
  {
    label: t('dataset.value') + '(' + t('dataset.float') + ')',
    value: 'DOUBLE'
  },
  { label: t('dataset.time_year'), value: 'DATETIME-YEAR' },
  {
    label: t('dataset.time_year_month'),
    value: 'DATETIME-YEAR-MONTH',
    children: [
      {
        value: 'yyyy-MM',
        label: 'YYYY-MM'
      },
      {
        value: 'yyyy/MM',
        label: 'YYYY/MM'
      }
    ]
  },
  {
    label: t('dataset.time_year_month_day'),
    value: 'DATETIME-YEAR-MONTH-DAY',
    children: [
      {
        value: 'yyyy-MM-dd',
        label: 'YYYY-MM-DD'
      },
      {
        value: 'yyyy/MM/dd',
        label: 'YYYY/MM/DD'
      }
    ]
  },
  {
    label: t('dataset.time_all'),
    value: 'DATETIME',
    children: [
      {
        value: 'yyyy-MM-dd HH:mm:ss',
        label: 'YYYY-MM-DD HH:MI:SS'
      },
      {
        value: 'yyyy/MM/dd HH:mm:ss',
        label: 'YYYY/MM/DD HH:MI:SS'
      }
    ]
  }
]

export { timestampFormatDate, defaultValueScopeList, fieldOptions }
