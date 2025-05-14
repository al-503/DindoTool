class NameField {
    createField() {
        const texteField = document.createElement('h2');
        texteField.innerHTML = "Placeholder";

        return this.insertField(texteField);
    }
    /**
     * @param {node} texteField 
     * @returns 
     */
    insertField(texteField) {
        const $wrapper = document.createElement('div');
        $wrapper.classList.add('empty-name-field');

        $wrapper.appendChild(texteField)
        return $wrapper
    }
    /**
     * 
     * @param {string} name
     * @returns 
     */
    replaceField(name) {
        const field = document.getElementsByTagName('h2')[0];
        field.innerHTML = name
        return field
    }
}