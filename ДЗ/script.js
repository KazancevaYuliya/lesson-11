class Circle {
    constructor(size, color) {
        this.size = size
        this.color = color


        this.init()
    }

    init() {
        this.render()

    }

    template() {

        return `
      <div style="border-radius: 100%; background-color: ${this.color}; width: ${this.size}px; height: ${this.size}px">
      </div>
      `
    }

    render() {

        const template = this.template()
        document.body.innerHTML = document.body.innerHTML + template
    }
}

const circle = new Circle(200, 'green')
console.log (circle)

new Circle(300, 'red')
new Circle(150, 'blue')

