import gsap from 'gsap';

export default class Loader {
  constructor() {
    const str = "pixl studio."
    let text = ''
    str.split('').forEach(v=> {
      text += `<span class="loader-letter">${v}</span>`
      const arrayLetter = Array.from(text)
      console.log(arrayLetter);
    })
    document.querySelector('.loader-text').innerHTML = text
    gsap.set('.loader-letter',{
      opacity:0,
      y:50
    })
    this.obj = document.querySelector('#loader')
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d')
    this.canvasSize = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    this.canvas.width = this.canvasSize.width * Math.min(2, window.devicePixelRatio)
    this.canvas.height = this.canvasSize.height * Math.min(2, window.devicePixelRatio)

    this.canvas.style.width = `${this.canvasSize.width}px`
    this.canvas.style.height = `${this.canvasSize.height}px`
    this.obj.appendChild(this.canvas);
    this.point = {
      currentY: this.canvas.height,
      curveY: this.canvas.width
    }
    this.init()

  }
  init() {
    gsap.registerEffect({
      name: 'curve',
      defaults: {
        flag: true
      },
      effect: (target, config) => {
        const tl = gsap.timeline({
          onUpdate:() => {
            this.curveUpdate(config.flag)
          }
        })
          .to(target, {
            duration: 0.8,
            curveY:0,
            ease: 'slow(.215,.61,.355,1)'
          })
          .to(target, {
            currentY: 0,
            duration: 0.8,
          },'<')
        return tl
      }
    })
    const tl = gsap.timeline({delay:1})

      .set("body",{ width:"100vw" , height:"100vh", overflow:"hidden" })
      .set("#o-main" , {opacity:0})
      .add(gsap.effects.curve(this.point))
      .add(this.textAnimation.bind(this))
      .set(this.point , {
        currentY: this.canvas.height,
        curveY: this.canvas.height
      })
      .add(gsap.effects.curve(this.point, {flag: false}), '+=2')
      .set("body",{ width:"100%" , height:"100%", overflow:"inherit" })
      .from('.header-hero',{duration:.5,opacity:0})
    .from('#o-main', {duration: 1,opacity: 0})
      .to("main" , {opacity:1, duration:0.5,ease: 'slow(.215,.61,.355,1)', yoyo:true})
      .from(".words-inside", {duration: .4, rotationX:145, y:50 , stagger: 0.07, opacity: 0,ease: 'slow(.215,.61,.355,1)' , yoyo: true})
      .from('.blob-motion-container',{duration:.5, autoAlpha:0, ease: 'slow(.215,.61,.355,1)', yoyo:true})

  }
  textAnimation() {
    const tl = gsap.timeline()
      .to('.loader-letter',{
        opacity:1,
        y:0,
        duration:1,
        ease:'back.out(1)',
        stagger:{
          each:0.02
        }
      })
      .to('.loader-letter',{
        opacity:0,
        duration:.5,
        stagger:{
          each:0.02
        }
      })
  }

  curveUpdate(flag) {
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
    this.ctx.fillStyle = '#100b2b'

    if(flag) {
      this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)
      this.ctx.fillStyle = '#FFF'

    }

    this.ctx.beginPath()
    this.ctx.moveTo(0,0)
    this.ctx.lineTo(0,this.point.currentY)
    this.ctx.quadraticCurveTo(this.canvas.width / 2,this.point.curveY, this.canvas.width, this.point.currentY)
    this.ctx.lineTo(this.canvas.width , 0)
    this.ctx.closePath()
    this.ctx.fill()
  }
}
