class App {
    constructor() {
        //this.$moviesWrapper = document.querySelector('.movies-wrapper')
        this.dragodindeApi = new DragodindeApi('/data/dragodindesjson')
    }

    async main() {
        const data = await this.dragodindeApi.getDragodindes()

        data.forEach(data => {
            const dagodindes = new Dragodinde(data)
            // this.$moviesWrapper.appendChild(Template.createCard())
        })
    }
}

const app = new App()
app.main()
