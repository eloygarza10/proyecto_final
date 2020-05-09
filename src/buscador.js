export const quotesMixin = {
    data() {
        return {
            quotes: ['quotes'],
            filterText: ''
        }
    },
    computed: {
        filteredQuotes() {
            return this.quotes.filter((element) => {
                return element.match(this.filterText);
            });
        }
    },

    created() {
        console.log('CREADO')
    }
};