class DragodindeCard {
    constructor(dragodinde) {
        this._dragodinde = dragodinde
    }

    createDragodindesCard() {
        const $wrapper = document.createElement('div')
        $wrapper.classList.add('dragodindes-card-wrapper')

        const dragodindeCard = `
            <h3">${this._dragodinde.name}</h3>
        `

        $wrapper.innerHTML = dragodindeCard
        return $wrapper
    }
}