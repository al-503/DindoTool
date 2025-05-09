class App {
    constructor() {
        this.$dragodindesWrapper = document.querySelector('.dragodindes-wrapper')
        this.dragodindeApi = new DragodindeApi('/data/dragodindes.json')
    }

    async main() {
        // get data
        const data = await this.dragodindeApi.getDragodindes()

        // format data
        const dragodindes = data.map(dd => new Dragodinde(dd))

        // render data
        dragodindes.forEach(dd => {
            const dragodindeCard = new DragodindeCard(dd)
            this.$dragodindesWrapper.appendChild(dragodindeCard.createDragodindesCard())
        })
    }
}

const app = new App()
app.main()
