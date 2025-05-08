class App {
    constructor() {
        this.$dragodindesWrapper = document.querySelector('.dragodindes-wrapper')
        this.dragodindeApi = new DragodindeApi('/data/dragodindes.json')
    }

    async main() {
        // ont recup la data
        const data = await this.dragodindeApi.getDragodindes()

        // ont format la data
        const dragodindes = data.map(dd => new Dragodinde(dd))

        // ont render la data
        dragodindes.forEach(dd => {
            const dragodindeCard = new DragodindeCard(dd)
            this.$dragodindesWrapper.appendChild(dragodindeCard.createDragodindesCard())
        })
    }
}

const app = new App()
app.main()
