<template>
    <div class="container">
        <app-header-bar
            :maxQuotes="maxQuotes"
            :quoteCount="quotes.length"
        ></app-header-bar>
        <app-new-quote 
            @quoteWasAdded="newQuote($event)"
        ></app-new-quote>
        <app-quote-grid
            :quotes="quotes"
            @quoteDeleted="deleteQuote"
        ></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a Quote to delete IT !</div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderBar from './components/HeaderBar.vue';
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';

    export default {
        data() {
            return {
                quotes: ['Just a quote to see some'],
                maxQuotes: 10,
            }
        },
        components: {
            appHeaderBar: HeaderBar,
            appQuoteGrid: QuoteGrid, 
            appNewQuote: NewQuote, 
        },
        methods: {
            newQuote(quote) {
                if (this.quotes.length >= this.maxQuotes) {
                    return alert('Please delete Quote first')
                };
                this.quotes.push(quote);
            },
            deleteQuote(index) {
                this.quotes.splice(index, 1);
            },
        },
    }
</script>

<style>
</style>
