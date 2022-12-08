import SvgIcon from '@/components/SvgIcon/index.vue'

const svgRe = import.meta.globEager('./svg/*.svg')
// console.log(svgRe)
Object.keys(svgRe).forEach((item) => {
  console.log(svgRe[item])
})
export default (app) => {
  app.component('SvgIcon', SvgIcon)
}
