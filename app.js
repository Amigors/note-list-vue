const App = new Vue({
    el: '#app',
    data() {
        return {
            title: 'Notes list',
            placeholderText: 'Enter your notes',
            inputValue: '',
            notes: []
        }
    },
    methods: {
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        removeNote(i) {
            this.notes.splice(i, 1)
        }
    },
    computed: {
        doubleCount() {
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(value) {
             
        }
    }
})
